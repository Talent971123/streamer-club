import { useMutation } from "@apollo/client";
import axios from "axios";
import { Button } from "components/Button";
import { CLIPS } from "graphql/club";
import { useUser } from "hooks";
import { ScreenContext } from "hooks/context/ScreenContext";
import { StreamPageContext } from "hooks/context/StreamPageContext";
import React, { useContext, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import TimeRangeSlider from 'react-time-range-slider';
import 'react-time-range-slider/dist/styles.css';
import { toast } from "react-toastify";
import { apiBaseUrl, muxAssetBaseUrl } from "utils/constData";
import { ButtonWrapper, CheckBox, CommentaryWrapper, ContentWrapper, DropdownContainer, FlexWrapper, SliderWrapper, TextInput, TimeDisplay } from "./createClip.style";
import moment from 'moment'

const CreateClipView: React.FC = (props: any) => {
  const { isAdmin, user } = useUser()

  const { clubInfo } = props;

  const { createClipFlag, setCreateClipFlag } = useContext(ScreenContext);
  const { playback_id, home_players, match_id } = useContext(StreamPageContext);

  const inputRef = useRef<HTMLInputElement>(null);
  const checkBoxRef = useRef<any>(null);
  const [playerDetailId, setPlayerDetailId] = useState<any>(null);
  const [secVal, setSecVal] = useState<any>({ start: 0, end: 0 });

  const { Option } = DropdownContainer;

  const closeEventButton = () => {
    setCreateClipFlag(false);
  };

  const getAssetIdByPlaybackId = (playback_id: any) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${apiBaseUrl}/mux/playbacks/${playback_id}/asset`)
        .then((res) => {
          resolve(res.data.object.id)
        }).catch((err) => {
          console.error("MUX request error:", err);
          reject("MUX request error:" + err);
        });
    })
  }

  const postCreateClip = (asset_id: any) => {

    return new Promise((resolve, reject) => {
      axios
        .post(`${apiBaseUrl}/mux/clip-video`, {
          playback_policy: "public",
          input: [
            {
              "url": muxAssetBaseUrl + '/' + asset_id,
              "start_time": secVal.start,
              "end_time": secVal.end
            }
          ],
        })
        .then((res) => {
          resolve(res)
        }).catch((err) => {
          reject("MUX request error:" + err);
        });
    })
  }

  const [saveFeaturedClip] = useMutation(CLIPS.INSERT_CLIP_ASSET_USER_CLUB, {
    onCompleted() {
      toast.success("Featured clip saved");
      setCreateClipFlag(false)
    },
    onError(e) {
      toast.error("Error Happened.");
    },
  });

  const [saveClipProgress, setSaveClipProgress] = useState<boolean>(false);

  const saveClip = () => {

    const clipName: string | undefined = inputRef?.current?.value
    const show_on_club: boolean = checkBoxRef.current.state.checked
    /** TODO: if use is player get the player details ID from user. 
     * null temporary */
    const players_details_id = isAdmin ? playerDetailId : null;

    setSaveClipProgress(true)
    /** request mux data */
    // Retrieve asset ID
    getAssetIdByPlaybackId(playback_id).then((assetId) => {

      postCreateClip(assetId).then((res: any) => {

        setSaveClipProgress(false);

        const objects = {
          club_id: clubInfo.id,
          show_on_club,
          show_on_player: true,
          players_details_id,
          clip_asset: {
            data: {
              name: clipName, //`${home_display_name} vs ${away_display_name} - ${round_name}`,
              playback_id: res.data.playback_ids[0].id,
              asset_id: res.data.id,
              match_id
            }
          }
        };

        saveFeaturedClip({ variables: { objects } });

      }).catch((err) => {
        console.error("MUX request error:", err);
        setSaveClipProgress(false);
      });

    }).catch((err) => {
      console.error("MUX request error:", err);
      setSaveClipProgress(false);
    });
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      var video = document.getElementById("bitmovinplayer-video-player-container") as HTMLVideoElement | null;
      setSecVal({ ...secVal, end: video?.duration })
    }
  }, [createClipFlag])

  const getCurrentTime = (): number => {
    const video = document.getElementById("bitmovinplayer-video-player-container") as HTMLVideoElement | null;
    return video?.currentTime ?? 0
  }

  const displaySecondsAsTime = (sec: number) => (moment().startOf('day').seconds(sec ?? 0).format('HH:mm:ss'))

  return (
    <CommentaryWrapper>
      {createClipFlag && (
        <ContentWrapper>

          <FlexWrapper direction="row" justify="space-between">
            <TextInput placeholder="Add Clip Name" ref={inputRef} />
            {isAdmin && <DropdownContainer allowClear onChange={(v) => setPlayerDetailId(v)} placeholder="Select Player (non-mandatory)" style={{ maxWidth: 320 }} >
              {home_players &&
                home_players?.map((item: any, index: number) => (
                  <Option value={item.id} key={`player-create-clip-dd-${index}`}>
                    {`${item?.user?.first_name} ${item?.user?.last_name}`}
                  </Option>
                ))}
            </DropdownContainer>}
          </FlexWrapper>

          <FlexWrapper>
            <FlexWrapper css={{
              marginTop: 20,
              marginBottom: 20,
              borderRadius: 5,
              border: "1px solid #ccc",
              padding: "15px 0px 5px 0px",
              backgroundColor: "#121212"
            }} direction="row" justify="space-between" maxWidth="450px" >

              <FlexWrapper direction="column" justify="space-between" maxWidth="310px" >
                <TimeDisplay>
                  {displaySecondsAsTime(secVal.start)}
                </TimeDisplay>
                <Button
                  bColor="gray"
                  fColor="gray.100"
                  css={`height: 35px; width: 140px; margin-bottom: 10px;`}
                  onClick={() => (setSecVal({ ...secVal, start: getCurrentTime() }))}
                >Set Start time</Button>
              </FlexWrapper>

              <FlexWrapper direction="column" justify="space-between" maxWidth="310px" >

                <TimeDisplay>
                  {displaySecondsAsTime(secVal.end)}
                </TimeDisplay>

                <Button
                  bColor="gray"
                  fColor="gray.100"
                  css={`height: 35px; width: 140px; margin-bottom: 10px;`}
                  onClick={() => (setSecVal({ ...secVal, end: getCurrentTime() }))}
                >Set End time</Button>
              </FlexWrapper>

            </FlexWrapper>
          </FlexWrapper>

          <ButtonWrapper>

            <Button
              bColor="_primary"
              css={`height: 40px; width: 120px;`}
              onClick={saveClip}
              loading={saveClipProgress}
            > {saveClipProgress ? 'Saving' : 'Save Clip'} </Button>

            <Button
              fColor="gray.100"
              css={`height: 40px; width: 120px;`}
              onClick={closeEventButton}
            >Cancel</Button>

            <CheckBox ref={checkBoxRef}>Add to Media Gallery</CheckBox>

          </ButtonWrapper>

        </ContentWrapper>

      )}


    </CommentaryWrapper>
  );
};

const mapStateToProps = (state) => ({
  clubInfo: state.club.info,
});

export default connect(mapStateToProps)(CreateClipView);

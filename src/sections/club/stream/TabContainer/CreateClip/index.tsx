import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "components/Layout";
import { themeGet } from "@styled-system/theme-get";
import { Border, CommentaryWrapper, ContentWrapper } from "./commentary.style";
import { Button } from "components/Button";
import { ScreenContext } from "hooks/context/ScreenContext";
import CloseIcon from "assets/icon/close";
import TimeRangeSlider from 'react-time-range-slider';
import 'react-time-range-slider/dist/styles.css';
import axios from "axios";
import { muxVideoApiBaseUrl, muxAssetBaseUrl, muxGetAuthToken, muxPostAuthToken } from "utils/constData";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { PLAYERQL } from "graphql/club";
import { toast } from "react-toastify";


const defaultTime = {
  start: "00:00",
  end: "23:59"
};
const defaultBoundaryTime = {
  min: "00:00",
  max: "23:59"
};

const CreateClipView: React.FC = () => {
  const router = useRouter();
  const { createClip, setCreateClipShow } = useContext(ScreenContext);
 
  const closeEventButton = () => {
    setCreateClipShow(false);
  };

  const getTotalSeconds = (time: string) => {
    var actualTime = time.split(':');
    
    var totalSeconds = 0;
    if(actualTime.length == 3){
      totalSeconds = (+actualTime[0]) * 60 * 60 + (+actualTime[1]) * 60 + (+actualTime[2]);
    } else if(actualTime.length == 2){
      totalSeconds = (+actualTime[0]) * 60 + (+actualTime[1]);
    } else if(actualTime.length == 1){
      totalSeconds = (+actualTime[0]);
    }
    return totalSeconds;
  }

  const getAssetIdByPlaybackId = (playback_id: any) => {
    return new Promise((resolve, reject) => {
        axios
        .get(muxVideoApiBaseUrl+'/playback-ids/'+playback_id, {
          headers: {
         'Authorization': `Basic ${muxGetAuthToken}`
        }})
        .then((res) => {
          resolve( res.data.data.object.id)
        }).catch((err) => {
          console.error("MUX request error:", err);
          reject("MUX request error:" + err);
        });
    })
  }

  const postCreateClip = (asset_id: any) => {
    return new Promise((resolve, reject) => {
        axios
        .post(muxVideoApiBaseUrl+'/assets', {
          playback_policy: "public",
          input: [
            {
              "url": muxAssetBaseUrl + '/' + asset_id,
              "start_time": getTotalSeconds(timeValue.start),
              "end_time": getTotalSeconds(timeValue.end)
            }
          ],
        }, {auth: muxPostAuthToken})
        .then((res) => {
          resolve(res)
        }).catch((err) => {
          reject("MUX request error:"+ err);
        });
    })
  }
  
  const [savePlayerFeaturedClip] = useMutation(PLAYERQL.INSERT_PLAYER_FEATURED_CLIP, {
    onCompleted() {
      toast.success("Featured clip saved");
    },
    onError(e) {
      toast.error("Error Happened.");
    },
  });

  const [saveClipProgress, setSaveClipProgress] = useState<boolean>(false);

  const saveClip = () => {
    setSaveClipProgress(true)
    // asset_id from URL is actually a playback_id
    const { asset_id } = router.query;
    /** request mux data */
    // Retrieve asset ID
    getAssetIdByPlaybackId(asset_id).then((assetId) => {
      postCreateClip(assetId).then((res: any) => {
        setSaveClipProgress(false);
        
        const objects = {
          // Todo: make player_details_id dynamic
          player_details_id: 3, // static id
          video_asset_id: res.data.data.playback_ids[0].id,
          show_on_club: true,
          show_on_profile: true,
        };

        savePlayerFeaturedClip({ variables: { objects } });
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
      
      var onDurationChange = function(){
          if(video?.readyState){
            //to your thing
            if (video.duration > 0) {
              var minutes = Math.trunc(video.duration / 60);
              var seconds = Math.trunc(video.duration % 60);  
              
              setTimeValue({
                start: "00:00",
                end: minutes+':'+seconds
              })
              setBoundaryTime({
                min: "00:00",
                max: minutes+':'+seconds
              })
            }
          }
        };
        video?.addEventListener('durationchange', onDurationChange);
      	onDurationChange();
     }
  },[createClip])

  const [timeValue, setTimeValue] = useState<any>(defaultTime);
  const [boundaryTime, setBoundaryTime] = useState<any>(defaultBoundaryTime);

  const changeStartHandler = (time) => {
      // console.log("Start Handler Called", time);
  }

  const timeChangeHandler = (time) => {
      setTimeValue(time);
  }

  const changeCompleteHandler = (time) => {
      // console.log("Complete Handler Called", time);
  }


  return (
    <CommentaryWrapper>
      <ContentWrapper>
        <Row
          flexDirection="column"
          justifyContent="center"
          gap={16}
          display="flex"
        >
          {createClip && (
            <Row
              flexDirection="column"
              alignItems="center"
              justifyContent="space-around"
              css={`
                background-color: ${themeGet("colors.gray.900")};
                padding-right: 10px;
              `}
              gap={20}
            >
                 <div style={{ width: "300px", margin: "20px" }}>
                  <div className="time-range">
                    <b>Start Time:</b> {timeValue.start} <b>End Time:</b>{" "}
                    {timeValue.end}
                  </div>
                  <div className="time-range-slider">
                    <TimeRangeSlider
                      disabled={false}
                      format={24}
                      maxValue={boundaryTime.max}
                      minValue={boundaryTime.min}
                      name={"time_range"}
                      onChangeStart={changeStartHandler}
                      onChangeComplete={changeCompleteHandler}
                      onChange={timeChangeHandler}
                      step={1}
                      value={timeValue}/>
                    </div>
                 </div>
              <Button
                fColor="gray.100"
                css={`
                  height: 50px;
                  width: 100px;
                  background-color: #4a4949;
                  border: 0px;
                `}
                onClick={saveClip}
                loading={saveClipProgress}
              >
                {saveClipProgress ? 'Saving' : 'Save Clip'}</Button>
              <Button
                bColor="primary"
                css={{ border: "none" }}
                icon={<CloseIcon />}
                onClick={closeEventButton}
              />
            </Row>
          )}
        </Row>
      </ContentWrapper>
    </CommentaryWrapper>
  );
};

export default CreateClipView;

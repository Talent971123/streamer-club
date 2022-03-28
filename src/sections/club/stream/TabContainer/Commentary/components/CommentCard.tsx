import { themeGet } from "@styled-system/theme-get";
import { Row } from "components/Layout";
import { Text } from "components/Text";
import { useUser } from "hooks";
import moment from "moment";
import React, { useState } from "react";
import { Border, SectionWrapper } from "../commentary.style";
import { EventAction } from "./index";

interface Props {
  children?: React.ReactNode;
  data: any;
}

const CommentCard: React.FC<Props> = ({ data }) => {
  const { isAdmin } = useUser();
  const [showEdit, setShow] = useState(false);

  const seekPlayerTimer = (time: number) => {
    // TODO - Add callback event to seek player time
    // if(typeof window !== 'undefined'){
    //   const video = document.getElementById("bitmovinplayer-video-player-container") as HTMLVideoElement | null;
    //   video?.fastSeek && video?.fastSeek(time);
    // }
    const video = document.getElementById(
      "bitmovinplayer-video-player-container"
    ) as HTMLMediaElement | null;

    if (video?.seekable) {
      video.currentTime = time;
      document.documentElement.scrollTop = 0;
      video.play();
    }
  };

  const toggleEdit = () => setShow(!showEdit);

  return (
    <>
      {!showEdit && (
        <Row
          css={`
            background-color: ${themeGet("colors.gray.900")};
            min-height: 120px;
          `}
        >
          <Border mode={data?.event_collection?.event_name} />
          <Row
            responsive={{
              480: { flexDirection: "column" },
            }}
          >
            <SectionWrapper>
              <Text
                fColor="white"
                fSize={1}
                fWeight={700}
                css={{ marginLeft: 13 }}
              >
                {data?.event_collection?.event_name ?? ""}
              </Text>
            </SectionWrapper>
            <SectionWrapper width="100%">
              <SectionWrapper
                flexDirection="row"
                justifyContent="space-between"
              >
                <Text
                  fColor="red.100"
                  fSize={0.75}
                  fWeight={700}
                  css={{ marginLeft: 13, cursor: "pointer" }}
                  onClick={() => {
                    seekPlayerTimer(data?.video_time);
                  }}
                >
                  {`${moment.utc(data?.video_time * 1000).format("HH:mm:ss")}`}
                </Text>

                {isAdmin && (
                  <Text cursor="pointer" onClick={toggleEdit}>
                    Edit
                  </Text>
                )}
              </SectionWrapper>

              <Text
                fColor="white"
                fSize={1}
                fWeight={200}
                css={{ marginTop: 5, marginLeft: 13 }}
              >
                {data?.comment}
              </Text>
              <Text
                fColor="red.100"
                fSize={0.75}
                fWeight={200}
                css={{ marginTop: 5, marginLeft: 13 }}
              >
                {`${data?.players_detail?.user?.first_name ?? ""} ${
                  data?.players_detail?.user?.last_name ?? ""
                } - ${data?.team?.club?.display_name}`}
              </Text>
            </SectionWrapper>
          </Row>
        </Row>
      )}

      {showEdit && <EventAction edit={data} onClose={toggleEdit} />}
    </>
  );
};

export default CommentCard;

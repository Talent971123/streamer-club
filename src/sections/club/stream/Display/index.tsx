import React, { useEffect } from "react";
//  import component
import { Col, Row } from "components/Layout";
import videojs from "@mux/videojs-kit";
// import styled
import { DisplayWrpper } from "./display.stlye";

interface VideoProps {
  playBackID?: string;
}

const Banner: React.FC<VideoProps> = ({
  playBackID = "eTexKeHt6q89D01VEJwhGPFNgh9pjRsmb9ovotAR4A0200",
}) => {
  useEffect(() => {
    const player = videojs("my-player", {
      timelineHoverPreviews: true,
      plugins: {
        mux: {
          debug: false,
          data: {
            env_key: process.env.NEXT_PUBLIC_MUX_ENV,
            video_title: "Example Title",
          },
        },
      },
    });
    player.src({
      src: playBackID,
      type: "video/mux",
    });
  }, []);

  return (
    <DisplayWrpper>
      <Row>
        <Col item={24}>
          <video
            id="my-player"
            className={"video-js vjs-16-9"}
            controls
            poster="https://image.mux.com/eTexKeHt6q89D01VEJwhGPFNgh9pjRsmb9ovotAR4A0200/thumbnail.png"
            preload="auto"
            width="100%"
          ></video>
        </Col>
      </Row>
    </DisplayWrpper>
  );
};

export default Banner;

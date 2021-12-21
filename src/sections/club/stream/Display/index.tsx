import React, { useEffect, useState, useRef } from "react";
//  import component
import { Col, Row } from "components/Layout";
import videojs from "@mux/videojs-kit";
import "@mux/videojs-kit/dist/index.css";

// import styled
import { DisplayWrpper } from "./display.style";

interface VideoProps {
  playBackID?: string;
}

const Banner: React.FC<VideoProps> = ({
  playBackID = "3EFvrxYvrPuGAOz2Y9EO3S6nzv9FU02WYHQT402uJPW01s",
}) => {
  // useEffect(() => {
  //   const player = videojs("my-player", {
  //     timelineHoverPreviews: true,
  //     plugins: {
  //       mux: {
  //         debug: false,
  //         data: {
  //           env_key: process.env.NEXT_PUBLIC_MUX_ENV,
  //           video_title: "Example Title",
  //         },
  //       },
  //     },
  //   });
  //   player.src({
  //     src: playBackID,
  //     type: "video/mux",
  //   });
  // }, []);

  return (
    <DisplayWrpper>
      <Row>
        <Col item={24}>
          {/* <video
            id="my-player"
            className={"video-js vjs-16-9"}
            controls
            poster="https://image.mux.com/3EFvrxYvrPuGAOz2Y9EO3S6nzv9FU02WYHQT402uJPW01s/thumbnail.png"
            preload="auto"
            width="100%"
          ></video> */}
          <video
            id="my-player"
            className={"video-js vjs-16-9 vjs-big-play-centered"}
            controls
            preload="auto"
            width="100%"
            data-setup="{}"
          >
            <source
              src="3EFvrxYvrPuGAOz2Y9EO3S6nzv9FU02WYHQT402uJPW01s"
              type="video/mux"
            />
          </video>

          {/* <video
            id="mux-default"
            className="video-js vjs-16-9"
            controls
            preload="auto"
            width="100%"
            poster="https://image.mux.com/DS00Spx1CV902MCtPj5WknGlR102V5HFkDe/thumbnail.jpg"
            data-setup='{"timelineHoverPreviews": true}'
          >
            <source src="DS00Spx1CV902MCtPj5WknGlR102V5HFkDe" type="video/mux" />
            <source src="https://stream.mux.com/3EFvrxYvrPuGAOz2Y9EO3S6nzv9FU02WYHQT402uJPW01s.m3u8" type="application/x-mpegURL" />

          </video> */}

          {/* <video
            id="my-player"
            className={"video-js vjs-16-9 vjs-big-play-centered"}
            width="100%"
          >
          </video> */}

          {/* <video
            id={playerName}
            className={"video-js vjs-16-9 vjs-big-play-centered"}
            controls
            // preload="auto"
            width="100%"
            poster="https://image.mux.com/3EFvrxYvrPuGAOz2Y9EO3S6nzv9FU02WYHQT402uJPW01s/thumbnail.jpg"
            data-setup='{"timelineHoverPreviews": true}'
          >
            <source src="3EFvrxYvrPuGAOz2Y9EO3S6nzv9FU02WYHQT402uJPW01s" type="video/mux" />
          </video> */}

          {/* <video id="my-player" className={"video-js vjs-16-9 vjs-big-play-centered"} controls preload="auto" width="100%"
            data-setup='{"timelineHoverPreviews": true }'
          >
            <source src="3EFvrxYvrPuGAOz2Y9EO3S6nzv9FU02WYHQT402uJPW01s" type="video/mux" />
          </video> */}

          {/* <video
            id="my-player"
            className={"video-js vjs-16-9"}
            controls
            // poster="https://image.mux.com/eTexKeHt6q89D01VEJwhGPFNgh9pjRsmb9ovotAR4A0200/thumbnail.png"
            preload="auto"
            width="100%"
          ></video> 
          */}

          {/**
           
          <video
            id="my-player"
            className={"video-js vjs-16-9"}
            controls
            poster="https://image.mux.com/eTexKeHt6q89D01VEJwhGPFNgh9pjRsmb9ovotAR4A0200/thumbnail.png"
            width="100%"
            data-setup='{ "timelineHoverPreviews": true }'
          >
            <source src={'https://stream.mux.com/3EFvrxYvrPuGAOz2Y9EO3S6nzv9FU02WYHQT402uJPW01s.m3u8'} type="application/x-mpegURL" />
          </video>

           */}
        </Col>
      </Row>
    </DisplayWrpper>
  );
};

export default Banner;

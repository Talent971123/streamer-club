import React, { useEffect, useState, useRef } from "react";
//  import component
import { Col, Row } from "components/Layout";
import { VideoPlayer } from "components/Video";
// import styled
import { DisplayWrpper } from "./display.style";

interface VideoProps {
  playBackID?: string;
}

const Banner: React.FC<VideoProps> = ({
  playBackID = "3EFvrxYvrPuGAOz2Y9EO3S6nzv9FU02WYHQT402uJPW01s",
}) => {
  const [src, setSrc] = useState<string>("");
  const [poster, setPoster] = useState<string>("");

  useEffect(() => {
    const video_src = `https://stream.mux.com/${playBackID}.m3u8`;
    const video_poster = `https://image.mux.com/${playBackID}/thumbnail.png`;
    setSrc(video_src);
    setPoster(video_poster);
  });

  return (
    <DisplayWrpper>
      <Row>
        <Col item={24}>
          <VideoPlayer src={src} poster={poster} />
        </Col>
      </Row>
    </DisplayWrpper>
  );
};

export default Banner;

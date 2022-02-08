import React, { useContext } from "react";
import dynamic from "next/dynamic";
//  import component
import { Col, Row } from "components/Layout";

const VideoPlayer = dynamic(() => import("components/Video/Bitmovin"), {
  ssr: false,
});

// import styled
import { DisplayWrpper } from "./display.style";
import { StreamPageContext } from "hooks/context/StreamPageContext";

const Banner: React.FC = () => {
  const { playback_id } = useContext(StreamPageContext);

  return (
    <DisplayWrpper>
      <Row>
        <Col item={24}>
          <VideoPlayer playback_id={playback_id} />
        </Col>
      </Row>
    </DisplayWrpper>
  );
};

export default Banner;

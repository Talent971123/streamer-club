import React from "react";
//  import component
import { Col, Row } from "components/Layout";
// import styled
import { DisplayWrpper } from "./display.stlye";
// import assets
import bgImg from "assets/images/stream/banne.png";
import { Image } from "components/Image";

const Banner: React.FC = () => {
  return (
    <DisplayWrpper>
      <Row>
        <Col item={24}>
          <Image src={bgImg} height={600} oFit="cover" />
        </Col>
      </Row>
    </DisplayWrpper>
  );
};

export default Banner;

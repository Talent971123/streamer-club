import React from "react";
//  import component
import { Col, Row } from "components/Layout";
// import styled
import { BannerWrapper } from "./banner.style";
// import assets
import bgImg from "assets/images/home/banner-bg.jpg";
import { Image } from "components/Image";

const Banner: React.FC = () => {
  return (
    <BannerWrapper>
      <Row>
        <Col item={24}>
          <Image src={bgImg} height={600} oFit="cover" />
        </Col>
      </Row>
    </BannerWrapper>
  );
};

export default Banner;

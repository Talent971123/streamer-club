// import assets
import bgImg from "assets/images/home/banner-bg.jpg";
import { Image } from "components/Image";
//  import component
import { Col, Row } from "components/Layout";
import React from "react";
import { SectionViewProps } from "types/components/Section";
// import styled
import { BannerWrapper } from "./banner.style";


const Banner: React.FC<SectionViewProps> = (props) => {

  const { bannerImage } = props

  return (
    <BannerWrapper>
      <Row>
        <Col item={24}>
          <Image src={bannerImage || bgImg} width={1800} height={600} oFit="cover" />
        </Col>
      </Row>
    </BannerWrapper>
  );
};

export default Banner;

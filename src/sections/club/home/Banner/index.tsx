import React, { useContext } from "react";
//  import component
import { Col, Row } from "components/Layout";
// import styled
import { BannerWrapper } from "./banner.style";
// import assets
import bgImg from "assets/images/home/banner-bg.jpg";
import { Image } from "components/Image";
import { ClubContext } from "pages/club/[club_slug]";

const Banner: React.FC = () => {
  const { club }: any = useContext(ClubContext);

  const banner = club ? club.banner_image : bgImg;

  return (
    <BannerWrapper>
      <Row>
        <Col item={24}>
          <Image src={banner} width={1800} height={600} oFit="cover" />
        </Col>
      </Row>
    </BannerWrapper>
  );
};

export default Banner;

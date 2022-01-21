// import assets
import bgImg from "assets/images/home/banner-bg.jpg";
import { Image } from "components/Image";
//  import component
import React from "react";
import { SectionViewProps } from "types/components/Section";
// import styled
import { BannerWrapper } from "./banner.style";

const Banner: React.FC<SectionViewProps> = (props) => {
  const { bannerImage } = props;

  return (
    <BannerWrapper>
      <Image src={bannerImage || bgImg} oFit="fill" mode="fill" />
    </BannerWrapper>
  );
};

export default Banner;

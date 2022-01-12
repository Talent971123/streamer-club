import React, { useContext } from "react";
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
      <Image src={banner} oFit="fill" mode="fill" />
    </BannerWrapper>
  );
};

export default Banner;

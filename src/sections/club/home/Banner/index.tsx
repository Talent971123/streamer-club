import React, { useContext } from "react";
// import styled
import { BannerWrapper } from "./banner.style";
// import assets
import bgImg from "assets/images/home/default-bg.png";
import { Image } from "components/Image";
import { connect } from "react-redux";

import _ from "lodash";

const Banner = (props) => {
  const { clubInfo } = props;

  const banner = _.isUndefined(clubInfo.banner_image)
    ? bgImg
    : clubInfo.banner_image;

  return (
    <BannerWrapper>
      <Image src={banner} oFit="fill" mode="fill" />
    </BannerWrapper>
  );
};

const mapStateToProps = (state) => ({
  clubInfo: state.club.info,
});

export default connect(mapStateToProps)(Banner);

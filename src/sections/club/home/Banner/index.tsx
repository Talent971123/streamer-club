import React from "react";
import { connect } from "react-redux";
import { Image } from "components/Image";
// import styled
import { BannerWrapper } from "./banner.style";
import _ from "lodash";

const Banner = (props) => {
  const { banner } = props;
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

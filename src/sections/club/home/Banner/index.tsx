import { Image } from "components/Image";
import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { remoteImageSrc } from "utils/common-helper";
// import styled
import { BannerWrapper } from "./banner.style";

const Banner = (props) => {
  const { clubInfo } = props;

  if (_.isUndefined(clubInfo.banner_image)) {
    return <></>;
  }

  const fallback = `https://via.placeholder.com/900x600.png/000/fff?text=${encodeURI(
    clubInfo.name || ""
  )}`;
  const banner = remoteImageSrc(clubInfo.banner_image, fallback);

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

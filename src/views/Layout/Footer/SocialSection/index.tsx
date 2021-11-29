import React from "react";
// component
import { Row } from "components/Layout";
import { Hidden } from "components/Hidden";
// HOC
import { useLinkItem } from "components/hoc";
//assets
import { SocialIcon } from "assets/icon";
// styled component
import { IconItem } from "./SocialSection.style";

// component generated by hoc
const IconLinkItem = useLinkItem(IconItem, "icon");

// -----------------------------------------
const SocialView = () => {
  return (
    <Hidden wShow={[1024]}>
      <Row gap={15} padding="17px 0" justifyContent="center">
        <IconLinkItem icon={<SocialIcon.Facebook />} />
        <IconLinkItem icon={<SocialIcon.Instagram />} />
        <IconLinkItem icon={<SocialIcon.Youtobe />} />
        <IconLinkItem icon={<SocialIcon.Twitter />} />
      </Row>
    </Hidden>
  );
};
export default SocialView;

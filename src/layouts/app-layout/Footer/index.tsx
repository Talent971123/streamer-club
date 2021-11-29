import React from "react";
// component
import { ContainerWrapper, WithContainer } from "components/Container";
// styled component
import { FooterWrapper } from "./Footer.style";

// views
import {
  ConnectView,
  LinkView,
  CopyRightView,
  PartnerView,
  SignUpView,
  SocialView,
  ConnectMobileView,
} from "views/Layout/Footer";
// -----------------------------------------------------
const FooterLinks = () => (
  <>
    <ConnectMobileView />
    <LinkView />
    <CopyRightView />
  </>
);

const Footer = () => {
  return (
    <FooterWrapper>
      <WithContainer mWidth={1440} cColor="gray.600" SectionView={SignUpView} />
      <WithContainer mWidth={1440} cColor="white" SectionView={PartnerView} />
      <WithContainer
        mWidth={1440}
        cColor="primary.regular"
        SectionView={ConnectView}
      />
      <WithContainer
        mWidth={1440}
        cColor="black.300"
        SectionView={FooterLinks}
      />
      <WithContainer
        mWidth={1440}
        cColor="primary.regular"
        SectionView={SocialView}
      />
    </FooterWrapper>
  );
};
export default Footer;

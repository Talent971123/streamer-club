import React from "react";
// component
import { WithContainer } from "components/Container";
// styled component
import { FooterWrapper } from "./Footer.style";
// views
import { CopyRightView } from "sections/layout/footer";
// -----------------------------------------------------

const Footer = () => {
  return (
    <FooterWrapper>
      <WithContainer cColor="black.200" SectionView={CopyRightView} />
    </FooterWrapper>
  );
};
export default Footer;

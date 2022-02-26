import React, { useState } from "react";
// styled component
import { CopyRightSectionWrapper, CopyRightLogImg } from "./copyrightsection.style";
// Component
import { Row, Col } from "components/Layout";
// HOC
// utils
import { getThisYear } from "utils/helper-date";
import { Text } from "components/Text";
import TermsModal from "components/Modal/TermsModal";
import PrivacyModal from "components/Modal/PrivacyModal";
import Logo from 'assets/images/logo/mast_the_west_australian_white.png';
import { Image } from "components/Image";
// ------------------------------------------------------

const CopyRightSection = () => {

  return (
    <CopyRightSectionWrapper>
      <Row
        alignItems="center"
        justifyContent="space-between"
        responsive={{ 600: { flexDirection: "column", gap: 12 } }}
        padding="10px"
      >
        <Col>
          <Text fSize={0.9375}>
            © All rights reserved Streamer {getThisYear()}.
          </Text>
        </Col>
        <CopyRightLogImg mode="lg">
          <Col>
            <Image src={Logo}/>
          </Col>
        </CopyRightLogImg>
        <Col>
          <TermsModal />
        </Col>
        <Col>
          <PrivacyModal />
        </Col>
      </Row>
      <CopyRightLogImg mode="sm">
        <Image src={Logo}/>
      </CopyRightLogImg>
    </CopyRightSectionWrapper>
  );
};
export default CopyRightSection;

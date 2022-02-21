import React, { useState } from "react";
// styled component
import { CopyRightSectionWrapper } from "./copyrightsection.style";
// Component
import { Row, Col } from "components/Layout";
// HOC
// utils
import { getThisYear } from "utils/helper-date";
import { Text } from "components/Text";
import TermsModal from "components/Modal/TermsModal";
import PrivacyModal from "components/Modal/PrivacyModal";
// ------------------------------------------------------

const CopyRightSection = () => {

  return (
    <CopyRightSectionWrapper>
      <Row
        alignItems="center"
        justifyContent="space-between"
        responsive={{ 600: { flexDirection: "column", gap: 12 } }}
      >
        <Col>
          <Text fSize={0.9375}>
            © All rights reserved Streamer {getThisYear()}.
          </Text>
        </Col>
        <Col>
          <TermsModal />
        </Col>
        <Col>
          <PrivacyModal />
        </Col>
      </Row>
    </CopyRightSectionWrapper>
  );
};
export default CopyRightSection;

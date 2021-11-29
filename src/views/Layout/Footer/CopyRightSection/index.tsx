import React from "react";
// styled component
import { CopyRightSectionWrapper } from "./CopyRightSection.style";
// Component
import { Row, Col } from "components/Layout";
// HOC
// utils
import { getThisYear } from "utils/helper-date";
import { Text } from "components/Text";
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
          <Text fSize={15}>
            © All rights reserved Streamer {getThisYear()}.
          </Text>
        </Col>
      </Row>
    </CopyRightSectionWrapper>
  );
};
export default CopyRightSection;

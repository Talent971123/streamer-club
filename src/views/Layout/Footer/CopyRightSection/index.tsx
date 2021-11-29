import React from "react";
// styled component
import {
  CopyRightSectionWrapper,
  StyledLinkItem,
} from "./CopyRightSection.style";
// Component
import { Row, Col } from "components/Layout";
import { Hidden } from "components/Hidden";
// HOC
import { useLinkItem } from "components/hoc";
// utils
import { getThisYear } from "utils/helper-date";
// Genereted Component  by HOC
const LinkItem = useLinkItem(StyledLinkItem);

// ------------------------------------------------------

const CopyRightSection = () => {
  return (
    <CopyRightSectionWrapper>
      <Row
        alignItems="center"
        justifyContent="space-between"
        responsive={{ 600: { flexDirection: "column", gap: 12 } }}
      >
        <Col>©All rights reserved Nutrition Warehouse {getThisYear()}.</Col>
        <Col>
          <Row alignItems="center" gap={10}>
            <Col>
              <LinkItem title="TERMS & CONDITIONS" href="/terms"></LinkItem>
            </Col>
            <Hidden wShow={[600]}>|</Hidden>
            <Col>
              <LinkItem title="PRIVACY" href="/privacy"></LinkItem>
            </Col>
          </Row>
        </Col>
      </Row>
    </CopyRightSectionWrapper>
  );
};
export default CopyRightSection;

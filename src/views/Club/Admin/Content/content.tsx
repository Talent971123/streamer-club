import React from "react";
// import componeent
import { Row, Col } from "components/Layout";
import { ContentWrapper, MenuWrapper } from "./content.style";
//  import Sections
import Information from "./Information";
import { ContainerWrapper } from "components/Container";

const Content: React.FC = () => {
  return (
    <ContainerWrapper>
      <ContentWrapper>
        <Row alignItems="flex-start" justifyContent="flex-start">
          <Col item={6}>
            <MenuWrapper>LISTITEMS</MenuWrapper>
          </Col>
          <Col item={18}>
            <Information />
          </Col>
        </Row>
      </ContentWrapper>
    </ContainerWrapper>
  );
};

export default Content;

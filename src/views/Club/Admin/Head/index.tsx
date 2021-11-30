import React from "react";
// component
import { Row, Col } from "components/Layout";
import { Text } from "components/Text";

// import styled component
import { HeadWrapper } from "./Head.style";
// import assets

const HeadView: React.FC = () => {
  return (
    <HeadWrapper>
      <Row alignItems="center">
        <Col item={24}>
          <Row alignItems="center" padding="0 50px">
            <Text fColor="red.100" fSize={40} fWeight={800}>
              Club Administration
            </Text>
          </Row>
        </Col>
      </Row>
    </HeadWrapper>
  );
};

export default HeadView;

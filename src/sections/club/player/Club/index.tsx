import React from "react";
//  component
import { Row, Col } from "components/Layout";
//  styled
import { ClubWrapper, BottomBorder } from "./club.style";
import { Text } from "components/Text";
import { Button } from "components/Button";

const ClubSection: React.FC = () => {
  return (
    <ClubWrapper>
      <Row gap={50} alignItems="flex-start" justifyContent="center">
        <Col item={8}>
          <Row flexDirection="column">
            <Text fColor="white" fSize={15} mode="p">
              <Text fColor="white" fSize={16} mode="span" padding="0 20px 0 0 ">
                {"Current Club: "}
              </Text>
              {"Perth Football Club"}
            </Text>
            <BottomBorder />
            <Row alignItems="center" gap={5}>
              <Text fSize={16} padding="0 20px 0 0">
                {"Teams:"}
              </Text>
              <Row flexWrap="wrap" gap={10}>
                <Button bColor="warning">{"Senior Mens 1"}</Button>
                <Button bColor="warning">{"Senior Mens 2"}</Button>
              </Row>
            </Row>
          </Row>
        </Col>
        <Col item={8}>
          <Row flexDirection="column">
            <Text fColor="white" fSize={15}>
              <Text fColor="white" fSize={16} mode="span" padding="0 20px 0 0 ">
                {"Debut Date: "}
              </Text>
              {"01 September, 2011"}
            </Text>
            <BottomBorder />
            <Text fColor="white" fSize={15}>
              <Text fColor="white" fSize={16} mode="span" padding="0 20px 0 0 ">
                {"Positions: "}
              </Text>
              {"Right Forward; Right Winger"}
            </Text>
          </Row>
        </Col>
        <Col item={8}>
          <Row flexDirection="column">
            <Text fColor="white" fSize={15}>
              <Text fColor="white" fSize={16} mode="span" padding="0 20px 0 0 ">
                {"Previous Clubs: "}
              </Text>
              {"Trinity Grammar"}
            </Text>
            <BottomBorder />
          </Row>
        </Col>
      </Row>
    </ClubWrapper>
  );
};

export default ClubSection;

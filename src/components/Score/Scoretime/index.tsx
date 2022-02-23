import React from "react";
import { Row, Col } from "components/Layout";
import { Text } from "components/Text";

import { ScoreTimeContainer } from "./index.style";

interface Scoretime {
  event?: string;
  time?: string;
}

const ScoreTime: React.FC<Scoretime> = ({ event = "Q1", time = "00:00" }) => {
  return (
    <ScoreTimeContainer>
      <Row display="flex">
        <Col className="redwrapper" item={8}>
          <Text tAlign="center">{event}</Text>
        </Col>
        <Col item={16}>
          <Text fColor="black.regular" tAlign="center">
            {time}
          </Text>
        </Col>
      </Row>
    </ScoreTimeContainer>
  );
};

export default ScoreTime;

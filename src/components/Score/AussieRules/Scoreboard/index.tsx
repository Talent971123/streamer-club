import React from "react";
import { Row, Col } from "components/Layout";
import { Text } from "components/Text";
import { ScoreCotainer } from "./index.style";

interface socreProps {
  h_team?: string;
  a_team?: string;
  h_score_1?: number;
  h_score_2?: number;
  a_score_1?: number;
  a_score_2?: number;
  h_score_final?: number;
  a_score_final?: number;
}

const ScoreBoard: React.FC<socreProps> = ({
  a_team = "HOME",
  h_team = "AWAY",
  a_score_1 = 0,
  a_score_2 = 0,
  h_score_1 = 0,
  h_score_2 = 0,
  a_score_final = 0,
  h_score_final = 0,
}) => {
  return (
    <ScoreCotainer>
      <Col item={6}>
        <Row
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
        >
          <Text fColor="black.regular" tAlign="center">
            {h_team}
          </Text>
          <Text fColor="black.regular" tAlign="center">
            {a_team}
          </Text>
        </Row>
      </Col>
      <Col item={6}>
        <Row
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
        >
          <Text fColor="black.regular" tAlign="center">
            {h_score_1}
          </Text>
          <Text fColor="black.regular" tAlign="center">
            {a_score_1}
          </Text>
        </Row>
      </Col>
      <Col item={6}>
        <Row
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
        >
          <Text fColor="black.regular" tAlign="center">
            {h_score_2}
          </Text>
          <Text fColor="black.regular" tAlign="center">
            {a_score_2}
          </Text>
        </Row>
      </Col>
      <Col item={6} className="redwrapper">
        <Row
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
        >
          <Text tAlign="center">{h_score_final}</Text>
          <Text tAlign="center">{a_score_final}</Text>
        </Row>
      </Col>
    </ScoreCotainer>
  );
};

export default ScoreBoard;

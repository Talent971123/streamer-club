import React, { useContext } from "react";
//  component
import { Row, Col } from "components/Layout";
//  styled
import { ClubWrapper, BottomBorder } from "./club.style";
import { Text } from "components/Text";
import { Button } from "components/Button";

import { PlayerContext } from "pages/club/[club_slug]/player/[player_slug]";
import moment from "moment";

const ClubSection: React.FC = () => {
  const { player }: any = useContext(PlayerContext);
  return (
    <ClubWrapper>
      <Row gap={50} alignItems="flex-start" justifyContent="center">
        <Col item={8}>
          <Row flexDirection="column">
            <Text fColor="white" fSize={15} mode="p">
              <Text fColor="white" fSize={16} mode="span" padding="0 20px 0 0 ">
                {"Current Club: "}
              </Text>
              {player.club.name}
            </Text>
            <BottomBorder />
            <Row alignItems="center" gap={5}>
              <Text fSize={16} padding="0 20px 0 0">
                {"Teams:"}
              </Text>
              <Row flexWrap="wrap" gap={10}>
                {player.teams.map((team: { name: string }, idx: number) => (
                  <Button key={`player-team-${idx}`} bColor="warning">
                    {team.name}
                  </Button>
                ))}
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
              {moment(player.debut_date).format("LL")}
            </Text>
            <BottomBorder />
            <Text fColor="white" fSize={15}>
              <Text fColor="white" fSize={16} mode="span" padding="0 20px 0 0 ">
                {"Positions: "}
              </Text>
              {player.positions.join(", ")}
            </Text>
          </Row>
        </Col>
        <Col item={8}>
          <Row flexDirection="column">
            <Text fColor="white" fSize={15}>
              <Text fColor="white" fSize={16} mode="span" padding="0 20px 0 0 ">
                {"Previous Clubs: "}
              </Text>
              {player.prev_club}
            </Text>
            <BottomBorder />
          </Row>
        </Col>
      </Row>
    </ClubWrapper>
  );
};

export default ClubSection;

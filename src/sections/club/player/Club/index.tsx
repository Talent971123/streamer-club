import React, { useContext } from "react";
//  component
import { Row, Col } from "components/Layout";
//  styled
import { ClubWrapper, BottomBorder } from "./club.style";
import { Text } from "components/Text";
import { Button } from "components/Button";

import { PlayerContext } from "pages/club/[club_slug]/player/[player_slug]";
import moment from "moment";
import EditIcon from "assets/icon/edit";

const ClubSection: React.FC = () => {
  const { player }: any = useContext(PlayerContext);
  return (
    <ClubWrapper>
      <Row gap={50} alignItems="flex-start" justifyContent="center">
        <Col item={8}>
          <Row flexDirection="column">
            <Row alignItems="flex-start" justifyContent="space-between">
              <Text fColor="white" fSize={15} mode="p">
                <Text fColor="white" fSize={16} mode="span" padding="0 20px 0 0 ">
                  {"Current Club: "}
                </Text>
                {player.club.name}
              </Text>
              <Button bColor="primary" icon={<EditIcon />} css={{border: "none"}} />
            </Row>
            <BottomBorder />
            <Row alignItems="center" gap={5}>
              <Text fSize={16} padding="0 20px 0 0">
                {"Teams:"}
              </Text>
              <Row flexWrap="wrap" gap={10} justifyContent="space-between">
                {player.teams.map((team: { name: string }, idx: number) => (
                  <Button key={`player-team-${idx}`} bColor="warning">
                    {team.name}
                  </Button>
                ))}
                <Button bColor="primary" icon={<EditIcon />} css={{border: "none"}} />
              </Row>
            </Row>
          </Row>
        </Col>
        <Col item={8}>
          <Row flexDirection="column">
            <Row alignItems="flex-start" justifyContent="space-between">
              <Text fColor="white" fSize={15}>
                <Text fColor="white" fSize={16} mode="span" padding="0 20px 0 0 ">
                  {"Debut Date: "}
                </Text>
                {moment(player.debut_date).format("LL")}
              </Text>
              <Button bColor="primary" icon={<EditIcon />} css={{border: "none"}} />
            </Row>
            <BottomBorder />
            <Row alignItems="flex-start" justifyContent="space-between">
              <Text fColor="white" fSize={15}>
                <Text fColor="white" fSize={16} mode="span" padding="0 20px 0 0 ">
                  {"Positions: "}
                </Text>
                {player.positions.join(", ")}
              </Text>
              <Button bColor="primary" icon={<EditIcon />} css={{border: "none"}} />
            </Row>
          </Row>
        </Col>
        <Col item={8}>
          <Row flexDirection="column">
            <Row alignItems="flex-start" justifyContent="space-between">  
              <Text fColor="white" fSize={15}>
                <Text fColor="white" fSize={16} mode="span" padding="0 20px 0 0 ">
                  {"Previous Clubs: "}
                </Text>
                {player.prev_club}
              </Text>
              <Button bColor="primary" icon={<EditIcon />} css={{border: "none"}} />
            </Row>
            <BottomBorder />
          </Row>
        </Col>
      </Row>
    </ClubWrapper>
  );
};

export default ClubSection;

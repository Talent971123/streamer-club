import React from "react";
// import component
import { Row, Col } from "components/Layout";
import { Image } from "components/Image";
import { Text } from "components/Text";
// import type
import { GameCardProps } from "types/components/GameCard";
// styled component
import {
  CardContent,
  GameCardWrapper,
  Content,
  LayerWrapper,
  CardFooter,
  LiveWrapper,
  UserWrapper,
} from "./GameCard.style";
//  import asssets
import { UserIcon } from "assets/icon";
import Play from "assets/images/home/play.png";

const GameCard: React.FC<GameCardProps> = ({
  id,
  backgroundImage,
  clubImage1,
  clubImage2,
  clubName1,
  clubName2,
  leagueImage,
  leagueDivisionName,
  leagueName,
  match_round = 1,
  date,
  progress,
  users = 0,
  mode = "Day",
  roundName,
  matchName,
  handleClick,
  isLive,
}) => {
  const onHandleClick = (id: number) => {
    handleClick && handleClick(id);
  };
  return (
    <GameCardWrapper onClick={() => onHandleClick(id)}>
      <CardContent>
        <Image src={backgroundImage} mode="fill" oFit="fill" />
        <Content>
          <Row flexDirection="column" alignItems="center">
            {mode == "Day" && isLive && (
              <Col item={24}>
                <Row alignItems="center" gap={10} padding="7px 0 0 10px">
                  <Col>
                    <LiveWrapper>
                      <Text fColor="white" fSize={0.9} fWeight={600}>
                        {"LIVE"}
                      </Text>
                    </LiveWrapper>
                  </Col>

                  <Col>
                    <UserWrapper>
                      <Row alignItems="center" justifyContent="center" gap={5}>
                        <UserIcon />
                        <Text fColor="white" fSize={0.9} fWeight={500}>
                          {users}
                        </Text>
                      </Row>
                    </UserWrapper>
                  </Col>
                </Row>
              </Col>
            )}

            <Col item={24}>
              <Row
                alignItems="center"
                justifyContent="space-between"
                padding={
                  mode == "Replay"
                    ? "50px 20px"
                    : users !== 0
                    ? "24px 40px"
                    : "50px 40px"
                }
              >
                <Col>
                  <Image src={clubImage1} width={89} height={90} />
                </Col>
                {mode === "Replay" ? (
                  <Col className="playwrapper">
                    <Image src={Play} width={69} height={69} />
                  </Col>
                ) : null}
                <Col>
                  <Image src={clubImage2} width={89} height={90} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
        <LayerWrapper />
      </CardContent>
      <CardFooter>
        <Row flexDirection="column" gap={5}>
          <Col item={24}>
            <Row alignItems="center" gap={5}>
              <Col className="markwrapper">
                <Image src={leagueImage} width={27} height={27} />
              </Col>
              <Col>
                <Row>
                  <Text fColor="red.100" fSize={0.9} fWeight={800}>
                    {leagueName ? `${leagueName} - ` : ""} &nbsp;
                  </Text>
                  <Text fColor="red.100" fSize={0.9} fWeight={500}>
                    {matchName + " "}
                    {roundName ? `(${roundName})` : ""}
                  </Text>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col item={24}>
            <Row alignItems="center" justifyContent="space-between">
              <Col item={8}>
                <Text fColor="gray.100" fSize={0.875} tAlign="left">
                  {clubName1}
                </Text>
              </Col>
              <Col item={8}>
                <Text fColor="gray.100" fSize={0.875} tAlign="center">
                  VS
                </Text>
              </Col>
              <Col item={8}>
                <Text fColor="gray.100" fSize={0.875} tAlign="right">
                  {clubName2}
                </Text>
              </Col>
            </Row>
          </Col>
          {mode === "Replay" && (
            <Col item={24}>
              <Row alignItems="center" justifyContent="space-between">
                <Col item={23}>
                  <Text fColor="gray.100" fSize={0.875} tAlign="center">
                    {" "}
                    {date}{" "}
                  </Text>
                </Col>
              </Row>
            </Col>
          )}
          <Col item={24}>
            <Text fColor="gray.100" fSize={0.875} tAlign="center" fWeight={500}>
              {progress}
            </Text>
          </Col>
        </Row>
      </CardFooter>
    </GameCardWrapper>
  );
};

export default GameCard;

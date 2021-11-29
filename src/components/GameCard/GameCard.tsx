import React from "react";
// import component
import { Row, Col } from "components/Layout";
import { Image } from "components/Image";
import { UserIcone } from "assets/icon";
// import type
import { GameCardProps } from "types/components/GameCard";
// styled component
import {
  CardContent,
  GameCardWrapper,
  LayerWrapper,
  CardFooter,
  LiveWrapper,
  UserWrapper,
} from "./GameCard.style";
import { Text } from "components/Text";

const GameCard: React.FC<GameCardProps> = ({
  backgroundImage,
  clubImage1,
  clubImage2,
  clubName1,
  clubName2,
  divisionImage,
  divisionName,
  progress,
  users = 0,
  mode = "Day",
}) => {
  return (
    <GameCardWrapper>
      <CardContent>
        <Image
          src={backgroundImage}
          mode="fill"
          oFit="cover"
          width={314}
          height={181}
        ></Image>
        <Row flexDirection="column" alignItems="center">
          {users != 0 ? (
            <Col item={24}>
              <Row alignItems="center" gap={10} padding="7px 0 0 10px">
                <Col>
                  <LiveWrapper>
                    <Text fColor="white" fSize={15} fWeight={600}>
                      {"LIVE"}
                    </Text>
                  </LiveWrapper>
                </Col>
                <Col>
                  <UserWrapper>
                    <Row alignItems="center" justifyContent="center" gap={5}>
                      <UserIcone />
                      <Text fColor="white" fSize={14} fWeight={500}>
                        {users}
                      </Text>
                    </Row>
                  </UserWrapper>
                </Col>
              </Row>
            </Col>
          ) : null}
          <Col item={24}>
            <Row
              alignItems="center"
              justifyContent="space-between"
              padding={users !== 0 ? "24px 40px" : "40px"}
            >
              <Col>
                <Image src={clubImage1} width={89} height={90} />
              </Col>
              {mode === "Day" ? <Col></Col> : null}
              <Col>
                <Image src={clubImage2} width={89} height={90} />
              </Col>
            </Row>
          </Col>
        </Row>
        <LayerWrapper />
      </CardContent>
      <CardFooter>
        <Row flexDirection="column" gap={5}>
          <Col item={24}>
            <Row alignItems="center" gap={5}>
              <Col>
                <Image src={divisionImage} width={27} height={27} />
              </Col>
              <Col>
                <Row>
                  <Text fColor="red.100" fSize={18} fWeight={800}>
                    {"WAFL - "} &nbsp;
                  </Text>
                  <Text fColor="red.100" fSize={18} fWeight={500}>
                    {divisionName}
                  </Text>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col item={24}>
            <Row alignItems="center" justifyContent="space-between">
              <Col item={8}>
                <Text fColor="gray.100" fSize={14} tAlign="left">
                  {clubName1}
                </Text>
              </Col>
              <Col item={8}>
                <Text fColor="gray.100" fSize={14} tAlign="center">
                  VS
                </Text>
              </Col>
              <Col item={8}>
                <Text fColor="gray.100" fSize={14} tAlign="right">
                  {clubName2}
                </Text>
              </Col>
            </Row>
          </Col>
          <Col item={24}>
            <Text fColor="gray.100" fSize={14} tAlign="center" fWeight={500}>
              {progress}
            </Text>
          </Col>
        </Row>
      </CardFooter>
    </GameCardWrapper>
  );
};

export default GameCard;

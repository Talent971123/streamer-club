import React from "react";
// import component
import { Col, Row } from "components/Layout";
import { GameCard } from "components/GameCard";
// import styled component
import { GameDayWrapper } from "./Gameday.style";
import { Text } from "components/Text";

// import types
import { GameCardProps } from "types/components/GameCard";

// define example data
import clubImage1 from "assets/images/home/image12.png";
import clubImage2 from "assets/images/home/image9.png";
import backgroundImage from "assets/images/home/background.png";
import marker from "assets/images/home/mark.png";

const data: GameCardProps[] = [
  {
    backgroundImage,
    clubImage1,
    clubImage2,
    clubName1: "Perth FC",
    clubName2: "Claremont FC",
    divisionImage: marker,
    divisionName: "Mens Division 1",
    progress: "IN PROGRESS",
    users: 10,
  },
  {
    backgroundImage,
    clubImage1,
    clubImage2,
    clubName1: "Perth FC",
    clubName2: "Claremont FC",
    divisionImage: marker,
    divisionName: "Mens Division 1",
    progress: "IN PROGRESS",
    users: 0,
  },
  {
    backgroundImage,
    clubImage1,
    clubImage2,
    clubName1: "Perth FC",
    clubName2: "Claremont FC",
    divisionImage: marker,
    divisionName: "Mens Division 1",
    progress: "20 NOV 21 10:30AM",
    users: 0,
  },
];

const GameDay: React.FC = () => {
  return (
    <GameDayWrapper>
      <Row flexDirection="column" gap={5}>
        <Col item={24}>
          <Text fColor="white" fSize={24} fWeight={700}>
            {"Game Day - Live & Upcoming"}
          </Text>
        </Col>
        <Col item={24}>
          {data.map((item: GameCardProps, index: number) => {
            return <GameCard {...item} key={index} />;
          })}
        </Col>
      </Row>
    </GameDayWrapper>
  );
};

export default GameDay;

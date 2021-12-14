import React from "react";
// import component
import { Col, Row } from "components/Layout";
import { GameCard } from "components/Card";
import { Text } from "components/Text";
import Slider from "react-slick";
// import styled component
import { GameDayWrapper } from "./upcoming.style";
// import types
import { GameCardProps } from "types/components/GameCard";
// define example data
import clubImage1 from "assets/images/home/team2.png";
import clubImage2 from "assets/images/home/team1.png";
import backgroundImage from "assets/images/home/background.jpg";
import marker from "assets/images/home/mark.png";

const data: GameCardProps[] = [
  {
    id: 1,
    backgroundImage,
    clubImage1,
    clubImage2,
    clubName1: "Perth FC",
    clubName2: "Claremont FC",
    divisionImage: marker,
    divisionName: "Mens Division 1",
    progress: "IN PROGRESS",
    users: 36,
  },
  {
    id: 1,
    backgroundImage,
    clubImage1,
    clubImage2,
    clubName1: "Perth FC",
    clubName2: "Claremont FC",
    divisionImage: marker,
    divisionName: "Mens Division 1",
    progress: "IN PROGRESS",
    users: 12,
  },
  {
    id: 1,
    backgroundImage,
    clubImage1,
    clubImage2,
    clubName1: "Perth FC",
    clubName2: "Claremont FC",
    divisionImage: marker,
    divisionName: "Mens Division 1",
    progress: "IN PROGRESS",
  },
  {
    id: 1,
    backgroundImage,
    clubImage1,
    clubImage2,
    clubName1: "Perth FC",
    clubName2: "Claremont FC",
    divisionImage: marker,
    divisionName: "Mens Division 1",
    progress: "20 NOV 21 10:30AM",
  },
  {
    id: 1,
    backgroundImage,
    clubImage1,
    clubImage2,
    clubName1: "Perth FC",
    clubName2: "Claremont FC",
    divisionImage: marker,
    divisionName: "Mens Division 1",
    progress: "20 NOV 21 10:30AM",
  },
];

const UpcomeSection: React.FC = () => {
  return (
    <GameDayWrapper>
      <Row alignItems="center" justifyContent="space-between">
        <Text fColor="white" fSize={22} fWeight={700} mode="p">
          {"Round 15 - Western Australia Football League"}
        </Text>
      </Row>
      <Row
        padding="10px 0 0 0"
        display="grid"
        templateCol="repeat(4, 1fr)"
        gap={"20px 10px"}
      >
        {data.map((item: GameCardProps, index: number) => {
          return <GameCard {...item} key={index} />;
        })}
      </Row>
    </GameDayWrapper>
  );
};

export default UpcomeSection;

import React from "react";
// import component
import { Col, Row } from "components/Layout";
import { Text } from "components/Text";
import ThumbCard from "components/Card/ThumbCard";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { useLinkItem } from "components/hoc";
import { IoArrowRedoOutline } from "react-icons/io5";
// import styled component
import { GamesWrapper, LinkWrapper } from "./games.style";
import { CardBody } from "theme/global.state";
import { SlideArrow } from "components/Button/Button";
// import types
import { GameCardProps } from "types/components/GameCard";
// define example data
import clubImage1 from "assets/images/home/team2.png";
import clubImage2 from "assets/images/home/team1.png";
import backgroundImage from "assets/images/home/background.jpg";
import marker from "assets/images/home/mark.png";
import { useRouter } from "hooks";

const data: GameCardProps[] = [
  {
    id: 1,
    backgroundImage,
    clubImage1,
    clubImage2,
    clubName1: "Perth FC",
    clubName2: "Claremont FC",
    leagueImage: marker,
    leagueDivisionName: "Mens Division 1: Round 15",
    mode: "Replay",
  },
  {
    id: 1,
    backgroundImage,
    clubImage1,
    clubImage2,
    clubName1: "Perth FC",
    clubName2: "Claremont FC",
    leagueImage: marker,
    leagueDivisionName: "Mens Division 1: Round 15",
    mode: "Replay",
  },
  {
    id: 1,
    backgroundImage,
    clubImage1,
    clubImage2,
    clubName1: "Perth FC",
    clubName2: "Claremont FC",
    leagueImage: marker,
    leagueDivisionName: "Mens Division 1: Round 15",
    mode: "Replay",
  },
  {
    id: 1,
    backgroundImage,
    clubImage1,
    clubImage2,
    clubName1: "Perth FC",
    clubName2: "Claremont FC",
    leagueImage: marker,
    leagueDivisionName: "Mens Division 1: Round 15",
    mode: "Replay",
  },
  {
    id: 1,
    backgroundImage,
    clubImage1,
    clubImage2,
    clubName1: "Perth FC",
    clubName2: "Claremont FC",
    leagueImage: marker,
    leagueDivisionName: "Mens Division 1: Round 15",
    mode: "Replay",
  },
];

const SeeAll = useLinkItem(LinkWrapper);

const GameDayView: React.FC = () => {
  const { move } = useRouter();
  const onHandleSeeAll = () => {
    // move("/club/match");
  };
  return (
    <GamesWrapper>
      <Row alignItems="center" justifyContent="space-between">
        <Text fColor="white" fSize={1.375} fWeight={700} mode="p">
          {"Recent Games"}
        </Text>
        <SeeAll
          handleClick={onHandleSeeAll}
          title="See all"
          icon={<IoArrowRedoOutline />}
          iconDirection="row-reverse"
          alignVertical="center"
        />
      </Row>
      <Row padding="10px 0 0 0">
        <Col item={24}>
          <ScrollingCarousel 
            leftIcon={<SlideArrow position="left" />}
            rightIcon={<SlideArrow position="right" />}
          >
            {data.map((item: GameCardProps, index: number) => {
              return (
                <CardBody key={`game-day-view-key${index}`}>
                  <ThumbCard {...item} key={index} />
                </CardBody>
              );
            })}
          </ScrollingCarousel>
        </Col>
      </Row>
    </GamesWrapper>
  );
};

export default GameDayView;

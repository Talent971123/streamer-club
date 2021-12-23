import React from "react";
// import component
import { Col, Row } from "components/Layout";
import { GameCard } from "components/Card";
import { Text } from "components/Text";
import Slider from "react-slick";
import { useLinkItem } from "components/hoc";
import { IoArrowRedoOutline } from "react-icons/io5";
// import styled component
import { GameDayWrapper, LinkWrapper } from "./gameday.style";
// import types
import { GameCardProps } from "types/components/GameCard";
// define example data
import clubImage1 from "assets/images/home/team2.png";
import clubImage2 from "assets/images/home/team1.png";
import backgroundImage from "assets/images/home/background.jpg";
import marker from "assets/images/home/mark.png";
import { useRouter } from "next/router";

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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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

// const setting for react slick
const NextArrow: React.FC = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "140px",
      }}
      onClick={onClick}
    />
  );
};

const BeforeArrow: React.FC = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "140px",
      }}
      onClick={onClick}
    />
  );
};

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: <NextArrow />,
  prevArrow: <BeforeArrow />,
};
const SeeAll = useLinkItem(LinkWrapper);

const GameDayView: React.FC = () => {
  const router = useRouter();
  const { club_slug } = router.query;
  const onHandleSeeAll = () => {
    router.push(`/club/${club_slug}/live`);
  };

  const onHandleClick = (id: number) => {
    router.push(`/club/${club_slug}/stream?id=` + id);
  };

  return (
    <GameDayWrapper>
      <Row alignItems="center" justifyContent="space-between">
        <Text fColor="white" fSize={22} fWeight={700} mode="p">
          {"Game Day - Live & Upcoming"}
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
          <Slider {...settings}>
            {data.map((item: GameCardProps, index: number) => {
              return (
                <GameCard
                  {...item}
                  key={index}
                  handleClick={() => onHandleClick(item.id)}
                />
              );
            })}
          </Slider>
        </Col>
      </Row>
    </GameDayWrapper>
  );
};

export default GameDayView;

import React from "react";
// import component
import { Col, Row } from "components/Layout";
import { ClipCard } from "components/Card";
import { Text } from "components/Text";
import Slider from "react-slick";
//  import types
import { ClipProps } from "types/components/ClipCard";
//  import styled component
import { PlayerWrapper } from "./Player.style";

//  define the example data
import PlayerImage from "assets/images/home/player.png";

const data: ClipProps[] = [
  {
    backgroundImage: PlayerImage,
    title: "Liam Sinclair",
    content: "Senior Mens Divison 1",
    mode: "player",
  },
  {
    backgroundImage: PlayerImage,
    title: "Liam Sinclair",
    content: "Senior Mens Divison 1",
    mode: "player",
  },
  {
    backgroundImage: PlayerImage,
    title: "Liam Sinclair",
    content: "Senior Mens Divison 1",
    mode: "player",
  },
  {
    backgroundImage: PlayerImage,
    title: "Liam Sinclair",
    content: "Senior Mens Divison 1",
    mode: "player",
  },
  {
    backgroundImage: PlayerImage,
    title: "Liam Sinclair",
    content: "Senior Mens Divison 1",
    mode: "player",
  },
  {
    backgroundImage: PlayerImage,
    title: "Liam Sinclair",
    content: "Senior Mens Divison 1",
    mode: "player",
  },
  {
    backgroundImage: PlayerImage,
    title: "Liam Sinclair",
    content: "Senior Mens Divison 1",
    mode: "player",
  },
  {
    backgroundImage: PlayerImage,
    title: "Liam Sinclair",
    content: "Senior Mens Divison 1",
    mode: "player",
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
        top: "100px",
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
        top: "100px",
      }}
      onClick={onClick}
    />
  );
};

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 7,
  nextArrow: <NextArrow />,
  prevArrow: <BeforeArrow />,
};

const PlayerView: React.FC = () => {
  return (
    <PlayerWrapper>
      <Row flexDirection="column" gap={5}>
        <Col item={24}>
          <Text fColor="white" fSize={22} fWeight={700}>
            {"Our Teams"}
          </Text>
        </Col>
        <Col item={24}>
          <Slider {...settings}>
            {data.map((item: ClipProps, index: number) => {
              return <ClipCard {...item} key={index} />;
            })}
          </Slider>
        </Col>
      </Row>
    </PlayerWrapper>
  );
};

export default PlayerView;

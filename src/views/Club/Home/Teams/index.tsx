import React from "react";
// import component
import { Col, Row } from "components/Layout";
import { ClipCard } from "components/ClipCard";
import { Text } from "components/Text";
import Slider from "react-slick";
//  import types
import { ClipProps } from "types/components/ClipCard";
//  import styled component
import { TeamWrapper } from "./Teams.style";

//  define the example data
import TeamsImage from "assets/images/home/team.png";

const data: ClipProps[] = [
  {
    backgroundImage: TeamsImage,
    title: "Mens",
    content: "Opens 1",
    mode: "teams",
  },
  {
    backgroundImage: TeamsImage,
    title: "Mens",
    content: "Opens 1",
    mode: "teams",
  },
  {
    backgroundImage: TeamsImage,
    title: "Mens",
    content: "Opens 1",
    mode: "teams",
  },
  {
    backgroundImage: TeamsImage,
    title: "Mens",
    content: "Opens 1",
    mode: "teams",
  },
  {
    backgroundImage: TeamsImage,
    title: "Mens",
    content: "Opens 1",
    mode: "teams",
  },
  {
    backgroundImage: TeamsImage,
    title: "Mens",
    content: "Opens 1",
    mode: "teams",
  },
  {
    backgroundImage: TeamsImage,
    title: "Mens",
    content: "Opens 1",
    mode: "teams",
  },
  {
    backgroundImage: TeamsImage,
    title: "Mens",
    content: "Opens 1",
    mode: "teams",
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

const TeamView: React.FC = () => {
  return (
    <TeamWrapper>
      <Row flexDirection="column" gap={5}>
        <Col item={24}>
          <Text fColor="white" fSize={24} fWeight={700}>
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
    </TeamWrapper>
  );
};

export default TeamView;

import React from "react";
// import component
import { Col, Row } from "components/Layout";
import { ClipCard } from "components/ClipCard";
import { Text } from "components/Text";
import Slider from "react-slick";
//  import types
import { ClipProps } from "types/components/ClipCard";
//  import styled component
import { ClipWrapper } from "./Clip.style";

//  define the example data
import backImage from "assets/images/home/gameday.png";

const data: ClipProps[] = [
  {
    backgroundImage: backImage,
    title: "Elimination Finals - Colts Highlights",
    content:
      "Colts came out on top against Peel Thunder in last week’s Elimination Finals.",
  },
  {
    backgroundImage: backImage,
    title: "Elimination Finals - Colts Highlights",
    content:
      "Colts came out on top against Peel Thunder in last week’s Elimination Finals.",
  },
  {
    backgroundImage: backImage,
    title: "Elimination Finals - Colts Highlights",
    content:
      "Colts came out on top against Peel Thunder in last week’s Elimination Finals.",
  },
  {
    backgroundImage: backImage,
    title: "Elimination Finals - Colts Highlights",
    content:
      "Colts came out on top against Peel Thunder in last week’s Elimination Finals.",
  },
  {
    backgroundImage: backImage,
    title: "Elimination Finals - Colts Highlights",
    content:
      "Colts came out on top against Peel Thunder in last week’s Elimination Finals.",
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
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: <NextArrow />,
  prevArrow: <BeforeArrow />,
};

const ClipView: React.FC = () => {
  return (
    <ClipWrapper>
      <Row flexDirection="column" gap={5}>
        <Col item={24}>
          <Text fColor="white" fSize={24} fWeight={700}>
            {"Featured Clips"}
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
    </ClipWrapper>
  );
};

export default ClipView;

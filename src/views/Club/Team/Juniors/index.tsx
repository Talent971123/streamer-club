import React from "react";
//  component
import { TeamCard } from "components/Card";
//  styled component
import { JuniorWrapper } from "./junior.style";
//  type
import { TeamCardProps } from "types/components/TeamCard";
// assets
import backgroundImage from "assets/images/team/sport-1.jpg";
import { Col, Row } from "components/Layout";
import Slider from "react-slick";
import { Text } from "components/Text";
// example data
const data: TeamCardProps[] = [
  {
    backgroundImage,
    title: "Red Bulldogs VS Hawks",
    description: "western austrailia football league",
    users: 36,
  },
  {
    backgroundImage,
    title: "Red Bulldogs VS Hawks",
    description: "western austrailia football league",
    users: 0,
  },
  {
    backgroundImage,
    title: "Red Bulldogs VS Hawks",
    description: "western austrailia football league",
    users: 36,
  },
  {
    backgroundImage,
    title: "Red Bulldogs VS Hawks",
    description: "western austrailia football league",
    users: 36,
  },
];

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

const JuniorSection: React.FC = () => {
  return (
    <JuniorWrapper>
      <Row flexDirection="column" gap={5}>
        <Col item={24}>
          <Text fColor="white" fSize={22} fWeight={700}>
            {"Up-and-comming Juniors"}
          </Text>
        </Col>
        <Col item={24}>
          <Slider {...settings}>
            {data.map((item: TeamCardProps, index: number) => {
              return <TeamCard {...item} key={index} />;
            })}
          </Slider>
        </Col>
      </Row>
    </JuniorWrapper>
  );
};

export default JuniorSection;

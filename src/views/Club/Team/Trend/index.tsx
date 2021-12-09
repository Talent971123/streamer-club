import React from "react";
//  component
import { TeamCard } from "components/Card";
import { useLinkItem } from "components/hoc";
import { IoArrowRedoOutline } from "react-icons/io5";
//  styled component
import { TrendWrapper, LinkWrapper } from "./trend.style";
//  type
import { TeamCardProps } from "types/components/TeamCard";
// assets
import backgroundImage from "assets/images/team/sport-1.jpg";
import { Col, Row } from "components/Layout";
import Slider from "react-slick";
import { Text } from "components/Text";
import { useRouter } from "hooks";
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
  slidesToShow: 3,
  slidesToScroll: 1,
};

const SeeAll = useLinkItem(LinkWrapper);

const JuniorSection: React.FC = () => {
  const { move } = useRouter();
  const onHandleSeeAll = () => {
    move("/club/match");
  };
  return (
    <TrendWrapper>
      <Row alignItems="center" justifyContent="space-between">
        <Text fColor="white" fSize={22} fWeight={700}>
          {"Trendig Now"}
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
            {data.map((item: TeamCardProps, index: number) => {
              return <TeamCard {...item} key={index} />;
            })}
          </Slider>
        </Col>
      </Row>
    </TrendWrapper>
  );
};

export default JuniorSection;

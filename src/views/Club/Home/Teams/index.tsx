import React from "react";
import { useRouter } from "hooks";
// import component
import { Col, Row } from "components/Layout";
import { ClipCard } from "components/Card";
import { Text } from "components/Text";
import Slider from "react-slick";
import { useLinkItem } from "components/hoc";
import { IoArrowRedoOutline } from "react-icons/io5";
//  import types
import { ClipProps } from "types/components/ClipCard";
//  import styled component
import { TeamWrapper, LinkWrapper } from "./teams.style";

//  define the example data
import TeamsImage from "assets/images/home/team.png";

const data: ClipProps[] = [
  {
    id: 1,
    backgroundImage: TeamsImage,
    title: "Mens",
    content: "Opens 1",
    mode: "teams",
  },
  {
    id: 2,
    backgroundImage: TeamsImage,
    title: "Mens",
    content: "Opens 1",
    mode: "teams",
  },
  {
    id: 3,
    backgroundImage: TeamsImage,
    title: "Mens",
    content: "Opens 1",
    mode: "teams",
  },
  {
    id: 4,
    backgroundImage: TeamsImage,
    title: "Mens",
    content: "Opens 1",
    mode: "teams",
  },
  {
    id: 5,
    backgroundImage: TeamsImage,
    title: "Mens",
    content: "Opens 1",
    mode: "teams",
  },
  {
    id: 6,
    backgroundImage: TeamsImage,
    title: "Mens",
    content: "Opens 1",
    mode: "teams",
  },
  {
    id: 7,
    backgroundImage: TeamsImage,
    title: "Mens",
    content: "Opens 1",
    mode: "teams",
  },
  {
    id: 8,
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

const SeeAll = useLinkItem(LinkWrapper);

const TeamView: React.FC = () => {
  const { move } = useRouter();

  const onHandleSeeAll = () => {
    alert();
  };

  const onHandleClick = (id: number) => {
    const route = {
      path: `/club/team/${id}`,
      param: { id },
    };
    move(route.path, route.param);
  };

  return (
    <TeamWrapper>
      <Row flexDirection="column" gap={5}>
        <Text fColor="white" fSize={22} fWeight={700}>
          {"Our Teams"}
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
            {data.map((item: ClipProps, index: number) => {
              return (
                <ClipCard {...item} key={index} handleClick={onHandleClick} />
              );
            })}
          </Slider>
        </Col>
      </Row>
    </TeamWrapper>
  );
};

export default TeamView;

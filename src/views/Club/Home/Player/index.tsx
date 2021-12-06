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
import { PlayerWrapper, LinkWrapper } from "./Player.style";

//  define the example data
import PlayerImage from "assets/images/home/player.png";

const data: ClipProps[] = [
  {
    id: 1,
    backgroundImage: PlayerImage,
    title: "Liam Sinclair",
    content: "Senior Mens Divison 1",
    mode: "player",
  },
  {
    id: 2,
    backgroundImage: PlayerImage,
    title: "Liam Sinclair",
    content: "Senior Mens Divison 1",
    mode: "player",
  },
  {
    id: 3,
    backgroundImage: PlayerImage,
    title: "Liam Sinclair",
    content: "Senior Mens Divison 1",
    mode: "player",
  },
  {
    id: 4,
    backgroundImage: PlayerImage,
    title: "Liam Sinclair",
    content: "Senior Mens Divison 1",
    mode: "player",
  },
  {
    id: 5,
    backgroundImage: PlayerImage,
    title: "Liam Sinclair",
    content: "Senior Mens Divison 1",
    mode: "player",
  },
  {
    id: 6,
    backgroundImage: PlayerImage,
    title: "Liam Sinclair",
    content: "Senior Mens Divison 1",
    mode: "player",
  },
  {
    id: 7,
    backgroundImage: PlayerImage,
    title: "Liam Sinclair",
    content: "Senior Mens Divison 1",
    mode: "player",
  },
  {
    id: 8,
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

const SeeAll = useLinkItem(LinkWrapper);

const PlayerView: React.FC = () => {
  const { move } = useRouter();

  const onHandleSeeAll = () => {
    alert();
  };

  const onHandleClick = (id: number) => {
    const route = {
      path: `/club/player/${id}`,
      param: { id },
    };
    move(route.path, route.param);
  };

  return (
    <PlayerWrapper>
      <Row alignItems="center" justifyContent="space-between">
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
    </PlayerWrapper>
  );
};

export default PlayerView;

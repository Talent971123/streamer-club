import React, { useContext } from "react";
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
import { PlayerWrapper, LinkWrapper } from "./player.style";

//  define the example data
import PlayerImage from "assets/images/home/player.png";
import { ClubContext } from "pages/club/[club_slug]";

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

  const club = useContext(ClubContext);

  const onHandleSeeAll = () => {
    move(`/club/${club.slug}/players`);
  };

  const onHandleClick = (slug: string) => {
    const route = {
      path: `/club/${club.slug}/player/${slug}`
    };
    move(route.path);
  };

  return (
    <PlayerWrapper>
      <Row alignItems="center" justifyContent="space-between">
        <Text fColor="white" fSize={22} fWeight={700}>
          {"Our Players"}
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
            {club.players && club.players.map((player: any, index: number) => {

              const item: ClipProps = {
                id: player.id,
                backgroundImage: player.image,
                title: `${player.first_name} ${player.last_name}`,
                mode: 'player',
                content: player.team.name
              }

              return (
                <ClipCard {...item} key={index} handleClick={() => onHandleClick(player.slug)} />
              );
            })}
          </Slider>
        </Col>
      </Row>
    </PlayerWrapper>
  );
};

export default PlayerView;

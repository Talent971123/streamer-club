import { ClipCard } from "components/Card";
import { useLinkItem } from "components/hoc";
// import component
import { Col, Row } from "components/Layout";
import { Text } from "components/Text";
import { useRouter } from "hooks";
import React from "react";
import { IoArrowRedoOutline } from "react-icons/io5";
import Slider from "react-slick";
//  import types
import { ClipProps } from "types/components/ClipCard";
import { SectionViewProps } from "types/components/Section";
//  import styled component
import { LinkWrapper, PlayerWrapper } from "./player.style";

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

const PlayerView: React.FC<SectionViewProps> = (props) => {
  const {
    move,
    param: { club_slug },
  } = useRouter();
  const { data } = props;

  const onHandleSeeAll = () => {
    move(`/club/${club_slug}/players`);
  };

  const onHandleClick = (slug: string) => {
    const route = {
      path: `/club/${club_slug}/player/${slug}`,
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
            {data &&
              data.map((player: any, index: number) => {
                const item: ClipProps = {
                  id: player.id,
                  backgroundImage: player.image,
                  title: `${player?.user?.first_name} ${player?.user?.last_name}`,
                  mode: "player",
                  content: player.team?.name,
                };

                return (
                  <ClipCard
                    {...item}
                    key={index}
                    handleClick={() => onHandleClick(player.slug)}
                  />
                );
              })}
          </Slider>
        </Col>
      </Row>
    </PlayerWrapper>
  );
};

export default PlayerView;

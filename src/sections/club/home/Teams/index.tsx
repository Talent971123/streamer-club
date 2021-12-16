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
import { TeamWrapper, LinkWrapper } from "./teams.style";

//  define the example data
import TeamsImage from "assets/images/home/team.png";
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

const TeamView: React.FC = () => {
  const { move } = useRouter();

  const club = useContext(ClubContext);

  const onHandleSeeAll = () => {
    move(`/club/${club.slug}/teams`);
  };

  const onHandleClick = (slug: string) => {
    const route = {
      path: `/club/${club.slug}/team/${slug}`
    };
    move(route.path);
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
            {club.teams && club.teams.map((team: any, index: number) => {
              const item: ClipProps = {
                id: team.id,
                backgroundImage: team.image,
                title: team.name,
                mode: 'teams',
                content: team.division
              }
              return (
                <ClipCard {...item} key={index} handleClick={() => onHandleClick(team.slug)} />
              );
            })}
          </Slider>
        </Col>
      </Row>
    </TeamWrapper>
  );
};

export default TeamView;

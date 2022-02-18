import React, { useContext } from "react";
import { useRouter } from "hooks";
// import component
import { Col, Row } from "components/Layout";
import { ClipCard } from "components/Card";
import { Text } from "components/Text";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { useLinkItem } from "components/hoc";
//  import types
import { ClipProps } from "types/components/ClipCard";
import { SlideArrow } from "components/Button/Button";
//  import styled component
import { PlayerWrapper, LinkWrapper } from "./player.style";
import { CarouselBody } from "theme/global.state";

//  define the example data
import { ClubContext } from "pages/club/[club_slug]";
import { connect } from "react-redux";
import { SeeAllWrapper } from "../GameDay/gameday.style";
import { IoIosArrowForward } from "react-icons/io";

const SeeAll = useLinkItem(LinkWrapper);

const PlayerView: React.FC = (props: any) => {
  const { move } = useRouter();
  const { club } = props;

  const onHandleSeeAll = () => {
    move(`/club/${club.slug}/players`);
  };

  const onHandleClick = (slug: string) => {
    const route = {
      path: `/club/${club.slug}/player/${slug}`,
    };
    move(route.path);
  };

  return (
    <PlayerWrapper>
      <Row alignItems="center">
        <Col item={24}>
          <Row>
            <Text fColor="white" fSize={1.5} fWeight={700}>
              {"Our Players"}
            </Text>
          </Row>
        </Col>
        <Col item={24}>
          <SeeAllWrapper flexDirection="row-reverse">
            <SeeAll
              handleClick={onHandleSeeAll}
              title="See all"
              icon={<IoIosArrowForward />}
              iconDirection="row-reverse"
              alignVertical="center"
            />
          </SeeAllWrapper>
        </Col>
      </Row>
      <Row padding="10px 0 0 0">
        <Col item={24}>
          {club.players && (
            <ScrollingCarousel
              leftIcon={<SlideArrow position="left" />}
              rightIcon={<SlideArrow position="right" />}
            >
              {club.players.map((player: any, index: number) => {
                const item: ClipProps = {
                  id: player.id,
                  backgroundImage: player?.user?.photo,
                  title: `${player?.user?.first_name ?? ""} ${
                    player?.user?.last_name ?? ""
                  }`,
                  mode: "player",
                  content: player.team?.name,
                };
                return (
                  <CarouselBody key={`player-view-key-${index}`}>
                    <ClipCard
                      {...item}
                      handleClick={() => onHandleClick(player.slug)}
                    />
                  </CarouselBody>
                );
              })}
            </ScrollingCarousel>
          )}
        </Col>
      </Row>
    </PlayerWrapper>
  );
};

const mapStateToProps = (state) => ({
  club: state.club.info,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerView);

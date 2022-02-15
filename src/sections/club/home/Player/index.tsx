import React, { useContext } from "react";
import { useRouter } from "hooks";
// import component
import { Col, Row } from "components/Layout";
import { ClipCard } from "components/Card";
import { Text } from "components/Text";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { useLinkItem } from "components/hoc";
import { IoArrowRedoOutline } from "react-icons/io5";
//  import types
import { ClipProps } from "types/components/ClipCard";
import { SlideArrow } from "components/Button/Button";
//  import styled component
import { PlayerWrapper, LinkWrapper } from "./player.style";
import { ClubBody } from "theme/global.state";

//  define the example data
import { connect } from "react-redux";

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
      <Row alignItems="center" justifyContent="space-between">
        <Text fColor="white" fSize={1.5} fWeight={700}>
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
                  <ClubBody>
                    <ClipCard
                      {...item}
                      key={`player-view-key-${index}`}
                      handleClick={() => onHandleClick(player.slug)}
                    />
                  </ClubBody>
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

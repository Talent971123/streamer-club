import React from "react";
import { useSubscription } from "@apollo/client";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { connect } from "react-redux";
import _ from "lodash";
import Router from "next/router";
import { useRouter } from "hooks";
// import component
import { Text } from "components/Text";
import { Col, Row } from "components/Layout";

// import styled component
import { LeaguesWrapper } from "./leagues.style";
import { SlideArrow } from "components/Button/Button";
import { LeagueBody } from "theme/global.state";
import { AvatarSkeleton } from "components/Skeleton";
import { LeagueCard } from "components/Card";

// import graphql script
import { subscribe } from "graphql/leagues/index";

// import types
import { LeaguesProps } from "types/components/LeagueCard";

// import redux action
import { setLeagueInfo } from "redux/actions/league";

const LeaguesView: React.FC = (props: any) => {
  const { leagueInfo, setLeagueInfo } = props;
  const { loading, error, data } = useSubscription(subscribe.SUB_ALL_LEAGUES);
  const { param }: any = useRouter();
  const pack = data && data.leagues;

  if (error) return <div>Error!</div>;

  const handleClick = (slug: string) => {
    if (leagueInfo?.slug === slug) {
      setLeagueInfo(null);
      Router.push("/")
      return;
    }

    Router.push(`/league/${slug}`);
  };

  return (
    <LeaguesWrapper>
      <Row alignItems="center" justifyContent="space-between">
        <Text fColor="white" fSize={1.5} fWeight={700} mode="p">
          {"Leagues"}
        </Text>
      </Row>
      <Row padding="10px 0 0 0">
        <Col item={24}>
          {loading ? (
            <ScrollingCarousel
              leftIcon={<SlideArrow position="left" />}
              rightIcon={<SlideArrow position="right" />}
            >
              {[1, 2, 3, 4, 5, 6].map((item: number) => {
                return (
                  <LeagueBody key={`game-day-view-key-${item}`}>
                    <AvatarSkeleton />
                  </LeagueBody>
                );
              })}
            </ScrollingCarousel>
          ) : (
            <ScrollingCarousel
              leftIcon={<SlideArrow position="left" />}
              rightIcon={<SlideArrow position="right" />}
            >
              {pack.map((league: any, index: number) => {
                const item: LeaguesProps = {
                  id: league.id,
                  backgroundImage: league.logo,
                  mode: "league",
                  content: league.name,
                  slug: league.slug,
                };

                return (
                  <LeagueBody key={`club-body-key-${index}`}>
                    <LeagueCard
                      {...item}
                      isLeagueSelected={_.isEqual(item.slug, param?.league_slug)}
                      handleClick={handleClick}
                    />
                  </LeagueBody>
                );
              })}
            </ScrollingCarousel>
          )}
        </Col>
      </Row>
    </LeaguesWrapper>
  );
};

const mapStateToProps = (state) => ({
  leagueInfo: state.league.info,
});

const mapDispatchToProps = {
  setLeagueInfo: setLeagueInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(LeaguesView);

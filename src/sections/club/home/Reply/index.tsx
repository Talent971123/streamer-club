import React, { useEffect, useState } from "react";
import { useSubscription } from "@apollo/client";
import { useLinkItem } from "components/hoc";
// import component
import { Col, Row } from "components/Layout";
import { Text } from "components/Text";
import { HomeQL } from "graphql/club";
import { useRouter } from "next/router";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { MatchSkeleton } from "components/Skeleton";
// import types
import { GameCardProps } from "types/components/GameCard";
import { thumbNailLink } from "utils/common-helper";
// import styled component
import { SlideArrow } from "components/Button/Button";
import { LinkWrapper, ReplayWrapper } from "./replay.style";
import { CardBody } from "theme/global.state";
import ThumbCard from "components/Card/ThumbCard";

import _ from "lodash";
import { SeeAllWrapper } from "../GameDay/gameday.style";
import { IoIosArrowForward } from "react-icons/io";

const SeeAll = useLinkItem(LinkWrapper);

/** TODO: Fix Typo Reply to Replay */
const ReplayView: React.FC = () => {
  const router = useRouter();
  const { club_slug, team_slug } = router.query;
  const [pack, setPack] = useState([]);

  let variables: { club_slug?: any; team_slug?: any } = { club_slug };
  let gql = HomeQL.SUB_CLUB_REPLAYS;

  /** Teams page */
  if (!_.isUndefined(team_slug)) {
    variables = { team_slug };
    gql = HomeQL.SUB_TEAM_REPLAYS;
  }

  const { loading, data } = useSubscription(gql, {
    variables,
  });

  useEffect(() => {
    setPack(data && data.matches);
  }, [data]);

  const onHandleSeeAll = () => {
    router.push(`/club/${club_slug}/replays`);
  };

  const onHandleClick = (id: number) => {
    router.push(`/club/${club_slug}/replay/${id}`);
  };

  return (
    <ReplayWrapper>
      <Row alignItems="center">
        <Col item={24}>
          <Row>
            <Text fColor="white" fSize={1.375} fWeight={700}>
              {"Replays"}
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
          <ScrollingCarousel
            leftIcon={<SlideArrow position="left" />}
            rightIcon={<SlideArrow position="right" />}
          >
            {loading
              ? [1, 2, 3, 4, 5, 6].map((item: number) => {
                  return (
                    <CardBody key={`game-day-view-key-${item}`}>
                      <MatchSkeleton />
                    </CardBody>
                  );
                })
              : pack?.map((match: any, index: number) => {
                  const item: GameCardProps = {
                    id: match.id,
                    backgroundImage: thumbNailLink(
                      match.video_asset_id,
                      200,
                      match.thumbnail_url
                    ),
                    clubImage1: match.home_team.club.logo,
                    clubName1: match.home_team.club.display_name,
                    clubImage2: match.away_team.club.logo,
                    clubName2: match.away_team.club.display_name,
                    leagueImage: match.league.logo,
                    leagueDivisionName: match.home_team.division,
                    leagueName: match.league.name,
                    match_round: match.round,
                    roundName: match.round_name,
                    matchName: match.name,
                    date: match.start_datetime,
                    mode: "Replay",
                  };

                  return (
                    <CardBody key={"reply" + index}>
                      <ThumbCard
                        {...item}
                        handleClick={() => onHandleClick(match.id)}
                      />
                    </CardBody>
                  );
                })}
          </ScrollingCarousel>
        </Col>
      </Row>
    </ReplayWrapper>
  );
};

export default ReplayView;

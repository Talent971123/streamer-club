import React, { useState } from "react";
// import component
import { Col, Row } from "components/Layout";
import { GameCard } from "components/Card";
import { Text } from "components/Text";
import {ScrollingCarousel} from '@trendyol-js/react-carousel';
import { useLinkItem } from "components/hoc";
import { IoArrowRedoOutline } from "react-icons/io5";
// import styled component
import {SlideArrow} from "components/Button/Button"
import { ReplayWrapper, LinkWrapper } from "./replay.style";
// import types
import { GameCardProps } from "types/components/GameCard";

// define example data
import marker from "assets/images/home/mark.png";
import { useRouter } from "next/router";

import { HomeQL } from "graphql/club";
import { useSubscription } from "@apollo/client";
import { thumbNailLink } from "utils/common-helper";
import moment from "moment";

import { dateDisplayFormat } from "utils/constData";

const SeeAll = useLinkItem(LinkWrapper);

/** TODO: Fix Typo Reply to Replay */
const ReplyView: React.FC = () => {
  const router = useRouter();
  const { club_slug } = router.query;

  const [matches, setMatches] = useState([]);

  useSubscription(HomeQL.SUB_CLUB_REPLAYS, {
    variables: {
      club_slug,
    },
    onSubscriptionData({ subscriptionData: { data } }) {
      data && setMatches(data.matches);
    },
  });

  const onHandleSeeAll = () => {
    router.push(`/club/${club_slug}/replays`);
  };

  const onHandleClick = (id: number) => {
    router.push(`/club/${club_slug}/replay/` + id);
  };

  return (
    <ReplayWrapper>
      <Row alignItems="center" justifyContent="space-between">
        <Text fColor="white" fSize={20} fWeight={700}>
          {"Replays"}
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
          <ScrollingCarousel
            leftIcon={<SlideArrow position='left' />}
            rightIcon={<SlideArrow position='right' />}
          >
            {matches &&
              matches.map((match: any, index: number) => {
                const item: GameCardProps = {
                  id: match.id,
                  backgroundImage: thumbNailLink(match.video_asset_id, 200),
                  clubImage1: match.home_team.club.logo,
                  clubName1: match.home_team.club.name,
                  clubImage2: match.away_team.club.logo,
                  clubName2: match.away_team.club.name,
                  leagueImage: match.league.logo,
                  leagueDivisionName: match.home_team.division,
                  leagueName: match.league.name,
                  match_round: match.round,
                  date: match.start_datetime
                    ? moment(match.start_datetime).format(dateDisplayFormat)
                    : moment().format(dateDisplayFormat),
                  mode: "Replay",
                };

                return (
                  <GameCard
                    {...item}
                    key={index}
                    handleClick={() => onHandleClick(match.video_asset_id)}
                  />
                );
              })}
          </ScrollingCarousel>
        </Col>
      </Row>
    </ReplayWrapper>
  );
};

export default ReplyView;

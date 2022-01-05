import { useSubscription } from "@apollo/client";
import { GameCard } from "components/Card";
import { useLinkItem } from "components/hoc";
// import component
import { Col, Row } from "components/Layout";
import { Text } from "components/Text";
import { HomeQL } from "graphql/club";
import moment from "moment";
import { useRouter } from "hooks";
import React, { useState } from "react";
import { IoArrowRedoOutline } from "react-icons/io5";
import Slider from "react-slick";
// import types
import { GameCardProps } from "types/components/GameCard";
import { thumbNailLink } from "utils/common-helper";
import { dateDisplayFormat } from "utils/constData";
// import styled component
import { LinkWrapper, ReplyWrapper } from "./replay.style";

import _ from 'lodash'

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
        top: "140px",
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
        top: "140px",
      }}
      onClick={onClick}
    />
  );
};

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: <NextArrow />,
  prevArrow: <BeforeArrow />,
};

const SeeAll = useLinkItem(LinkWrapper);

/** TODO: Fix Typo Reply to Replay */
const ReplayView: React.FC = () => {

  const { move, param: { club_slug, team_slug } } = useRouter();
  const [matches, setMatches] = useState([]);

  let variables: { club_slug?: string, team_slug?: string } = { club_slug }
  let gql = HomeQL.SUB_CLUB_REPLAYS

  /** Teams page */
  if (!_.isUndefined(team_slug)) {
    variables = { team_slug }
    gql = HomeQL.SUB_TEAM_REPLAYS
  }

  console.log(variables)

  useSubscription(gql, {
    variables,
    onSubscriptionData({ subscriptionData: { data } }) {
      data && setMatches(data.matches);
    },
  });

  const onHandleSeeAll = () => {
    move(`/club/${club_slug}/replays`);
  };

  const onHandleClick = (id: number) => {
    move(`/club/${club_slug}/replay/` + id);
  };

  return (
    <ReplyWrapper>
      <Row alignItems="center" justifyContent="space-between">
        <Text fColor="white" fSize={22} fWeight={700}>
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
          <Slider {...settings}>
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
          </Slider>
        </Col>
      </Row>
    </ReplyWrapper>
  );
};

export default ReplayView;

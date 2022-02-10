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
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
// import types
import { GameCardProps } from "types/components/GameCard";
import { thumbNailLink } from "utils/common-helper";
import { dateDisplayFormat } from "utils/constData";
// import styled component
import { SlideArrow } from "components/Button/Button";
import { LinkWrapper, ReplayWrapper } from "./replay.style";
import { CardBody } from "theme/global.state";
import ThumbCard from "components/Card/ThumbCard";

import { getDates } from "utils/helper-date";

import _ from "lodash";

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
  speed: 500,
  initialSlide: 0,
  slidesToShow: 4,
  slidesToScroll: 3,
  nextArrow: <NextArrow />,
  prevArrow: <BeforeArrow />,
  responsive: [
    {
      breakpoint: 1290,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

const SeeAll = useLinkItem(LinkWrapper);

/** TODO: Fix Typo Reply to Replay */
const ReplayView: React.FC = () => {
  const {
    move,
    param: { club_slug, team_slug },
  } = useRouter();
  const [matches, setMatches] = useState([]);

  let variables: { club_slug?: string; team_slug?: string } = { club_slug };
  let gql = HomeQL.SUB_CLUB_REPLAYS;

  /** Teams page */
  if (!_.isUndefined(team_slug)) {
    variables = { team_slug };
    gql = HomeQL.SUB_TEAM_REPLAYS;
  }

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
    <ReplayWrapper>
      <Row alignItems="center" justifyContent="space-between">
        <Text fColor="white" fSize={1.375} fWeight={700}>
          {"Replays2"}
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
            leftIcon={<SlideArrow position="left" />}
            rightIcon={<SlideArrow position="right" />}
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
                  roundName: match.round_name,
                  matchName: match.name,
                  date: getDates(match.start_datetime).datefull,
                  mode: "Replay",
                };

                return (
                  <CardBody>
                    <ThumbCard
                      {...item}
                      key={index}
                      handleClick={() => onHandleClick(match.video_asset_id)}
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

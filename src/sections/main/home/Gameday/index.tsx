import React, { useState } from "react";
import { Router, useRouter } from "next/router";
// import component
import { Text } from "components/Text";
import { Col, Row } from "components/Layout";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { useLinkItem } from "components/hoc";
import { SlideArrow } from "components/Button/Button";
// import styled component
import { GameDayWrapper, LinkWrapper } from "./gameday.style";
import { CardBody } from "theme/global.state";
// import types
import { GameCardProps } from "types/components/GameCard";
// define example data
import marker from "assets/images/home/mark.png";
import { useSubscription } from "@apollo/client";
import { subscribe } from "graphql/match/index";
import { progressText, thumbNailLink } from "utils/common-helper";
import ThumbCard from "components/Card/ThumbCard";
import { connect } from "react-redux";

import _ from "lodash";

const SeeAll = useLinkItem(LinkWrapper);

const GameDayView: React.FC = (props: any) => {
  const { type } = props;
  const router = useRouter();
  const variables =
    type !== "Replays"
      ? { status: { _neq: "completed" }, is_historic: { _eq: false } }
      : { status: { _eq: "completed" } };

  const [data, setData] = useState([]);
  useSubscription(subscribe.SUB_FILTER_MATCHES, {
    variables: {
      where: {
        ...variables,
      },
    },
    onSubscriptionData({ subscriptionData: { data } }) {
      data && setData(data.matches);
    },
  });

  // const onHandleSeeAll = () => {
  //   if (type !== "Replays") {
  //     router.push(`/main/live`);
  //   } else {
  //     router.push(`/main/replay`);
  //   }
  // };

  const getSlug = (id: number): string => {
    const club = _.find(props.siteClubs, { id });
    return club?.slug ? club?.slug : "";
  };

  const onHandleClick = (id: number, clubId: number) => {
    if (type !== "Replays") {
      router.push(`/club/${getSlug(clubId)}/match/${id}`);
    } else {
      router.push(`/club/${getSlug(clubId)}/replay/${id}`);
    }
  };

  return (
    <GameDayWrapper>
      <Row alignItems="center" justifyContent="space-between">
        <Text fColor="white" fSize={1.5} fWeight={700} mode="p">
          {type}
        </Text>
        {/* <SeeAll
          handleClick={onHandleSeeAll}
          title="See all"
          icon={<IoArrowRedoOutline />}
          iconDirection="row-reverse"
          alignVertical="center"
        /> */}
      </Row>
      <Row padding="10px 0 0 0">
        <Col item={24}>
          <ScrollingCarousel
            leftIcon={<SlideArrow position="left" />}
            rightIcon={<SlideArrow position="right" />}
          >
            {data.map((match: any, index: number) => {
              const item: GameCardProps = {
                id: match.id,
                backgroundImage: thumbNailLink(match.video_asset_id, 200),
                clubImage1: match.home_team.club.logo,
                clubName1: match.home_team.club.display_name,
                clubImage2: match.away_team.club.logo,
                clubName2: match.away_team.club.display_name,
                leagueImage: match.league.logo ? match.league.logo : marker,
                leagueName: match.league.name,
                roundName: match.round_name,
                matchName: match.name,
                mode: type !== "Replays" ? "Day" : "Replay",
                progress: progressText(match.start_datetime, match.status),
                isLive:
                  progressText(match.start_datetime, match.status) ===
                  "In Progress",
                users: 0, //TODO: get the number of users watching
                date: match.start_datetime,
              };

              return (
                <CardBody key={`game-day-view-key${index}`}>
                  <ThumbCard
                    {...item}
                    handleClick={() => onHandleClick(match.id, match.club_id)}
                  />
                </CardBody>
              );
            })}
          </ScrollingCarousel>
        </Col>
      </Row>
    </GameDayWrapper>
  );
};

const mapStateToProps = (state) => ({
  siteClubs: state.site.clubs,
});

export default connect(mapStateToProps)(GameDayView);

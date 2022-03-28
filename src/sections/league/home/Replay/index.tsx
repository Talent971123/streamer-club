import React, { useState } from "react";
import { useSubscription } from "@apollo/client";
import { useLinkItem } from "components/hoc";
import { useRouter } from "next/router";
import _ from "lodash";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { IoIosArrowForward } from "react-icons/io";
import { connect } from "react-redux";

// import component
import { Col, Row } from "components/Layout";
import { Text } from "components/Text";
import ThumbCard from "components/Card/ThumbCard";
import { SlideArrow } from "components/Button/Button";

// import types
import { GameCardProps } from "types/components/GameCard";
import { thumbNailLink } from "utils/common-helper";
// import styled component
import { LinkWrapper, ReplayWrapper } from "./replay.style";
import { CardBody } from "theme/global.state";
import { SeeAllWrapper } from "../GameDay/gameday.style";

// import graphql
import { LeagueHomeQL } from "graphql/leagues";

const SeeAll = useLinkItem(LinkWrapper);

/** TODO: Fix Typo Reply to Replay */
const ReplayView: React.FC = (props: any) => {
  const { leagueInfo } = props;
  const router = useRouter();

  const [matches, setMatches] = useState([]);

  useSubscription(LeagueHomeQL.SUB_LEAGUE_REPLAYS, {
    variables: {
      where: {
        league_id: { _eq: leagueInfo?.id },
        status: { _eq: "completed" },
      },
    },
    onSubscriptionData({ subscriptionData: { data } }) {
      data && setMatches(data.matches);
    },
  });

  const onHandleClick = (id: number) => {
    router.push(`/league/${leagueInfo.slug}/replay/${id}`);
  };

  if (!matches) {
    return <></>;
  }

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

const mapStateToProps = (state) => ({
  leagueInfo: state.league.info,
});

export default connect(mapStateToProps)(ReplayView);

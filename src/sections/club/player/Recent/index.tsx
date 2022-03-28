import { useSubscription } from "@apollo/client";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
// import styled component
import { SlideArrow } from "components/Button/Button";
import ThumbCard from "components/Card/ThumbCard";
import { useLinkItem } from "components/hoc";
// import component
import { Col, Row } from "components/Layout";
import { Text } from "components/Text";
import subscribe from "graphql/match/subscriptions";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { CardBody } from "theme/global.state";
// import types
import { GameCardProps } from "types/components/GameCard";
import { thumbNailLink } from "utils/common-helper";
import { LinkWrapper, ReplayWrapper, SeeAllWrapper } from "./replay.style";


const SeeAll = useLinkItem(LinkWrapper);

/** TODO: Fix Typo Reply to Replay */
const RecentGamesView: React.FC = (props: any) => {
  const router = useRouter();
  const { club_slug, team_slug } = router.query;
  const { playerDetailId } = props

  const [matches, setMatches] = useState([]);

  useSubscription(subscribe.SUB_MATCHES, {
    variables: {
      where: {
        status: { _eq: "completed" },
        home_team: {
          players: {
            id: { _eq: playerDetailId }
          }
        }
      }
    },
    onSubscriptionData({ subscriptionData: { data } }) {
      data && setMatches(data.matches);
    },
  });

  const onHandleSeeAll = () => {
    router.push(`/club/${club_slug}/replays`);
  };

  const onHandleClick = (id: number) => {
    router.push(`/club/${club_slug}/replay/${id}`);
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
              {"Recent Games"}
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
            {matches &&
              matches.map((match: any, index: number) => {
                const item: GameCardProps = {
                  id: match.id,
                  backgroundImage: thumbNailLink(match.video_asset_id, 200, match.thumbnail_url),
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
                  <CardBody key={`recentGames-${index}`}>
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

export default RecentGamesView;

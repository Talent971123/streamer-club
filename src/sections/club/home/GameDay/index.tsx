import React, { useState } from "react";
// import component
import { Col, Row } from "components/Layout";
import { Text } from "components/Text";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { useLinkItem } from "components/hoc";
// import styled component
import { SlideArrow } from "components/Button/Button";
import { GameDayWrapper, LinkWrapper, SeeAllWrapper } from "./gameday.style";
import { CardBody } from "theme/global.state";
// import types
import { GameCardProps } from "types/components/GameCard";
// define example data
import marker from "assets/images/home/mark.png";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { useSubscription } from "@apollo/client";
import { subscribe } from "graphql/match/index";
import { progressText, thumbNailLink } from "utils/common-helper";
import ThumbCard from "components/Card/ThumbCard";
import { IoIosArrowForward } from "react-icons/io";

const SeeAll = useLinkItem(LinkWrapper);

const GameDayView: React.FC = (props: any) => {
  const router = useRouter();
  const { club_slug } = router.query;
  const { clubInfo } = props;

  const [data, setData] = useState([]);

  useSubscription(subscribe.SUB_MATCHES, {
    variables: {
      where: {
        status: { _neq: "completed" },
        is_historic: { _eq: false },
        _or: [
          { away_club_id: { _eq: clubInfo.id } },
          { club_id: { _eq: clubInfo.id } },
        ],
      },
    },
    onSubscriptionData({ subscriptionData: { data } }) {
      data && setData(data.matches);
    },
  });

  const onHandleSeeAll = () => {
    router.push(`/club/${club_slug}/live`);
  };

  const onHandleClick = (id: number) => {
    router.push(`/club/${clubInfo.slug}/match/${id}`);
  };
  return (
    <GameDayWrapper>
      <Row alignItems="center">
        <Col item={24}>
          <Row>
            <Text fColor="white" fSize={1.5} fWeight={700} mode="p">
              {"Live & Upcoming"}
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
            {data.map((match: any, index: number) => {
              const item: GameCardProps = {
                id: match.id,
                backgroundImage: thumbNailLink(match.video_asset_id, 200, match.thumbnail_url),
                clubImage1: match.home_team.club.logo,
                clubName1: match.home_team.club.display_name,
                clubImage2: match.away_team.club.logo,
                clubName2: match.away_team.club.display_name,
                leagueImage: match.league.logo ? match.league.logo : marker,
                leagueName: match.league.name,
                roundName: match.round_name,
                matchName: match.name,
                mode: "Day",
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
                    handleClick={() => onHandleClick(match.id)}
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
  clubInfo: state.club.info,
});

export default connect(mapStateToProps)(GameDayView);

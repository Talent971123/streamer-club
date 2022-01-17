import React from "react";
// import component
import { Col, Row } from "components/Layout";
import { GameCard } from "components/Card";
import { Text } from "components/Text";
import Slider from "react-slick";
// import styled component
import { GameDayWrapper } from "./upcoming.style";
// import types
import { GameCardProps } from "types/components/GameCard";
// define example data
import clubImage1 from "assets/images/home/team2.png";
import clubImage2 from "assets/images/home/team1.png";
import backgroundImage from "assets/images/home/background.jpg";
import marker from "assets/images/home/mark.png";

import { connect } from 'react-redux';
import { progressText, thumbNailLink } from "utils/common-helper";

import { useRouter } from "next/router";

const UpcomeSection = (props) => {
  const router = useRouter();
  const { liveList, clubInfo } = props

  const onClick = (id: number) => {
    router.push(`/club/${clubInfo.slug}/match/` + id);
  };

  return (
    <GameDayWrapper>
      <Row alignItems="center" justifyContent="space-between">
        <Text fColor="white" fSize={22} fWeight={700} mode="p">
          {"Round 15 - Western Australia Football League"}
        </Text>
      </Row>
      <Row
        padding="10px 0 0 0"
        display="grid"
        templateCol="repeat(4, 1fr)"
        gap={"20px 10px"}
      >
        {liveList.map((match: any, index: number) => {

          const item: GameCardProps = {
            id: match.id,
            backgroundImage: thumbNailLink(match.video_asset_id, 200),
            clubImage1: match.home_team.club.logo,
            clubName1: match.home_team.club.name,
            clubImage2: match.away_team.club.logo,
            clubName2: match.away_team.club.name,
            leagueImage: match.league.logo ? match.league.logo : marker,
            leagueDivisionName: match.home_team.division,
            roundName: match.round_name,
            matchName: match.name,
            mode: "Day",
            progress: progressText(match.start_datetime, match.status),
            isLive: progressText(match.start_datetime, match.status) === "In Progress",
            users: 0 /** TODO: get the number of users watching */
          };

          return <GameCard {...item} key={index} handleClick={() => onClick(match.video_asset_id)} />;

        })}
      </Row>
    </GameDayWrapper>
  );
};

const mapStateToProps = state => ({
  liveList: state.match.live_list,
  clubInfo: state.club.info
})

export default connect(mapStateToProps)(UpcomeSection);

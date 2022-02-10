import marker from "assets/images/home/mark.png";
import { GameCard } from "components/Card";
// import component
import { Row } from "components/Layout";
import { Text } from "components/Text";
import { ReplayPageContext } from "pages/club/[club_slug]/replays";
import React, { useContext } from "react";
// import types
import { GameCardProps } from "types/components/GameCard";
import { thumbNailLink } from "utils/common-helper";
// import styled component
import { ReplayWrapper } from "./replay.style";

import { useRouter } from "next/router";
import { getDates } from "utils/helper-date";

const ReplyView: React.FC = () => {
  const router = useRouter();
  const data = useContext(ReplayPageContext);

  const { club_slug } = router.query;

  const onHandleClick = (video_asset_id: number, id: number) => {
    router.push({
      pathname: `/club/${club_slug}/replay/${video_asset_id}`,
      query: {
        assetId: id,
      },
    });
  };

  return (
    <ReplayWrapper>
      <Row alignItems="center" justifyContent="space-between">
        <Text fColor="white" fSize={1.375} fWeight={700}>
          {"Round 14 - Western Australia Football League"}
        </Text>
      </Row>

      <Row
        padding="10px 0 0 0"
        display="grid"
        templateCol="repeat(4, 1fr)"
        gap={"20px 10px"}
      >
        {data.map((match: any, index: number) => {
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
            mode: "Replay",
            date: getDates(match.start_datetime).datefull,
          };

          return (
            <GameCard
              {...item}
              key={index}
              handleClick={() => onHandleClick(match.video_asset_id, match.id)}
            />
          );
        })}
      </Row>
    </ReplayWrapper>
  );
};

export default ReplyView;

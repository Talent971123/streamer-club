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
import { ReplyWrapper } from "./reply.style";

import { useRouter } from "next/router";


const ReplyView: React.FC = () => {

  const router = useRouter();
  const data = useContext(ReplayPageContext);

  const { club_slug } = router.query;

  const onClick = (id: number) => {
    router.push(`/club/${club_slug}/replay/` + id);
  };

  return (
    <ReplyWrapper>
      <Row alignItems="center" justifyContent="space-between">
        <Text fColor="white" fSize={22} fWeight={700}>
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
            leagueImage: marker,
            leagueDivisionName: match.home_team.division,
            mode: "Replay",
          };

          return <GameCard {...item} key={index} handleClick={() => onClick(match.video_asset_id)} />;
        })}
      </Row>
    </ReplyWrapper>
  );
};

export default ReplyView;

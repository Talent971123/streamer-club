import marker from "assets/images/home/mark.png";
import { GameCard } from "components/Card";
// import component
import { Col, Row } from "components/Layout";
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
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { SlideArrow } from "components/Button/Button";
import ThumbCard from "components/Card/ThumbCard";
import { CardBody } from "theme/global.state";

const ReplyView: React.FC = () => {
  const router = useRouter();
  const data = useContext(ReplayPageContext);

  const { club_slug } = router.query;

  let temp: any = [];
  data.map((item: any) => {
    temp.push(item.round_name);
  });
  const replays: any = [...new Set(temp)];

  const onHandleClick = (id: number) => {
    router.push(`/club/${club_slug}/replay/${id}`);
  };
  return (
    <>
      {replays ? (
        replays.map((value: any, index: number) => {
          return (
            <ReplayWrapper>
              <Row alignItems="center" justifyContent="space-between">
                <Text fColor="white" fSize={1.375} fWeight={700}>
                  {`${value} - Western Australia Football League`}
                </Text>
              </Row>
              <Row padding="10px 0 0 0">
                <Col item={24}>
                  <ScrollingCarousel
                    leftIcon={<SlideArrow position="left" />}
                    rightIcon={<SlideArrow position="right" />}
                  >
                    {data
                      .filter((val) => val.round_name === value)
                      .map((match: any, index: number) => {
                        const item: GameCardProps = {
                          id: match.id,
                          backgroundImage: thumbNailLink(
                            match.video_asset_id,
                            200
                          ),
                          clubImage1: match.home_team.club.logo,
                          clubName1: match.home_team.club.name,
                          clubImage2: match.away_team.club.logo,
                          clubName2: match.away_team.club.name,
                          leagueImage: match.league.logo
                            ? match.league.logo
                            : marker,
                          leagueName: match.league.name,
                          roundName: match.round_name,
                          matchName: match.name,
                          mode: "Replay",
                          date: match.start_datetime,
                        };
                        return (
                          <CardBody>
                            <ThumbCard
                              {...item}
                              key={`replay-view-key${index}`}
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
        })
      ) : (
        <Text tAlign="center" fSize={1}>
          No Replays Found
        </Text>
      )}
    </>
  );
};

export default ReplyView;

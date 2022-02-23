import React, { useEffect, useState } from "react";
// import component
import { Col, Row } from "components/Layout";
import { GameCard } from "components/Card";
import ThumbCard from "components/Card/ThumbCard";
import { Text } from "components/Text";
// import styled component
import { GameDayWrapper } from "./upcoming.style";
// import types
import { GameCardProps } from "types/components/GameCard";
// define example data
import marker from "assets/images/home/mark.png";

import { connect } from "react-redux";
import { progressText, thumbNailLink } from "utils/common-helper";

import { useRouter } from "next/router";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { SlideArrow } from "components/Button/Button";
import { CardBody } from "theme/global.state";

const UpcomeSection = (props) => {
  const router = useRouter();
  const { liveList, clubInfo } = props;

  let temp: any = [];
  liveList.map((item: any) => {
    temp.push(item.round_name);
  });
  const rounds: any = [...new Set(temp)];

  const onClick = (id: number) => {
    router.push(`/club/${clubInfo.slug}/match/${id}`);
  };

  return (
    <GameDayWrapper>
      {rounds ? (
        rounds.map((item: any, index: number) => {
          return (
            <GameDayWrapper>
              <Row
                alignItems="center"
                justifyContent="space-between"
                key={index}
              >
                <Text fColor="white" fSize={1.375} fWeight={700} mode="p">
                  {`${item} - Western Australia Football League`}
                </Text>
              </Row>
              <Row padding="10px 0 0 0">
                <Col item={24}>
                  <ScrollingCarousel
                    leftIcon={<SlideArrow position="left" />}
                    rightIcon={<SlideArrow position="right" />}
                  >
                    {liveList
                      .filter((val) => val.round_name === item)
                      .map((item: any, index: number) => {
                        const values: GameCardProps = {
                          id: item.id,
                          backgroundImage: thumbNailLink(
                            item.video_asset_id,
                            200,
                            item?.thumbnail_url,
                          ),
                          clubImage1: item.home_team.club.logo,
                          clubName1: item.home_team.club.name,
                          clubImage2: item.away_team.club.logo,
                          clubName2: item.away_team.club.name,
                          leagueImage: item.league.logo
                            ? item.league.logo
                            : marker,
                          leagueName: item.league.name,
                          roundName: item.round_name,
                          matchName: item.name,
                          mode: "Day",
                          progress: progressText(
                            item.start_datetime,
                            item.status
                          ),
                          isLive:
                            progressText(item.start_datetime, item.status) ===
                            "In Progress",
                          users: 0 /** TODO: get the number of users watching */,
                          date: item.start_datetime,
                        };

                        return (
                          <CardBody>
                            <ThumbCard
                              {...values}
                              key={`game-day-view-key${index}`}
                              handleClick={() => onClick(item.id)}
                            />
                          </CardBody>
                        );
                      })}
                  </ScrollingCarousel>
                </Col>
              </Row>
            </GameDayWrapper>
          );
        })
      ) : (
        <Text tFont="roboto" tAlign="center" fSize={1}>
          No Match Found
        </Text>
      )}
    </GameDayWrapper>
  );
};

const mapStateToProps = (state) => ({
  liveList: state.match.live_list,
  clubInfo: state.club.info,
});

export default connect(mapStateToProps)(UpcomeSection);

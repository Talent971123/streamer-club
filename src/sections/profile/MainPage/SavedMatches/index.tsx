import { useSubscription } from '@apollo/client';
import { useUser } from "@auth0/nextjs-auth0";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { SlideArrow } from "components/Button/Button";
import ThumbCard from "components/Card/ThumbCard";
import { Col, Row } from "components/Layout";
import { Text } from "components/Text";
import { subscribe } from 'graphql/match';
import _ from 'lodash';
import { useRouter } from "next/router";
import React, { useState } from 'react';
import { CardBody } from "theme/global.state";
import { GameCardProps } from "types/components/GameCard";
import { thumbNailLink } from "utils/common-helper";
import marker from "assets/images/home/mark.png";
import {
    DisplayWrapper
} from "../profile-view.style";

function SavedMatchesSection() {

    const router = useRouter();
    const { user } = useUser();
    const [data, setData] = useState<Partial<Array<any>>>([]);

    useSubscription(subscribe.SUB_SAVED_MATCHES, {
        variables: {
            "where": {
                "user_id": { "_eq": user?.id }
            }
        },
        onSubscriptionData({ subscriptionData: { data } }) {
            data.saved_matches && setData(data.saved_matches)
        },
    })

    const onHandleClick = (slug: string, match_id: string, status: string, historic: boolean) => {

        if (historic || ['completed'].includes(status)) {
            router.push(`/club/${slug}/replay/${match_id}`);
            return null
        }

        router.push(`/club/${slug}/match/${match_id}`);
    };

    if (_.isEmpty(data)) {
        return <></>
    }

    return (
        <DisplayWrapper>
            <Row alignItems="center" justifyContent="space-between">
                <Text fColor="white" fSize={1.25} fWeight={700} mode="p">
                    {"Saved Matches"}
                </Text>
                {/* <SeeAll
              handleClick={() => onHandleSeeAll("replays")}
              title="See all"
              icon={<IoIosArrowForward />}
              iconDirection="row-reverse"
              alignVertical="center"
            /> */}
            </Row>
            <Row
                padding="10px 0 0 0"
                alignItems="center"
                justifyContent="center"
                flexDirection="row"
            >
                <Col item={24}>
                    {data && <ScrollingCarousel
                        leftIcon={<SlideArrow position="left" />}
                        rightIcon={<SlideArrow position="right" />}
                    >
                        {data.map((record: any, index: number) => {
                            const { match } = record
                            const item: GameCardProps = {
                                id: match.id,
                                backgroundImage: thumbNailLink(match.video_asset_id, 200, match?.thumbnail_url),
                                clubImage1: match.home_team.club.logo,
                                clubName1: match.home_team.club.display_name,
                                clubImage2: match.away_team.club.logo,
                                clubName2: match.away_team.club.display_name,
                                leagueImage: match.league.logo ? match.league.logo : marker,
                                leagueDivisionName: match.home_team.division,
                                leagueName: match.league.name,
                                match_round: match.round,
                                roundName: match.round_name,
                                matchName: match.name,
                                mode: "Replay",
                                date: match.start_datetime,
                            };

                            return (
                                <CardBody key={`save-match-thumnail-list-${index}`} >
                                    <ThumbCard
                                        {...item}
                                        handleClick={() => onHandleClick(match.home_team.club.slug, match.id, match.status, match.is_historic)}
                                    />
                                </CardBody>
                            );
                        })}
                    </ScrollingCarousel>}
                </Col>
            </Row>
        </DisplayWrapper>
    )
}

export default SavedMatchesSection
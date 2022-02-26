import React, { useState } from 'react'
import { Col, Row } from "components/Layout";
import { Text } from "components/Text";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { SlideArrow } from "components/Button/Button";
import { CardBody, CarouselBody } from "theme/global.state";
import { Image } from "components/Image";
import {
    ClubSlider,
    DisplayWrapper,
    LinkWrapper,
    PContent,
    ProfileContent,
} from "../profile-view.style";
import { useSubscription } from '@apollo/client';
import { TEAMS_USER_FOLLOWS } from 'graphql/club/users';
import { useUser } from "@auth0/nextjs-auth0";
import { ClubBody } from "theme/global.state";
import { ClipCard } from "components/Card";
import { ClipProps } from "types/components/ClipCard";
import { useRouter } from "next/router";

function TeamsFollowSection() {
    const router = useRouter();
    const { user } = useUser();
    const [data, setData] = useState<Partial<Array<any>>>([]);

    useSubscription(TEAMS_USER_FOLLOWS, {
        variables: {
            "where": {
                "user_id": { "_eq": user?.id }
            }
        },
        onSubscriptionData({ subscriptionData: { data } }) {
            data.user_team_follows && setData(data.user_team_follows)
        },
    })

    const onHandleClick = (slug: string, tslug: string) => {
        router.push(`/club/${slug}/team/${tslug}`);
    };

    return (
        <DisplayWrapper>
            <Row alignItems="center" justifyContent="space-between">
                <Text fColor="white" fSize={1.25} fWeight={700} mode="p">
                    {"Teams Following"}
                </Text>
            </Row>
            <Row
                padding="10px 0 0 0"
                alignItems="flex-start"
                justifyContent="flex-start"
            >
                <Col>

                    <ScrollingCarousel
                        leftIcon={<SlideArrow position="left" />}
                        rightIcon={<SlideArrow position="right" />}
                    >
                        {data.map((ff: any, index: number) => {

                            const item: ClipProps = {
                                id: ff.team.id,
                                backgroundImage: ff.team.image,
                                mode: "club",
                                content: ff.team.name,
                            };

                            return (
                                <ClubBody key={`club-body-key-${index}`}>
                                    <ClipCard
                                        {...item}
                                        handleClick={() => onHandleClick(ff.team.club.slug, ff.team.slug)}
                                    />
                                </ClubBody>
                            );

                        })}


                    </ScrollingCarousel>

                </Col>
            </Row>
        </DisplayWrapper>
    )
}

export default TeamsFollowSection
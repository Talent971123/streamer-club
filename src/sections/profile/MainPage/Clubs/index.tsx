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
import { CLUB_USER_FOLLOWS } from 'graphql/club/users';
import { useUser } from "@auth0/nextjs-auth0";
import { ClubBody } from "theme/global.state";
import { ClipCard } from "components/Card";
import { ClipProps } from "types/components/ClipCard";
import { useRouter } from "next/router";

function ClubsFollowSection() {
    const router = useRouter();
    const { user } = useUser();
    const [data, setData] = useState<Partial<Array<any>>>([]);

    useSubscription(CLUB_USER_FOLLOWS, {
        variables: {
            "where": {
                "user_id": { "_eq": user?.id }
            }
        },
        onSubscriptionData({ subscriptionData: { data } }) {
            data.user_club_follows && setData(data.user_club_follows)
        },
    })

    const onHandleClick = (slug: string) => {
        router.push(`/club/${slug}`);
    };

    return (
        <DisplayWrapper>
            <Row alignItems="center" justifyContent="space-between">
                <Text fColor="white" fSize={1.25} fWeight={700} mode="p">
                    {"Clubs Following"}
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
                                id: ff.club.id,
                                backgroundImage: ff.club.logo,
                                mode: "club",
                                content: ff.club.name,
                            };

                            return (
                                <ClubBody key={`club-body-key-${index}`}>
                                    <ClipCard
                                        {...item}
                                        handleClick={() => onHandleClick(ff.club.slug)}
                                    />
                                </ClubBody>
                            );

                        })}

                    </ScrollingCarousel>

                </Col>
            </Row>
        </DisplayWrapper >
    )
}

export default ClubsFollowSection
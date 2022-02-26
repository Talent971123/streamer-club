import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import component
import { Col, Row } from "components/Layout";
import { Text } from "components/Text";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { useLinkItem } from "components/hoc";
import { IoArrowRedoOutline } from "react-icons/io5";
import { AvatarSkeleton } from "components/Skeleton";
// import styled component
import { SlideArrow } from "components/Button/Button";
import { GameDayWrapper, LinkWrapper } from "./club.style";
import { ClubBody } from "theme/global.state";
import { ClipCard } from "components/Card";
// import types
import { ClipProps } from "types/components/ClipCard";
// define example data
import { useSubscription } from "@apollo/client";
import { TEAMQL } from "graphql/club";

const SeeAll = useLinkItem(LinkWrapper);

const ClubView: React.FC = (props: any) => {
  const router = useRouter();
  const [pack, setPack] = useState([]);
  const { loading, data } = useSubscription(TEAMQL.SUB_CLUB_FILTER, {
    variables: {},
  });

  useEffect(() => {
    setPack(data && data.clubs);
  }, [data]);

  // const onHandleSeeAll = () => {
  //   router.push(`/main/clubs`);
  // };

  const onHandleClick = (slug: string) => {
    router.push(`/club/${slug}`);
  };

  return (
    <GameDayWrapper>
      <Row alignItems="center" justifyContent="space-between">
        <Text fColor="white" fSize={1.5} fWeight={700} mode="p">
          {"Clubs"}
        </Text>
        {/* <SeeAll
          handleClick={onHandleSeeAll}
          title="See all"
          icon={<IoArrowRedoOutline />}
          iconDirection="row-reverse"
          alignVertical="center"
        /> */}
      </Row>
      <Row padding="10px 0 0 0">
        <Col item={24}>
          <ScrollingCarousel
            leftIcon={<SlideArrow position="left" />}
            rightIcon={<SlideArrow position="right" />}
          >
            {loading
              ? [1, 2, 3, 4, 5, 6].map((item: number) => {
                  return (
                    <ClubBody key={`game-day-view-key-${item}`}>
                      <AvatarSkeleton />
                    </ClubBody>
                  );
                })
              : pack?.map((club: any, index: number) => {
                  const item: ClipProps = {
                    id: club.id,
                    backgroundImage: club.logo,
                    mode: "club",
                    content: club.name,
                  };

                  return (
                    <ClubBody key={`club-body-key-${index}`}>
                      <ClipCard
                        {...item}
                        handleClick={() => onHandleClick(club.slug)}
                      />
                    </ClubBody>
                  );
                })}
          </ScrollingCarousel>
        </Col>
      </Row>
    </GameDayWrapper>
  );
};

export default ClubView;

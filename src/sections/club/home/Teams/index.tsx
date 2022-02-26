import React, { useEffect, useState } from "react";
import { useRouter } from "hooks";
import { connect } from "react-redux";
// import component
import { Col, Row } from "components/Layout";
import { ClipCard } from "components/Card";
import { Text } from "components/Text";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { useLinkItem } from "components/hoc";
import { MatchSkeleton } from "components/Skeleton";
//  import types
import { ClipProps } from "types/components/ClipCard";
import { useSubscription } from "@apollo/client";
import { TEAMQL } from "graphql/club";
//  import styled component
import { SlideArrow } from "components/Button/Button";
import { TeamWrapper, LinkWrapper } from "./teams.style";
import { CarouselBody } from "theme/global.state";

//  define the example data
import { SeeAllWrapper } from "../GameDay/gameday.style";
import { IoIosArrowForward } from "react-icons/io";

const SeeAll = useLinkItem(LinkWrapper);

const TeamView = (props: any) => {
  const { clubInfo } = props;
  const { move } = useRouter();
  const [pack, setPack] = useState([]);
  const { loading, data } = useSubscription(TEAMQL.SUB_TEAMS, {
    variables: {
      where: { club: { slug: { _eq: clubInfo.slug } } },
    },
  });

  useEffect(() => {
    setPack(data && data.teams);
  }, [data]);

  const onHandleSeeAll = () => {
    move(`/club/${clubInfo.slug}/teams`);
  };

  const onHandleClick = (slug: string) => {
    const route = {
      path: `/club/${clubInfo.slug}/team/${slug}`,
    };
    move(route.path);
  };

  return (
    <TeamWrapper>
      <Row alignItems="center">
        <Col item={24}>
          <Row>
            <Text fColor="white" fSize={1.5} fWeight={700}>
              {"Our Teams"}
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
          {
            <ScrollingCarousel
              leftIcon={<SlideArrow position="left" />}
              rightIcon={<SlideArrow position="right" />}
            >
              {loading
                ? [1, 2, 3, 4, 5, 6].map((item: number) => {
                    return (
                      <CarouselBody key={`team-view-key-${item}`}>
                        <MatchSkeleton />
                      </CarouselBody>
                    );
                  })
                : pack?.map((team: any, index: number) => {
                    const item: ClipProps = {
                      id: team.id,
                      backgroundImage: team.image,
                      title: team.name,
                      mode: "teams",
                      content: team.division,
                    };
                    return (
                      <CarouselBody key={`team-view-key-${index}`}>
                        <ClipCard
                          {...item}
                          handleClick={() => onHandleClick(team.slug)}
                        />
                      </CarouselBody>
                    );
                  })}
            </ScrollingCarousel>
          }
        </Col>
      </Row>
    </TeamWrapper>
  );
};

const mapStateToProps = (state: any) => ({
  clubInfo: state.club.info,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TeamView);

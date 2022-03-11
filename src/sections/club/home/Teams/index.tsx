import React, { useContext } from "react";
import { useRouter } from "hooks";
// import component
import { Col, Row } from "components/Layout";
import { ClipCard } from "components/Card";
import { Text } from "components/Text";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { useLinkItem } from "components/hoc";
import { IoArrowRedoOutline } from "react-icons/io5";
//  import types
import { ClipProps } from "types/components/ClipCard";
//  import styled component
import { SlideArrow } from "components/Button/Button";
import { TeamWrapper, LinkWrapper } from "./teams.style";
import { CarouselBody } from "theme/global.state";

//  define the example data
import TeamsImage from "assets/images/home/team.png";
import { ClubContext } from "pages/club/[club_slug]";
import { SeeAllWrapper } from "../GameDay/gameday.style";
import { IoIosArrowForward } from "react-icons/io";

const SeeAll = useLinkItem(LinkWrapper);

const TeamView: React.FC = () => {
  const { move } = useRouter();

  const club = useContext(ClubContext);

  const onHandleSeeAll = () => {
    move(`/club/${club.slug}/teams`);
  };

  const onHandleClick = (slug: string) => {
    const route = {
      path: `/club/${club.slug}/team/${slug}`,
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
          {club.teams && (
            <ScrollingCarousel
              leftIcon={<SlideArrow position="left" />}
              rightIcon={<SlideArrow position="right" />}
            >
              {club.teams.map((team: any, index: number) => {
                const item: ClipProps = {
                  id: team.id,
                  backgroundImage: team.image,
                  title: team.name,
                  mode: "teams",
                  content: team.division,
                };
                return (
                  <CarouselBody key={`team-view-key-${index}`} >
                    <ClipCard
                      {...item}
                      handleClick={() => onHandleClick(team.slug)}
                    />
                  </CarouselBody>
                );
              })}
            </ScrollingCarousel>
          )}
        </Col>
      </Row>
    </TeamWrapper>
  );
};

export default TeamView;

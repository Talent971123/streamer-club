import React, { useContext } from "react";
import { useRouter } from "hooks";
// import component
import { Col, Row } from "components/Layout";
import { ClipCard } from "components/Card";
import { Text } from "components/Text";
import {ScrollingCarousel} from '@trendyol-js/react-carousel';
import { useLinkItem } from "components/hoc";
import { IoArrowRedoOutline } from "react-icons/io5";
//  import types
import { ClipProps } from "types/components/ClipCard";
import {SlideArrow} from "components/Button/Button";
//  import styled component
import { PlayerWrapper, LinkWrapper } from "./player.style";
import { CarouselBody } from "theme/global.state";

//  define the example data
import { ClubContext } from "pages/club/[club_slug]";

const SeeAll = useLinkItem(LinkWrapper);

const PlayerView: React.FC = () => {
  const { move } = useRouter();

  const club = useContext(ClubContext);

  const onHandleSeeAll = () => {
    move(`/club/${club.slug}/players`);
  };

  const onHandleClick = (slug: string) => {
    const route = {
      path: `/club/${club.slug}/player/${slug}`,
    };
    move(route.path);
  };

  return (
    <PlayerWrapper>
      <Row alignItems="center" justifyContent="space-between">
        <Text fColor="white" fSize={20} fWeight={700}>
          {"Our Players"}
        </Text>
        <SeeAll
          handleClick={onHandleSeeAll}
          title="See all"
          icon={<IoArrowRedoOutline />}
          iconDirection="row-reverse"
          alignVertical="center"
        />
      </Row>
      <Row padding="10px 0 0 0">
        <Col item={24}>
            {club.players &&
              <ScrollingCarousel
                leftIcon={<SlideArrow position='left' />}
                rightIcon={<SlideArrow position='right' />}
              >
                {club.players.map((player: any, index: number) => {
                    const item: ClipProps = {
                      id: player.id,
                      backgroundImage: player.image,
                      title: `${player?.user?.first_name ?? ''} ${player?.user?.last_name ?? ''}`,
                      mode: "player",
                      content: player.team?.name,
                    };

                    return (
                      <CarouselBody>
                        <ClipCard
                          {...item}
                          key={index}
                          handleClick={() => onHandleClick(player.slug)}
                        />
                      </CarouselBody>
                    );
                  })}
              </ScrollingCarousel>
            }
        </Col>
      </Row>
    </PlayerWrapper>
  );
};

export default PlayerView;

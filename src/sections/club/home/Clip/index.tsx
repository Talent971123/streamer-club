import { useSubscription } from "@apollo/client";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
//  import styled component
import { SlideArrow } from "components/Button/Button";
import ThumbCard from "components/Card/ThumbCard";
import { useLinkItem } from "components/hoc";
// import component
import { Col, Row } from "components/Layout";
import FeatureClip_Modal from "components/Modal/FeatureClip";
import { Text } from "components/Text";
import { CLIPS } from "graphql/club";
import { useRouter } from "hooks";
import _ from 'lodash';
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { CardBody } from "theme/global.state";
//  import types
import { FeaturedClip } from "types/components/FeaturedClip";
import { SeeAllWrapper } from "../GameDay/gameday.style";
import { ClipWrapper, LinkWrapper } from "./clip.style";


const SeeAll = useLinkItem(LinkWrapper);

const ClipView: React.FC = (props: any) => {
  const { move } = useRouter();

  const [modalFlag, setModalFlag] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalPlaybackId, setModalPlaybackId] = useState<string>();

  const onHandleSeeAll = () => {
    // move("/club/match");
  };

  const onCloseModal = () => {
    setModalFlag(false)
    setModalPlaybackId("")
  }

  const onClipClick = (playbackId, title) => {
    setModalPlaybackId(playbackId)
    setModalTitle(title)
    setModalFlag(true)
  }

  const { loading, error, data } = useSubscription(CLIPS.SUB_FEATURE_CLIPS, {
    variables: {
      where: {
        show_on_club: { _eq: true },
        club_id: { _eq: props.clubId }
      }
    }
  });

  let clips = [];

  if (!loading && data?.clip_asset_user_club) {
    clips = data?.clip_asset_user_club.map((clipAsset) => ({
      id: clipAsset.clip_asset.id,
      playbackId: clipAsset.clip_asset.playback_id,
      backgroundImage: {
        src:
          "https://image.mux.com/" +
          clipAsset.clip_asset.playback_id +
          "/thumbnail.png?width=200",
        height: 314,
        width: 178,
      },
      title: clipAsset.clip_asset.name,
      desc: _.isNull(clipAsset.clip_asset.match) ? "" : `${clipAsset.clip_asset.match?.home_team.club.display_name} vs ${clipAsset.clip_asset.match?.away_team.club.display_name} - ${clipAsset.clip_asset.match?.round_name}`
    }));
  }

  if (error) return <div>Error!</div>;

  return (
    <ClipWrapper>
      <Row alignItems="center">
        <Col item={24}>
          <Row>
            <Text fColor="white" fSize={1.5} fWeight={700}>
              {"Featured Clips"}
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

      <FeatureClip_Modal
        title={modalTitle}
        playbackId={modalPlaybackId}
        show={modalFlag}
        handleClose={() => onCloseModal()}
      />
      <Row padding="10px 0 0 0">
        <Col item={24}>
          <ScrollingCarousel
            leftIcon={<SlideArrow position="left" />}
            rightIcon={<SlideArrow position="right" />}
          >

            {clips?.map((item: FeaturedClip, index: number) => {
              // console.log(item)
              return (
                <CardBody key={`clips-card-` + index}>
                  <ThumbCard {...item} mode="Clip" key={index}
                    handleClick={() => onClipClick(item.playbackId, item.title)} />
                </CardBody>
              );
            })}
          </ScrollingCarousel>
        </Col>
      </Row>
    </ClipWrapper>
  );
};

export default ClipView;

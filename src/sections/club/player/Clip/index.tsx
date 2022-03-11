import { useSubscription } from "@apollo/client";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
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
import { IoArrowRedoOutline } from "react-icons/io5";
import { CardBody } from "theme/global.state";
import { FeaturedClip } from "types/components/FeaturedClip";
//  import styled component
import { ClipWrapper, LinkWrapper } from "./clip.style";



const SeeAll = useLinkItem(LinkWrapper);

const ClipView: React.FC = (props: any) => {

  const { clubId, playerDetailId } = props

  const { move } = useRouter();

  const [modalFlag, setModalFlag] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalPlaybackId, setModalPlaybackId] = useState<string>();

  const onCloseModal = () => {
    setModalFlag(false)
    setModalPlaybackId("")
  }

  const onClipClick = (playbackId, title) => {
    setModalPlaybackId(playbackId)
    setModalTitle(title)
    setModalFlag(true)
  }

  const onHandleSeeAll = () => {
    // move("/club/match");
  };

  const { loading, error, data } = useSubscription(CLIPS.SUB_FEATURE_CLIPS, {
    variables: {
      where: {
        players_details_id: { _eq: playerDetailId },
        club_id: { _eq: clubId },
        show_on_player: { _eq: true }
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

  if (loading) return <></>
  if (_.isEmpty(data.clip_asset_user_club)) return <></>
  if (error) return <div>Error!</div>;

  return (
    <ClipWrapper>
      <Row alignItems="center" justifyContent="space-between">
        <Text fColor="white" fSize={1.375} fWeight={700}>
          {"Featured Clips"}
        </Text>
        <SeeAll
          handleClick={onHandleSeeAll}
          title="See all"
          icon={<IoArrowRedoOutline />}
          iconDirection="row-reverse"
          alignVertical="center"
        />
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

import { useSubscription } from "@apollo/client";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
//  import styled component
import { SlideArrow } from "components/Button/Button";
import ThumbCard from "components/Card/ThumbCard";
import { useLinkItem } from "components/hoc";
// import component
import { Col, Row } from "components/Layout";
import FeatureClip_Modal from "components/Modal/FeatureClip";
import { MatchSkeleton } from "components/Skeleton";
import { Text } from "components/Text";
import { CLIPS } from "graphql/club";
import { useRouter } from "hooks";
import _ from 'lodash';
import React, { useState, useEffect } from "react";
import { CardBody } from "theme/global.state";
//  import types
import { FeaturedClip } from "types/components/FeaturedClip";
import { ClipWrapper, LinkWrapper } from "./clip.style";

//  define the example data
// import backImage from "assets/images/home/gameday.png";
// import { IoIosArrowForward } from "react-icons/io";
// import { SeeAllWrapper } from "../GameDay/gameday.style";

const SeeAll = useLinkItem(LinkWrapper);

const ClipView: React.FC = (props: any) => {
  const { move, query } = useRouter();

  const [modalFlag, setModalFlag] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalPlaybackId, setModalPlaybackId] = useState<string>();
  const [clips, setClips] = useState([])

  useEffect(() => {

    if (!_.isUndefined(query?.fc)) {
      const clipObject = _.find(clips, ['playbackId', query?.fc])
      if (!_.isUndefined(clipObject)) {
        setModalTitle(clipObject['title'])
        setModalPlaybackId(clipObject['playbackId'])
        setModalFlag(true)
      }
    }

  }, [clips])

  // const onHandleSeeAll = () => {
  //   move("/club/match");
  // };

  const onCloseModal = () => {
    setModalFlag(false);
    setModalPlaybackId("");
  };

  const onClipClick = (playbackId, title) => {
    setModalPlaybackId(playbackId);
    setModalTitle(title);
    setModalFlag(true);
  };

  const { loading, error, data } = useSubscription(CLIPS.SUB_FEATURE_CLIPS, {
    variables: { where: { show_on_club: { _eq: true } } },
    onSubscriptionData({ subscriptionData: { data } }) {
      if (data.clip_asset_user_club) {

        const formatedClips = data?.clip_asset_user_club.map((clipAsset) => ({
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

        setClips(formatedClips)

      }
    }
  });

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
      </Row>

      <FeatureClip_Modal
        title={modalTitle}
        playbackId={modalPlaybackId}
        show={modalFlag}
        handleClose={() => onCloseModal()}
      />
      <Row padding="10px 0 0 0">
        <Col item={24}>
          {loading ? (
            <ScrollingCarousel
              leftIcon={<SlideArrow position="left" />}
              rightIcon={<SlideArrow position="right" />}
            >
              {[1, 2, 3, 4, 5, 6].map((item: number) => {
                return (
                  <CardBody key={`game-day-view-key-${item}`}>
                    <MatchSkeleton />
                  </CardBody>
                );
              })}
            </ScrollingCarousel>
          ) : (
            <ScrollingCarousel
              leftIcon={<SlideArrow position="left" />}
              rightIcon={<SlideArrow position="right" />}
            >
              {clips?.map((item: FeaturedClip, index: number) => {
                return (
                  <CardBody key={`clips-card-` + index}>
                    <ThumbCard
                      {...item}
                      mode="Clip"
                      key={index}
                      handleClick={() =>
                        onClipClick(item.playbackId, item.title)
                      }
                    />
                  </CardBody>
                );
              })}
            </ScrollingCarousel>
          )}
        </Col>
      </Row>
    </ClipWrapper>
  );
};

export default ClipView;

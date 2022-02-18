import React from "react";
import { useState } from "react";
import { useSubscription } from "@apollo/client";
import { useRouter } from "hooks";
// import component
import { Col, Row } from "components/Layout";
import { ClipCard } from "components/Card";
import { Text } from "components/Text";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { useLinkItem } from "components/hoc";
//  import types
import { FeaturedClip } from "types/components/FeaturedClip";
//  import styled component
import { SlideArrow } from "components/Button/Button";
import { ClipWrapper, LinkWrapper } from "./clip.style";
import { CardBody } from "theme/global.state";
import ThumbCard from "components/Card/ThumbCard";
import { CLIPS } from "graphql/club";
import FeatureClip_Modal from "components/Modal/FeatureClip";

//  define the example data
// import backImage from "assets/images/home/gameday.png";
// import { IoIosArrowForward } from "react-icons/io";
// import { SeeAllWrapper } from "../GameDay/gameday.style";

const SeeAll = useLinkItem(LinkWrapper);

const ClipView: React.FC = (props: any) => {
  const { move } = useRouter();

  const onHandleSeeAll = () => {
    move("/club/match");
  };

  const onCloseModal = () => {
    setModalFlag(false);
    setModalPlaybackId("");
  };

  const onClipClick = (playbackId, title) => {
    setModalPlaybackId(playbackId);
    setModalTitle(title);
    setModalFlag(true);
  };

  const [modalFlag, setModalFlag] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalPlaybackId, setModalPlaybackId] = useState<string>();
  const [clipsData, setData] = useState([]);

  useSubscription(CLIPS.SUB_FEATURE_CLIPS, {
    onSubscriptionData({ subscriptionData: { data } }) {
      if (data.clip_asset_user_club) {
        const clips = data?.clip_asset_user_club.map((clipAsset) => ({
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
        }));

        setData(clips);
      }
    },
  });

  console.log(clipsData);
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
        {/* <Col item={24}>
          <SeeAllWrapper flexDirection="row-reverse">
            <SeeAll
              handleClick={onHandleSeeAll}
              title="See all"
              icon={<IoIosArrowForward />}
              iconDirection="row-reverse"
              alignVertical="center"
            />
          </SeeAllWrapper>
        </Col> */}
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
            {clipsData?.map((item: FeaturedClip, index: number) => {
              // console.log(item)
              return (
                <CardBody key={`clips-card-` + index}>
                  <ThumbCard
                    {...item}
                    mode="Clip"
                    key={index}
                    handleClick={() => onClipClick(item.playbackId, item.title)}
                  />
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

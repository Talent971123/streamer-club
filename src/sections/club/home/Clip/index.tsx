import React, { useEffect } from "react";
import { useState } from "react";
import { useSubscription } from "@apollo/client";
import { useRouter } from "hooks";
// import component
import { Col, Row } from "components/Layout";
import { Text } from "components/Text";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { useLinkItem } from "components/hoc";
import { MatchSkeleton } from "components/Skeleton";
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
import backImage from "assets/images/home/gameday.png";
import { IoIosArrowForward } from "react-icons/io";
import { SeeAllWrapper } from "../GameDay/gameday.style";

// const clipData: ClipProps[] = [
//   {
//     id: 1,
//     backgroundImage: img1,
//     title: "Elimination Finalsss - Colts Highlights",
//     content:
//       "Colts came out on top against Peel Thunder in last week’s Elimination Finals.",
//   },
//   {
//     id: 2,
//     backgroundImage: backImage,
//     title: "Elimination Finals - Colts Highlights",
//     content:
//       "Colts came out on top against Peel Thunder in last week’s Elimination Finals.",
//   },
//   {
//     id: 3,
//     backgroundImage: backImage,
//     title: "Elimination Finals - Colts Highlights",
//     content:
//       "Colts came out on top against Peel Thunder in last week’s Elimination Finals.",
//   },
//   {
//     id: 4,
//     backgroundImage: backImage,
//     title: "Elimination Finals - Colts Highlights",
//     content:
//       "Colts came out on top against Peel Thunder in last week’s Elimination Finals.",
//   },
//   {
//     id: 5,
//     backgroundImage: backImage,
//     title: "Elimination Finals - Colts Highlights",
//     content:
//       "Colts came out on top against Peel Thunder in last week’s Elimination Finals.",
//   },
// ];

const SeeAll = useLinkItem(LinkWrapper);

const ClipView: React.FC = (props: any) => {
  const { move } = useRouter();
  const [pack, setPack] = useState<any>([]);
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

  const { loading, data } = useSubscription(CLIPS.SUB_FEATURE_CLIPS, {
    variables: {
      where: { club_id: { _eq: props.clubId } },
    },
  });

  useEffect(() => {
    const clipsData = data?.clip_asset_user_club.map((clipAsset) => ({
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
    setPack(clipsData);
  }, [data]);

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
          {
            <ScrollingCarousel
              leftIcon={<SlideArrow position="left" />}
              rightIcon={<SlideArrow position="right" />}
            >
              {loading
                ? [1, 2, 3, 4, 5, 6].map((item: number) => {
                    return (
                      <CardBody key={`game-day-view-key-${item}`}>
                        <MatchSkeleton />
                      </CardBody>
                    );
                  })
                : pack?.map((item: FeaturedClip, index: number) => {
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
          }
        </Col>
      </Row>
    </ClipWrapper>
  );
};

export default ClipView;

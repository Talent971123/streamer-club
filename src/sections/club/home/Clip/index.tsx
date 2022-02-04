import React from "react";
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
//  import styled component
import {SlideArrow} from "components/Button/Button"
import { ClipWrapper, LinkWrapper } from "./clip.style";

//  define the example data
import backImage from "assets/images/home/gameday.png";

const data: ClipProps[] = [
  {
    id: 1,
    backgroundImage: backImage,
    title: "Elimination Finals - Colts Highlights",
    content:
      "Colts came out on top against Peel Thunder in last week’s Elimination Finals.",
  },
  {
    id: 2,
    backgroundImage: backImage,
    title: "Elimination Finals - Colts Highlights",
    content:
      "Colts came out on top against Peel Thunder in last week’s Elimination Finals.",
  },
  {
    id: 3,
    backgroundImage: backImage,
    title: "Elimination Finals - Colts Highlights",
    content:
      "Colts came out on top against Peel Thunder in last week’s Elimination Finals.",
  },
  {
    id: 4,
    backgroundImage: backImage,
    title: "Elimination Finals - Colts Highlights",
    content:
      "Colts came out on top against Peel Thunder in last week’s Elimination Finals.",
  },
  {
    id: 5,
    backgroundImage: backImage,
    title: "Elimination Finals - Colts Highlights",
    content:
      "Colts came out on top against Peel Thunder in last week’s Elimination Finals.",
  },
];

const SeeAll = useLinkItem(LinkWrapper);

const ClipView: React.FC = () => {
  const { move } = useRouter();
  const onHandleSeeAll = () => {
    move("/club/match");
  };

  return (
    <ClipWrapper>
      <Row alignItems="center" justifyContent="space-between">
        <Text fColor="white" fSize={20} fWeight={700}>
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
      <Row padding="10px 0 0 0">
        <Col item={24}>
          <ScrollingCarousel
            leftIcon={<SlideArrow position='left' />}
            rightIcon={<SlideArrow position='right' />}
          >
            {data.map((item: ClipProps, index: number) => {
              return <ClipCard {...item} key={index} />;
            })}
          </ScrollingCarousel>
        </Col>
      </Row>
    </ClipWrapper>
  );
};

export default ClipView;

import React from "react";

import { Row, Col } from "components/Layout";
import { Text } from "components/Text";
import Slider from "react-slick";
//  styled
import { GalleryWrapper, GalleryContent } from "./Gallery.style";
//  type
import { ClipProps } from "types/components/ClipCard";
// assets
import photo from "assets/images/player/photo.jpg";
import { ClipCard } from "components/Card";

const photos: ClipProps[] = [
  {
    backgroundImage: photo,
    mode: "photos",
  },
  {
    backgroundImage: photo,
    mode: "photos",
  },
  {
    backgroundImage: photo,
    mode: "photos",
  },
  {
    backgroundImage: photo,
    mode: "photos",
  },
  {
    backgroundImage: photo,
    mode: "photos",
  },
  {
    backgroundImage: photo,
    mode: "photos",
  },
  {
    backgroundImage: photo,
    mode: "photos",
  },
  {
    backgroundImage: photo,
    mode: "photos",
  },
  {
    backgroundImage: photo,
    mode: "photos",
  },
];

const videos: ClipProps[] = [
  {
    backgroundImage: photo,
    mode: "videos",
  },
  {
    backgroundImage: photo,
    mode: "videos",
  },
  {
    backgroundImage: photo,
    mode: "videos",
  },
  {
    backgroundImage: photo,
    mode: "videos",
  },
  {
    backgroundImage: photo,
    mode: "videos",
  },
  {
    backgroundImage: photo,
    mode: "videos",
  },
  {
    backgroundImage: photo,
    mode: "videos",
  },
  {
    backgroundImage: photo,
    mode: "videos",
  },
  {
    backgroundImage: photo,
    mode: "videos",
  },
];

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 3,
};

const GallerySection: React.FC = () => {
  return (
    <GalleryWrapper>
      <Row alignItems="flex-end" gap={50}>
        <Text fColor="white" fSize={22} fWeight={700}>
          {"Media Gallery"}
        </Text>
        <Text fColor="red.100">{"WAFL - Mens Division 1: Round 16"}</Text>
      </Row>
      <GalleryContent>
        <Row
          flexDirection="column"
          gap={5}
          alignItems="center"
          justifyContent="center"
        >
          <Col item={24}>
            <Text fColor="white" fSize={18} fWeight={700} mode="p">
              {"Photos"}
            </Text>
            <Row padding="10px 0 0 0">
              <Col item={24}>
                <Slider {...settings}>
                  {photos.map((item: ClipProps, index: number) => {
                    return <ClipCard {...item} key={index} />;
                  })}
                </Slider>
              </Col>
            </Row>
          </Col>
          <Col item={24}>
            <Col item={24}>
              <Text fColor="white" fSize={18} fWeight={700} mode="p">
                {"Videos"}
              </Text>
              <Row padding="10px 0 0 0">
                <Col item={24}>
                  <Slider {...settings}>
                    {videos.map((item: ClipProps, index: number) => {
                      return <ClipCard {...item} key={index} />;
                    })}
                  </Slider>
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>
      </GalleryContent>
    </GalleryWrapper>
  );
};

export default GallerySection;

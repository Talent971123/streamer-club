import React from "react";

import { Col, Row } from "components/Layout";

import { ProfileWrapper, ContentWrapper, ImageContent } from "./Intro.style";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Button } from "components/Button";
import { FiShare2 } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";

import player from "assets/images/player/player.png";

const IntroSection: React.FC = () => {
  return (
    <ProfileWrapper>
      <Row gap={20}>
        <Col item={4}>
          <ImageContent>
            <Image src={player} oFit="cover" width={185} height={185}></Image>
          </ImageContent>
        </Col>
        <Col item={20}>
          <Row alignItems="center" justifyContent="space-between">
            <Col>
              <Text fWeight={600} fSize={24}>
                {"Fraser McInnes"}
              </Text>
            </Col>
            <Col>
              <Row alignItems="center" gap={10}>
                <Text fSize={14}>{"121 Followers"}</Text>
                <Button bColor="warning" icon={<FiUserPlus />}>
                  {"Follow Player"}
                </Button>
                <Button bColor="primary" bSize="small" icon={<FiShare2 />}>
                  {"Share"}
                </Button>
              </Row>
            </Col>
          </Row>
          <ContentWrapper>
            <Text fSize={14}>
              {
                "Fraser McInnes is the captain of the Perth Demons in the Western Australia Football Leargue. McInnes joined the team in 2011, after graduating from Trinity College. Across his 136-game WAFL career, McInnes is a best and fairest winner at Perth from 2014 and 2016, and has been named to the WAFL team of the Year. 2021 was a record setting season for McInnes with over 700 marks, and 14.6 disposals averaged per game."
              }
            </Text>
          </ContentWrapper>
        </Col>
      </Row>
    </ProfileWrapper>
  );
};

export default IntroSection;

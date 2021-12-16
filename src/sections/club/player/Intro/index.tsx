import React, { useContext } from "react";

import { Col, Row } from "components/Layout";

import { ProfileWrapper, ContentWrapper, ImageContent } from "./Intro.style";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Button } from "components/Button";
import { FiShare2 } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";

import player from "assets/images/player/player.png";
import { PlayerContext } from "pages/club/[club_slug]/player/[player_slug]";

const IntroSection: React.FC = () => {

  const { player }: any = useContext(PlayerContext)

  return (
    <ProfileWrapper>
      <Row gap={20}>
        <Col item={4}>
          <ImageContent>
            <Image src={player.image} oFit="cover" width={185} height={185}></Image>
          </ImageContent>
        </Col>
        <Col item={20}>
          <Row alignItems="center" justifyContent="space-between">
            <Col>
              <Text fWeight={600} fSize={24}>
                {`${player.first_name} ${player.last_name}`}
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
              {player.bio}
            </Text>
          </ContentWrapper>
        </Col>
      </Row>
    </ProfileWrapper>
  );
};

export default IntroSection;

import React, { useContext } from "react";

import { Col, Row } from "components/Layout";

import { ProfileWrapper, ContentWrapper, ImageContent } from "./Intro.style";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Button } from "components/Button";
import { FiShare2 } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";

import { PlayerContext } from "pages/club/[club_slug]/player/[player_slug]";
import EditIcon from "assets/icon/edit";

const IntroSection: React.FC = () => {
  const { player }: any = useContext(PlayerContext);

  return (
    <ProfileWrapper>
      <Row gap={20}>
        <Col item={4}>
          <Row alignItems="flex-start">
            <ImageContent>
              <Image
                src={player.image}
                oFit="cover"
                width={185}
                height={185}
              ></Image>
            </ImageContent>
            <Button bColor="primary" icon={<EditIcon />} css={{border: "none"}} />
          </Row>
        </Col>
        <Col item={20}>
          <Row alignItems="center" justifyContent="space-between">
            <Col>
              <Row alignItems="flex-start" gap={2}>
                <Text fWeight={600} fSize={24}>
                  {`${player.first_name} ${player.last_name}`}
                </Text>
                <Button bColor="primary" icon={<EditIcon />} css={{border: "none"}} />
              </Row>
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
            <Row alignItems="center" justifyContent="space-between">
              {/* <Col> */}
              <Text fSize={14}>{player.bio}</Text>
              <Button bColor="primary" icon={<EditIcon />} css={{border: "none"}} />
              {/* </Col> */}
              
            </Row>
          </ContentWrapper>
        </Col>
      </Row>
    </ProfileWrapper>
  );
};

export default IntroSection;

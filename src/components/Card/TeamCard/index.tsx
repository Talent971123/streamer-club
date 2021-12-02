import React from "react";

// styled component
import {
  TeamCardWrapper,
  LiveWrapper,
  UserWrapper,
  Content,
  LayerWrapper,
} from "./TeamCard.styled";
import { Row, Col } from "components/Layout";
import { Image } from "components/Image";
import { Text } from "components/Text";
// import type
import { TeamCardProps } from "types/components/TeamCard";
//  import asssets
import { UserIcon } from "assets/icon";

const TeamCard: React.FC<TeamCardProps> = ({
  backgroundImage,
  description,
  title,
  users = 0,
}) => {
  return (
    <TeamCardWrapper>
      <Content>
        <Image src={backgroundImage} oFit="cover" mode="fill" />
        <Row
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-start"
          gap={10}
          padding="5px"
        >
          {users != 0 ? (
            <>
              <Col>
                <LiveWrapper>
                  <Text fColor="white" fSize={20} fWeight={600}>
                    {"LIVE"}
                  </Text>
                </LiveWrapper>
              </Col>
              <Col>
                <UserWrapper>
                  <Row alignItems="center" justifyContent="center" gap={5}>
                    <UserIcon />
                    <Text fColor="white" fSize={20} fWeight={500}>
                      {users}
                    </Text>
                  </Row>
                </UserWrapper>
              </Col>
            </>
          ) : null}
        </Row>
        <LayerWrapper>
          <Row flexDirection="column" padding="0px 10px">
            <Col item={24}>
              <Text fColor="white" fSize={18}>
                {title}
              </Text>
            </Col>
            <Col item={24}>
              <Text fColor="white" fSize={14}>
                {description}
              </Text>
            </Col>
          </Row>
        </LayerWrapper>
      </Content>
    </TeamCardWrapper>
  );
};

export default TeamCard;

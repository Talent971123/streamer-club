import React from "react";
// import component
import { Row, Col } from "components/Layout";
import { Image } from "components/Image";
import { Text } from "components/Text";
//  import types
import { ClipProps } from "types/components/ClipCard";
//  import styled component
import {
  ClipCardWrapper,
  ClipContent,
  ClipFooter,
  ClipCardTitle,
  ClipCardContent,
} from "./ClipCard.style";
//  import asssets
import DefaultPlayerImage from "assets/images/player/default-player-image.png";
const ClipCard: React.FC<ClipProps> = ({
  id,
  backgroundImage,
  content,
  title,
  mode = "clip",
  handleClick,
}) => {
  const onHandleClick = (id: number) => {
    handleClick && handleClick(id);
  };

  return (
    <ClipCardWrapper mode={mode} onClick={() => onHandleClick(id)}>
      <ClipContent mode={mode}>
        <Image
          src={backgroundImage || DefaultPlayerImage}
          oFit="cover"
          mode={mode === "teams" ? "fill" : "intrinsic"}
          width={
            ["photos", "videos", "player", "club"].includes(mode) ? 180 : 0
          }
          height={
            ["photos", "videos", "player", "club"].includes(mode) ? 180 : 0
          }
        />
      </ClipContent>

      <ClipFooter mode={mode}>
        <Row flexDirection="column">
          <Col item={24}>
            <ClipCardContent>
              {title}
            </ClipCardContent>
          </Col>
          <Col item={24}>
            <ClipCardTitle mode={mode}>
              {content}
            </ClipCardTitle>
          </Col>
        </Row>
      </ClipFooter>
      
    </ClipCardWrapper>
  );
};

export default ClipCard;

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
  PlayWrapper,
  ClipCardTitle,
} from "./ClipCard.style";
//  import asssets
import Play from "assets/images/home/play.png";
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
        {mode == "club" ? (
          <Image
            src={backgroundImage || DefaultPlayerImage}
            oFit="fill"
            width={160}
            height={175}
          />
        ) : (
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
        )}

        {(mode === "clip" || mode === "videos") && (
          <PlayWrapper>
            <Image src={Play} width={69} height={69} />
          </PlayWrapper>
        )}
      </ClipContent>

      {mode !== "photos" && mode !== "videos" && (
        <ClipFooter mode={mode}>
          <Row flexDirection="column">
            <Col item={24}>
              <Text
                fColor={
                  mode === "clip"
                    ? "gray.600"
                    : mode === "teams"
                    ? "white"
                    : "red.100"
                }
                fSize={mode === "clip" ? 0.875 : mode === "teams" ? 1 : 0.875}
                tAlign={mode === "clip" ? "left" : "center"}
                fWeight={700}
              >
                {title}
              </Text>
            </Col>
            <Col item={24}>
              <ClipCardTitle mode={mode}>
                <Text
                  fColor={
                    mode === "clip"
                      ? "white"
                      : mode === "teams"
                      ? "white"
                      : "white"
                  }
                  tAlign={mode === "clip" ? "left" : "center"}
                >
                  {content}
                </Text>
              </ClipCardTitle>
            </Col>
          </Row>
        </ClipFooter>
      )}
    </ClipCardWrapper>
  );
};

export default ClipCard;

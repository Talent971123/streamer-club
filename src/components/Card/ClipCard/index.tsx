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
} from "./ClipCard.style";
//  import asssets
import Play from "assets/images/home/play.png";
const ClipCard: React.FC<ClipProps> = ({
  backgroundImage,
  content,
  title,
  mode = "clip",
}) => {
  return (
    <ClipCardWrapper mode={mode}>
      <ClipContent mode={mode}>
        <Image src={backgroundImage} oFit="cover" />
        {mode === "clip" ? (
          <PlayWrapper>
            <Image src={Play} width={69} height={69} />
          </PlayWrapper>
        ) : null}
      </ClipContent>
      <ClipFooter>
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
              fSize={mode === "clip" ? 14 : mode === "teams" ? 16 : 14}
              tAlign={mode === "clip" ? "left" : "center"}
              fWeight={700}
            >
              {title}
            </Text>
          </Col>
          <Col item={24}>
            <Text
              fColor={
                mode === "clip"
                  ? "gray.600"
                  : mode === "teams"
                  ? "white"
                  : "gray.300"
              }
              tAlign={mode === "clip" ? "left" : "center"}
              fSize={mode === "clip" ? 12 : mode === "teams" ? 16 : 12}
            >
              {content}
            </Text>
          </Col>
        </Row>
      </ClipFooter>
    </ClipCardWrapper>
  );
};

export default ClipCard;

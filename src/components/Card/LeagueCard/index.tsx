import React from "react";
// import component
import { Row, Col } from "components/Layout";
import { Image } from "components/Image";
import { Text } from "components/Text";
//  import types
import { LeaguesProps } from "types/components/LeagueCard";
//  import styled component
import {
  LeagueCardWrapper,
  LeagueContent,
  LeagueFooter,
  PlayWrapper,
  LeagueCardTitle,
} from "./LeagueCard.style";
//  import asssets
import Play from "assets/images/home/play.png";
import DefaultPlayerImage from "assets/images/player/default-player-image.png";
const LeagueCard: React.FC<LeaguesProps> = ({
  id,
  backgroundImage,
  content,
  title,
  mode = "league",
  handleClick,
  isLeagueSelected = false,
  slug,
}) => {
  const onHandleClick = (id: string) => {
    handleClick && handleClick(id);
  };

  return (
    <LeagueCardWrapper mode={mode} isLeagueSelected={isLeagueSelected} onClick={() => onHandleClick(slug)}>
      <LeagueContent mode={mode}>
        {mode == "club" || mode == "league" ? (
          <Image
            src={backgroundImage || DefaultPlayerImage}
            oFit="fill"
            width={135}
            height={150}
          />
        ) : (
          <Image
            src={backgroundImage || DefaultPlayerImage}
            oFit="cover"
            mode={mode === "teams" ? "fill" : "intrinsic"}
            width={
              ["photos", "videos", "player", "club", "league"].includes(mode) ? 180 : 0
            }
            height={
              ["photos", "videos", "player", "club", "league"].includes(mode) ? 180 : 0
            }
          />
        )}

        {(mode === "clip" || mode === "videos") && (
          <PlayWrapper>
            <Image src={Play} width={69} height={69} />
          </PlayWrapper>
        )}
      </LeagueContent>

      {mode !== "photos" && mode !== "videos" && (
        <LeagueFooter mode={mode}>
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
              <LeagueCardTitle mode={mode}>
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
              </LeagueCardTitle>
            </Col>
          </Row>
        </LeagueFooter>
      )}
    </LeagueCardWrapper>
  );
};

export default LeagueCard;

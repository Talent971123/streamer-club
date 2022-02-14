import React from "react";
// import component
import { Row, Col } from "components/Layout";
import { FaRegUser } from "react-icons/fa";
import { Image } from "components/Image";
import { Text } from "components/Text";
// import type
import { GameCardProps } from "types/components/GameCard";
// styled component
import { CardWrapper, CardContent, CardFooter, LiveWrapper } from "theme/global.state";
import { UserWrapper, LeagueWrapper, ThumbCardImage, PlayWrapper } from "./ThumbCard.styled";
//  import asssets
import { UserIcon } from "assets/icon";
import Play from "assets/images/home/play.png";
import moment from "moment";

const ThumbCard: React.FC<GameCardProps> = ({
  id,
  backgroundImage,
  clubImage1,
  clubImage2,
  clubName1,
  clubName2,
  leagueImage,
  leagueDivisionName,
  leagueName,
  match_round = 1,
  date,
  progress,
  users = 0,
  mode = "Day",
  roundName,
  matchName, /** home/away */
  handleClick,
  isLive,
  title,
}) => {
  const onHandleClick = (id: number) => {
    handleClick && handleClick(id);
  };
  return (
    <CardWrapper onClick={() => onHandleClick(id)}>
      <CardContent>
        <Image src={backgroundImage} mode="fill" oFit="fill" zIndex={-1} />
        {mode == "Day" && isLive && (
          <LiveWrapper>
            <Text fColor="white" fSize={0.9} fWeight={600}>
              {"LIVE"}
            </Text>
          </LiveWrapper>
        )}
        {mode == "Day" && (
          <UserWrapper><FaRegUser />{users}</UserWrapper>
        )}


        {(mode == "Day") && (
          <Col item={24}>
            <Row>
              <ThumbCardImage>

                <Col>
                  <Image src={clubImage1} width={85} height={90} />
                </Col>

                <Col>
                  <Image src={clubImage2} width={85} height={90} />
                </Col>

              </ThumbCardImage>
            </Row>
          </Col>
        )}


        {mode === "Replay" && (
          <PlayWrapper>
            <Image src={Play} width={69} height={69} />
          </PlayWrapper>
        )}



        <CardFooter style={{ lineHeight: "1rem" }}>
          {(mode == "Day" || mode == "Replay") && (
            <>
              <Col item={24} style={{ display: "flex" }}>
                <Text fColor="white" fSize={0.875} tAlign="left" fWeight={800}>
                  {clubName1}
                </Text>
                &nbsp;
                <Text fColor="white" fSize={0.875} tAlign="center" fWeight={400} style={{ textOverflow: "unset", width: "1rem" }}>
                  vs
                </Text>
                &nbsp;
                <Text fColor="white" fSize={0.875} tAlign="right" fWeight={800}>
                  {clubName2}
                </Text>
              </Col>
              <Text fColor="white" fSize={0.875} tAlign="left" fWeight={400}>
                {matchName}
              </Text>

              <LeagueWrapper>

                <Image src={leagueImage} width={22} height={22} />

                <Text fColor="white" fSize={0.875} tAlign="left" fWeight={400} padding={'0px 0px 0px 5px'}>
                  {leagueName ? `League (${leagueName}) - ` : ""}
                  {roundName ? `${roundName}` : ""}
                </Text>
              </LeagueWrapper>

              <Text fColor="white" fSize={0.875} tAlign="left">
                {moment(date).format('LL hh:mmA ')}
              </Text>
            </>
          )}
          {title && (
            <Text fColor="white" fSize={1} fWeight={600}>
              {title}
            </Text>
          )}
        </CardFooter>
      </CardContent>
    </CardWrapper>
  )
};

export default ThumbCard;

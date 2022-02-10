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
import { UserWrapper } from "./ThumbCard.styled";
//  import asssets
import { UserIcon } from "assets/icon";
import Play from "assets/images/home/play.png";

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
  matchName,
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
        {mode == "Day" && isLive &&(
          <LiveWrapper>
            <Text fColor="white" fSize={0.9} fWeight={600}>
              {"LIVE"}
            </Text>
          </LiveWrapper>
        )}
        {mode == "Day" && (
          <UserWrapper><FaRegUser />{users}</UserWrapper>
        )}
        {(mode == "Day" || mode == "Replay")&& (
          <Col item={24} style={{display: 'flex', height: "100%"}}>
            <Row
              alignItems="center"
              justifyContent="space-between"
              padding="50px"            
            >
              <Col>
                <Image src={clubImage1} width={100} height={100} />
              </Col>
              {mode === "Replay" ? (
                <Col className="playwrapper">
                  <Image src={Play} width={69} height={69} />
                </Col>
              ) : null}
              <Col>
                <Image src={clubImage2} width={100} height={100} />
              </Col>
            </Row>
          </Col>
        )}
        <CardFooter>
        {(mode == "Day" || mode == "Replay") && (
          <>
            <Col item={24}>
              <Row alignItems="center" justifyContent="space-between">
                <Col item={11}>
                  <Text fColor="white" fSize={0.875} tAlign="left" fWeight={800}>
                    {clubName1}
                  </Text>
                </Col>
                <Col item={1}>
                  <Text fColor="white" fSize={0.875} tAlign="center" fWeight={400}>
                    vs
                  </Text>
                </Col>
                <Col item={11}>
                  <Text fColor="white" fSize={0.875} tAlign="right" fWeight={800}>
                    {clubName2}
                  </Text>
                </Col>
              </Row>
            </Col>
            <Text fColor="white" fSize={0.875} tAlign="left" fWeight={400}>
              {matchName + " "}
              {leagueName ? `(${leagueName})` : ""}
            </Text>
            <Text fColor="white" fSize={0.875} tAlign="left">
              {/* {date} */}
              Saturday, 15 January 12:00PM
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

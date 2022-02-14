import React, { useContext, useState } from "react";
import { Col, Row } from "components/Layout";
import { Text } from "components/Text";
import { themeGet } from "@styled-system/theme-get";
import { Border, CommentaryWrapper, ContentWrapper } from "./commentary.style";
import UndoIcon from "assets/icon/undo";
import { Button } from "components/Button";
import Slider from "react-slick";
import { Switch } from "components/Switch";
import { ScreenContext } from "hooks/context/ScreenContext";
import CloseIcon from "assets/icon/close";
import { DropdownContainer } from "./commentary.style";
import BackIcon from "assets/icon/back";
import { Input } from "components/Input";
import { StreamPageContext } from "hooks/context/StreamPageContext";

const Comments = [
  {
    type: "Goal",
    title: "Q2 - 06:18 (22:58)",
    name: "James Entwisle",
    statement:
      "An absolute bomber of a Goal once again. It will be hard for the opposition to claw back from this one",
    team: "Brisbane Heat",
  },
  {
    type: "Mark",
    title: "Q1 - 10:12 (15:45)",
    name: "James Entwisle",
    statement:
      "A super Mark once again. Proving once again why he was 2021's MVP of the League",
    team: "Brisbane Heat",
  },
  {
    type: "Mark",
    title: "Q1 - 10:12 (15:45)",
    name: "James Entwisle",
    statement: "",
    team: "Brisbane Heat",
  },
];

const Next: React.FC = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "50px",
      }}
      onClick={onClick}
    />
  );
};

const Before: React.FC = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "50px",
      }}
      onClick={onClick}
    />
  );
};

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 7,
  nextArrow: <Next />,
  prevArrow: <Before />,
};

const Scoring: any = [
  {
    type: "+1",
    title: "Behind - Home",
  },
  {
    type: "+6",
    title: "Goal - Home",
  },
  {
    type: "+1",
    title: "Behind - Away",
  },
  {
    type: "+6",
    title: "Goal - Away",
  },
  {
    type: <UndoIcon />,
    title: "Undo last action",
  },
];

const ScoreTypes = [
  {
    type: "Mark",
    value: "mark",
  },
  {
    type: "Contested Mark",
    value: "contesteMark",
  },
  {
    type: "Free Kick",
    value: "freeKick",
  },
  {
    type: "Bounce",
    value: "bounce",
  },
  {
    type: "Handball",
    value: "handball",
  },
  {
    type: "Kick",
    value: "kick",
  },
  {
    type: "Hitout",
    value: "hitout",
  },
  {
    type: "Turnover",
    value: "turnover",
  },
  {
    type: "Tackle",
    value: "tackle",
  },
  {
    type: "Clearance",
    value: "clearance",
  },
];

const CommentaryView: React.FC = () => {
  const { Option } = DropdownContainer;
  const { show, setEventShow } = useContext(ScreenContext);
  const { home_name, home_players, away_players, away_name }: any = useContext(StreamPageContext);
  const [keymoment, showKeymoment] = useState<boolean>(false);
  const [scoring, setScoring] = useState<string>("scoring");
  const [scoreOption, setScoreOption] = useState<string>("");
  const [teamPlayers, setTeamPlayers] = useState<any>([]);
  const [defaultTeam, setDefaultTeam] = useState<string>("");
  const options = [
    {
      title: "Scoring",
      value: "scoring",
    },
    {
      title: "Key Moments",
      value: "keyMoments",
    },
  ];

  const onChange = (value: any) => {
    setScoring(value.target.value);
  };

  const handleScore = (value: any) => {
    console.log(value, "yehey")
    if(value === "Goal - Home" || value === "Behind - Home"){
      setDefaultTeam(home_name);
      setTeamPlayers(home_players);
    } else if (value === "Goal - Away" || value === "Behind - Away"){
      setDefaultTeam(away_name);
      setTeamPlayers(away_players);
    } else {
      setDefaultTeam("");
      setTeamPlayers([]);
    }
    showKeymoment(true);
  };

  const handleTeamChange = (value: any) => {
    if (value === "home") {
      setTeamPlayers(home_players);
    } else {
      setTeamPlayers(away_players);
    }
  };

  const handlePlayersChange = (value: any) => {
    //TODO - discussion ongoing
  };

  const closeEventButton = () => {
    setEventShow(false);
    setDefaultTeam("");
    setTeamPlayers([]);
    setScoring("scoring");

  };
  return (
    <CommentaryWrapper>
      <ContentWrapper>
        <Row
          flexDirection="column"
          justifyContent="center"
          gap={16}
          display="flex"
        >
          {show && (
            <Row
              flexDirection="column"
              alignItems="center"
              justifyContent="space-around"
              css={`
                background-color: ${themeGet("colors.gray.900")};
                padding-right: 10px;
              `}
              gap={20}
            >
              {!keymoment && (
                <>
                  <Row>
                    <Col item={24}>
                      <Row
                        alignItems="center"
                        justifyContent="center"
                        css={{ marginTop: 15, height: 30 }}
                      >
                        <Switch
                          data={options}
                          onChange={onChange}
                          defaultValue={options[0].value}
                        />
                      </Row>
                    </Col>
                    <Col item={2}>
                    <Row alignItems="flex-end" justifyContent="flex-end" css={{ marginTop: 15 }}>
                      <Button
                        bColor="primary"
                        css={{ border: "none" }}
                        icon={<CloseIcon />}
                        onClick={closeEventButton}
                      />
                    </Row>
                    </Col>
                  </Row>
                  {scoring === "scoring" && (
                    <Row
                      alignItems="center"
                      justifyContent="center"
                      gap={50}
                      css={{ marginBottom: 20 }}
                    >
                      {Scoring.map((item: any, index: number) => {
                        return (
                          <Col key={index}>
                            <Button
                              fColor="gray.100"
                              css={`
                                height: 90px;
                                width: 150px;
                                background-color: #4a4949;
                                border: 0px;
                              `}
                              onClick={() => handleScore(item.title)}
                            >
                              <Text fSize={1.25} fWeight={700}>
                                {item.type}
                              </Text>
                              <Text fSize={0.75}>{item.title}</Text>
                            </Button>
                          </Col>
                        );
                      })}
                    </Row>
                  )}
                  {scoring === "keyMoments" && (
                    <Row
                      css={{
                        marginBottom: 20,
                        paddingRight: 18,
                        paddingLeft: 28,
                      }}
                    >
                      <Col item={24}>
                        <Slider {...settings}>
                          {ScoreTypes.map((item: any, index: number) => {
                            return (
                              <Col key={index}>
                                <Button
                                  fColor="gray.100"
                                  css={`
                                    height: 90px;
                                    width: 150px;
                                    background-color: #4a4949;
                                    border: 0px;
                                    margin-left: 60px;
                                  `}
                                  onClick={() => handleScore(item.value)}
                                >
                                  <Text fSize={1}>{item.type}</Text>
                                </Button>
                              </Col>
                            );
                          })}
                        </Slider>
                      </Col>
                    </Row>
                  )}
                </>
              )}
              {keymoment && (
                <Row
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  gap={30}
                >
                  <Col item={24}>
                    <Row gap={50} css={{ marginTop: 20 }}>
                      <Col>
                        <Button
                          bColor="primary"
                          css={{ border: "none" }}
                          icon={<BackIcon />}
                          onClick={() => {showKeymoment(false), setScoring("scoring")}}
                        />
                      </Col>
                      <Col item={6}>
                        <DropdownContainer
                          placeholder={"Select Team (mandatory)"}
                          onChange={(e: any) => handleTeamChange(e)}
                          defaultValue={defaultTeam ? defaultTeam : null}
                        >
                          <Option value={"home"} key={1}>
                              {home_name}
                          </Option>
                          <Option value={"away"} key={2}>
                            {away_name}
                          </Option>
                        </DropdownContainer>
                      </Col>
                      <Col item={6}>
                        <DropdownContainer
                          placeholder="Select Player (non-mandatory)"
                          onChange={(e: any) => handlePlayersChange(e)}
                        >
                          {teamPlayers &&
                            teamPlayers.map((item: any, index: number) => {
                              return (
                                <Option value={item.id} key={index}>
                                  {`${item?.user?.first_name} ${item?.user?.last_name}`}
                                </Option>
                              );
                            })}
                        </DropdownContainer>
                      </Col>
                      <Col item={6}>
                        <DropdownContainer
                          placeholder="Adjust Timestamp (non-mandatory)"
                          onChange={(e: any) => console.log(e)}
                        >
                          <Option value={"10"} key={1}>
                            {"10:00"}
                          </Option>
                          <Option value={"11"} key={2}>
                            {"11:00"}
                          </Option>
                        </DropdownContainer>
                      </Col>
                      <Col item={6}>
                        <DropdownContainer
                          placeholder="Confirm Event (mandatory)"
                          onChange={(e: any) => console.log(e)}
                        >
                          <Option value={"test1"} key={1}>
                            {"Test 1"}
                          </Option>
                          <Option value={"test2"} key={2}>
                            {"Test 2"}
                          </Option>
                        </DropdownContainer>
                      </Col>
                      <Col>
                        <Button
                          bColor="primary"
                          css={{ border: "none" }}
                          icon={<CloseIcon />}
                          onClick={() => showKeymoment(false)}
                        />
                      </Col>
                    </Row>
                  </Col>

                  <Col item={24}>
                    <Row gap={20} css={{ marginBottom: 20, marginLeft: 90 }}>
                      <Col item={24}>
                        <Input
                          css={{ borderRadius: 8 }}
                          isize="medium"
                          ifont="normal"
                          placeholder="Add Comment to be added to Commentary Stream... (non-mandatory)"
                        />
                      </Col>
                      <Col item={4}>
                        <Button
                          bColor="warning"
                          bSize="normal"
                          css={{ borderRadius: 8, height: 44, width: "60%" }}
                        >
                          {"Submit"}
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              )}
            </Row>
          )}
          { !show &&
            Comments.map((item: any, index: number) => {
              return (
                <Row
                  justifyContent="center"
                  alignItems="center"
                  key={index}
                  css={`
                    background-color: ${themeGet("colors.gray.900")};
                  `}
                >
                  <Border mode={index} />
                  <Col item={1}>
                    <Row alignItems="center" justifyContent="center">
                      <Text
                        fColor="white"
                        fSize={1}
                        fWeight={700}
                        css={{ paddingBottom: 24 }}
                      >
                        {item.type}
                      </Text>
                    </Row>
                  </Col>
                  <Col item={24}>
                    <Row>
                      <Text fColor="red.100" fSize={0.75} fWeight={700}>
                        {item.title}
                      </Text>
                    </Row>
                    <Row>
                      <Text fColor="white" fSize={1} fWeight={200}>
                        {item.statement}
                      </Text>
                    </Row>
                    <Row>
                      <Text
                        fColor="red.100"
                        fSize={0.75}
                        fWeight={200}
                        css={{ paddingTop: 24 }}
                      >
                        {`${item.name} - ${item.team}`}
                      </Text>
                    </Row>
                  </Col>
                </Row>
              );
            })}
        </Row>
      </ContentWrapper>
    </CommentaryWrapper>
  );
};

export default CommentaryView;

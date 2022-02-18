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
import { DropdownContainer, SectionWrapper } from "./commentary.style";
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
    type: <UndoIcon iSize={{ x: 15, y: 15 }} />,
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
  const { home_name, home_players, away_players, away_name }: any =
    useContext(StreamPageContext);
  const [keymoment, showKeymoment] = useState<boolean>(false);
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
    setEventShow(value.target.value);
  };

  const handleScore = (value: any) => {
    console.log(value, "yehey");
    if (value === "Goal - Home" || value === "Behind - Home") {
      setDefaultTeam(home_name);
      setTeamPlayers(home_players);
    } else if (value === "Goal - Away" || value === "Behind - Away") {
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
    setEventShow("");
    setDefaultTeam("");
    setTeamPlayers([]);
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
                  <Row responsive={{ 480: { display: "none" } }}>
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
                      <Row
                        alignItems="flex-end"
                        justifyContent="flex-end"
                        css={{ marginTop: 15 }}
                      >
                        <Button
                          bColor="primary"
                          css={{ border: "none" }}
                          icon={<CloseIcon />}
                          onClick={closeEventButton}
                        />
                      </Row>
                    </Col>
                  </Row>
                  {show === "scoring" && (
                    <Row
                      gap={12}
                      justifyContent="center"
                      css={{
                        whiteSpace: "nowrap",
                        overflowX: "auto",
                      }}
                      responsive={{
                        834: {
                          justifyContent: "flex-start",
                        },
                      }}
                    >
                      {Scoring.map((item: any, index: number) => {
                        return (
                          <Button
                            key={index}
                            fColor="gray.100"
                            css={`
                              width: 100px;
                              height: 50px;
                              background-color: #4a4949;
                              border: 0px;
                              border-radius: 8px;
                            `}
                            onClick={() => console.log(item.title)}
                          >
                            <Text fSize={1} fWeight={700}>
                              {item.type}
                            </Text>
                            <Text fSize={0.75}>{item.title}</Text>
                          </Button>
                        );
                      })}
                    </Row>
                  )}
                  {show === "keyMoments" && (
                    <Row
                      gap={12}
                      justifyContent="center"
                      css={{
                        whiteSpace: "nowrap",
                        overflowX: "auto",
                      }}
                      responsive={{
                        834: {
                          justifyContent: "flex-start",
                        },
                      }}
                    >
                      {/* <Col> */}
                      {/* <Slider {...settings}> */}
                      {ScoreTypes.map((item: any, index: number) => {
                        return (
                          <Button
                            key={index}
                            fColor="gray.100"
                            css={`
                              min-width: 100px;
                              height: 50px;
                              background-color: #4a4949;
                              border: 0px;
                              border-radius: 8px;
                              marginleft: 6px;
                              marginright: 6px;
                            `}
                            onClick={() => handleScore(item.value)}
                          >
                            <Text fSize={1}>{item.type}</Text>
                          </Button>
                        );
                      })}
                      {/* </Slider> */}
                      {/* </Col> */}
                    </Row>
                  )}
                </>
              )}
              {keymoment && (
                <Row
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  gap={10}
                >
                  <Col
                    item={6}
                    responsive={{
                      480: {
                        item: 24,
                      },
                    }}
                  >
                    <Row gap={50} css={{ marginTop: 20 }}>
                      {/* <Col>
                        <Button
                          bColor="primary"
                          css={{ border: "none" }}
                          icon={<BackIcon />}
                          onClick={() => {showKeymoment(false), setScoring("scoring")}}
                        />
                      </Col> */}
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
                      <Col
                        item={6}
                        responsive={{
                          480: {
                            item: 24,
                          },
                        }}
                      >
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

                      <Col
                        item={6}
                        responsive={{
                          480: {
                            item: 24,
                          },
                        }}
                      >
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
                      <Col
                        item={6}
                        responsive={{
                          480: {
                            item: 24,
                          },
                        }}
                      >
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
                    </Row>
                  </Col>

                  <Col item={24}>
                    <Row
                      flexDirection="row"
                      alignItems="center"
                      justifyContent="center"
                      css={{
                        marginBottom: 20,

                        marginRight: 10,
                      }}
                      responsive={{
                        480: {
                          flexDirection: "column",
                        },
                      }}
                    >
                      <Col item={24}>
                        <Input
                          css={{ borderRadius: 8 }}
                          isize="medium"
                          ifont="normal"
                          placeholder="Add Comment to be added to Commentary Stream... (non-mandatory)"
                        />
                      </Col>
                      <Row
                        justifyContent="flex-end"
                        responsive={{
                          480: {
                            padding: "10px",
                          },
                        }}
                      >
                        <Button
                          bColor="primary"
                          bSize="normal"
                          css={{
                            borderRadius: 12,
                            height: 44,
                            width: "30%",
                          }}
                        >
                          {"Cancel"}
                        </Button>

                        <Button
                          bColor="warning"
                          bSize="normal"
                          css={{
                            borderRadius: 12,
                            height: 44,
                            width: "30%",
                            marginLeft: 10,
                          }}
                        >
                          {"Submit"}
                        </Button>
                      </Row>
                    </Row>
                  </Col>
                </Row>
              )}
            </Row>
          )}
          {!show && (
            <>
              {Comments.map((item: any, index: number) => (
                <Row
                  key={index}
                  css={`
                    background-color: ${themeGet("colors.gray.900")};
                    min-height: 120px;
                  `}
                >
                  <Border mode={index} />
                  <Row
                    responsive={{
                      480: { flexDirection: "column" },
                    }}
                  >
                    {/* <SectionWrapper>
                          <Text
                            fColor="white"
                            fSize={1}
                            fWeight={700}
                            css={{ marginLeft: 13 }}
                          >
                            {item.type}
                          </Text>
                        </SectionWrapper> */}
                    <SectionWrapper>
                      <Text
                        fColor="white"
                        fSize={1}
                        fWeight={700}
                        css={{ marginLeft: 13 }}
                      >
                        {item.name}
                      </Text>
                    </SectionWrapper>
                    <SectionWrapper>
                      <Text
                        fColor="white"
                        fSize={0.75}
                        fWeight={700}
                        css={{ marginLeft: 13 }}
                      >
                        {item.title}
                      </Text>
                      <Text
                        fColor="white"
                        fSize={1}
                        fWeight={200}
                        css={{ marginTop: 5, marginLeft: 13 }}
                      >
                        {item.statement}
                      </Text>
                      <Text
                        fColor="red.100"
                        fSize={0.75}
                        fWeight={200}
                        css={{ marginTop: 5, marginLeft: 13 }}
                      >
                        {`${item.name} - ${item.team}`}
                      </Text>
                    </SectionWrapper>
                  </Row>
                </Row>
              ))}
            </>
          )}
        </Row>
      </ContentWrapper>
    </CommentaryWrapper>
  );
};

export default CommentaryView;

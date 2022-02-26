import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "components/Layout";
import { Text } from "components/Text";
import { themeGet } from "@styled-system/theme-get";
import {
  Border,
  CommentaryWrapper,
  ContentWrapper,
  StyledForm,
  StyledFormItem,
  StyledTimePicker,
} from "./commentary.style";
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
import moment from "moment";
import { Form } from "antd";
import { useLazyQuery, useMutation, useQuery, useSubscription } from "@apollo/client";
import { mutate, query } from "graphql/stream";
import { toast } from "react-toastify";
import subscriptions from "graphql/stream/subscriptions";
import { useUser } from "@auth0/nextjs-auth0";
import {useMediaQuery} from "react-responsive";
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
    value: "Contested Mark",
  },
  {
    type: "Free Kick",
    value: "Free Kick",
  },
  {
    type: "Bounce",
    value: "Bounce",
  },
  {
    type: "Handball",
    value: "Handball",
  },
  {
    type: "Kick",
    value: "Kick",
  },
  {
    type: "Hitout",
    value: "Hitout",
  },
  {
    type: "Turnover",
    value: "Turnover",
  },
  {
    type: "Tackle",
    value: "Tackle",
  },
  {
    type: "Clearance",
    value: "Clearance",
  },
];

const CommentaryView: React.FC = () => {
  const { Option } = DropdownContainer;
  const { show, setEventShow } = useContext(ScreenContext);
  const { home_id, home_name, home_players, away_id, away_players, away_name, match_id}: any =
    useContext(StreamPageContext);
  const [keymoment, showKeymoment] = useState<boolean>(false);
  const [scoreOption, setScoreOption] = useState<boolean>(false);
  const [eventOption, setEventOption] = useState<string>("");
  const [teamPlayers, setTeamPlayers] = useState<any>([]);
  const [defaultTeam, setDefaultTeam] = useState<string>("");
  const [comments, setComments] = useState<any>(null);
  const [eventTime, setEventTime] = useState<any>(null);
  const [form] = Form.useForm();
  
  const mobileView = useMediaQuery({query: '(max-width: 480px)'})
  const [addCommentaryEvent] = useMutation(mutate.ADD_COMMENTARY, {
    onCompleted() {
      toast.success("Added commentary event");
      form.resetFields();
      setEventShow("");
      setDefaultTeam("");
      setTeamPlayers([]);
    },
    onError(e){
      toast.error("Error while adding event"+e);
    },
  });

  const [addScore] = useMutation(mutate.ADD_SCORE, {
    onError(e){
      toast.error("Error while adding score"+e);
    }
  })

  const {data: eventCollections} = useQuery(query.GET_EVENT_COLLECTIONS);
  
  useSubscription(subscriptions.GET_COMMENTS, {
    variables: {
      match_id,
    },
    onSubscriptionData({subscriptionData: {data}}){
      data && setComments(data.events);
    },
  });

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
    if (value === "Goal - Home" || value === "Behind - Home") {
      setDefaultTeam(home_name);
      setTeamPlayers(home_players.filter((a) => a.user !== null));
      if (value === "Goal - Home") {
        setEventOption(`+6 ${value}`);
      }
      if (value === "Behind - Home") {
        setEventOption(`+1 ${value}`);
      }
    } else if (value === "Goal - Away" || value === "Behind - Away") {
      setDefaultTeam(away_name);
      setTeamPlayers(away_players.filter((a) => a.user !== null));
      if (value === "Goal - Away") {
        setEventOption(`+6 ${value}`);
      }
      if (value === "Behind - Away") {
        setEventOption(`+1 ${value}`);
      }
    } else {
      setDefaultTeam("");
      setTeamPlayers([]);
      const filterKeyMoments = ScoreTypes.filter((a) => a.value === value);
      setEventOption(filterKeyMoments[0].type ?? "");
    }
    showKeymoment(true); };
  
  const handleTeamChange = (value: any) => {
    if (value === "home") {
      setTeamPlayers(home_players.filter((a) => a.user !== null));
    } else {
      setTeamPlayers(away_players.filter((a) => a.user !== null));
    }
  };

  const closeEventButton = () => {
    setEventShow("");
    setDefaultTeam("");
    setTeamPlayers([]);
    form.resetFields();
  };
  
  const onFinish = async(value: any) => {
    const formatEvent = value.event.includes('Behind') ? "Behind" : value.event.includes('Goal') ? "Goal" : value.event; 
    const formatTeam = value.event.includes('Home') ? "Home" : value.event.includes('Away') ? "Away" : null;
    const filterEvent = eventCollections.event_collections.filter((item:any) => item.event_name === formatEvent);

    if(formatEvent === "Behind" || formatEvent === "Goal"){
      await addScore({
        variables: {
          objects: {
            match_id,
            h_score_1: formatEvent === "Goal" && formatTeam === "Home" ? 1 : 0,
            h_score_2: formatEvent === "Behind" && formatTeam === "Home" ? 1 : 0,
            h_score_final: computeFinal(
              formatEvent === "Goal" && formatTeam === "Home" ? 1 : 0,
              formatEvent === "Behind" && formatTeam === "Home" ? 1 : 0,
            ),
            a_score_1: formatEvent === "Goal" && formatTeam === "Away" ? 1 : 0,
            a_score_2: formatEvent === "Behind" && formatTeam === "Away" ? 1 : 0,
            a_score_final: computeFinal(
              formatEvent === "Goal" && formatTeam === "Away" ? 1 : 0,
              formatEvent === "Behind" && formatTeam === "Away" ? 1 : 0,
            ),
            video_time: eventTime,
          }
        }
      });
    }

    await addCommentaryEvent({
      variables: {
        objects:{
          event_id: filterEvent[0]?.id,
          match_id,
          player_id: value.player,
          team_id: value.team === home_name ? home_id : away_id,
          video_time: eventTime, 
          comment: value?.comment,
        }
      }
    });

    showKeymoment(false);
  };

  const computeFinal = (goal: number, behind: number) => {
    let total = (goal * 6) + behind;
    return total;
  }

  const eventOptionCloseButton = () => {
    setEventShow("scoring")
    showKeymoment(false);
  }

  useEffect(() => {
    if(keymoment === false){
      setDefaultTeam("");
      setTeamPlayers([]);
      form.resetFields();
    }
  }, [keymoment])

  useEffect(() => {
    if(typeof window !== 'undefined'){
      const video = document.getElementById("bitmovinplayer-video-player-container") as HTMLVideoElement | null;
      var s:any = video?.currentTime ? video?.currentTime : 0;
      var sec = s.toString().split('.');
      setEventTime(sec[0]);
    }
  }, [eventTime, keymoment, show]);

  const seekPlayerTimer = (time: number) => {
    // TODO - Add callback event to seek player time
    // if(typeof window !== 'undefined'){
    //   const video = document.getElementById("bitmovinplayer-video-player-container") as HTMLVideoElement | null;
    //   video?.fastSeek && video?.fastSeek(time);
    // }
  }

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
                              margin: 0 0 10px 0;
                            `}
                            onClick={() => handleScore(item.title)}
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
                              margin: 0 6px 10px 6px;
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
                <StyledForm
                    name="commentary"
                    form={form}
                    onFinish={onFinish}
                  >
                <Row
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  gap={10}
                >

                  <Col item={24}>
                    <Row
                      gap={50}
                      css={{ marginTop: 20 }}
                      responsive={{
                        480: {
                          flexDirection: "column",
                          gap: 0,
                        },
                        834: {
                          gap: 10,
                        }, 
                        1024: {
                          gap: 8,
                        },
                      }}
                    >
                     {!mobileView && <Col>
                        <Button
                          bColor="primary"
                          css={{ border: "none" }}
                          icon={<BackIcon />}
                          onClick={eventOptionCloseButton}
                        />
                      </Col>}
                      <Col
                        item={6}
                        responsive={{
                          480: {
                            item: 24,
                          },
                        }}
                      >
                        <StyledFormItem name={"team"} required initialValue={defaultTeam ? defaultTeam : null}>
                        <DropdownContainer
                          placeholder={"Select Team (mandatory)"}
                          onChange={(e: any) => handleTeamChange(e)}
                        >
                          <Option value={"home"} key={1}>
                            {home_name}
                          </Option>
                          <Option value={"away"} key={2}>
                            {away_name}
                          </Option>
                        </DropdownContainer>
                        </StyledFormItem>
                      </Col>
                      <Col
                        item={6}
                        responsive={{
                          480: {
                            item: 24,
                          },
                        }}
                        >
                        <StyledFormItem name={"player"} required>
                        <DropdownContainer placeholder="Select Player (non-mandatory)">
                          {teamPlayers &&
                            teamPlayers.map((item: any, index: number) => {
                              return (
                                <Option value={item.id} key={index}>
                                  {`${item?.user?.first_name} ${item?.user?.last_name}`}
                                </Option>
                              );
                            })}
                        </DropdownContainer>
                        </StyledFormItem>
                      </Col>
                      <Col
                        item={6}
                        responsive={{
                          480: {
                            item: 24,
                          },
                        }}
                      >
                        <StyledFormItem name={"timestamp"} required initialValue={moment.utc(eventTime*1000)}>
                        <StyledTimePicker 
                          placeholder="Adjust Timestamp (non-mandatory)"
                          format={'HH:mm:ss'}
                        />
                        </StyledFormItem>
                      </Col>
                      <Col
                        item={6}
                        responsive={{
                          480: {
                            item: 24,
                          },
                        }}
                      >
                        <StyledFormItem name={"event"} required initialValue={eventOption ? eventOption : null}>
                        <DropdownContainer placeholder="Confirm Event (mandatory)">
                          {show === "scoring"
                            ? Scoring.map((item: any, index: number) => {
                                if (index !== 4) {
                                  return (
                                    <Option value={item.title} key={index}>
                                      {`${item.type} ${item.title}`}
                                    </Option>
                                  );
                                }
                              })
                            : ScoreTypes.map((item: any, index: number) => {
                                return (
                                  <Option value={item.value} key={index}>
                                    {item.type}
                                  </Option>
                                );
                              })}
                        </DropdownContainer>
                        </StyledFormItem>
                      </Col>
                      {!mobileView && <Col>
                        <Button
                          bColor="primary"
                          css={{ border: "none" }}
                          icon={<CloseIcon />}
                          onClick={eventOptionCloseButton}
                        />
                      </Col>}
                    </Row>
                  </Col>
                  <Col item={24}>
                    <Row
                      padding="0 0 0 90px"
                      flexDirection="row"
                      alignItems="center"
                      justifyContent="center"
                      css={{
                        marginBottom: 20,
                      }}
                      responsive={{
                        480: {
                          flexDirection: "column",
                          padding: "0 0 0 5px",
                        },
                        834: {
                          padding: "0 0 0 50px",
                        },
                        1024: {
                          padding: "0 0 0 50px",
                        },
                      }}
                    >
                      <Col
                        item={18}
                        responsive={{
                          480: {
                            item: 24,
                          },
                        }}
                      >
                        <StyledFormItem name={"comment"}>
                        <Input
                          css={{ borderRadius: 8 }}
                          isize="medium"
                          ifont="normal"
                          placeholder="Add Comment to be added to Commentary Stream... (non-mandatory)"
                        />
                        </StyledFormItem>
                      </Col>
                      <Col
                        item={6}
                        responsive={{
                          480: {
                            item: 24,
                          },
                        }}
                      >
                        <Row
                          justifyContent="center"
                          responsive={{
                            480: {
                              padding: "10px 0 10px 10px",
                              alignItems: "flex-end",
                              justifyContent: "flex-end",
                              gap: 10,
                            },
                          }}
                        >
                          {mobileView && <Button
                            bColor="primary"
                            css={{
                              borderRadius: 12,
                              height: mobileView ? 36 : 44,
                              width: "30%",
                              border: "1px solid white",
                            }}
                            onClick={() => showKeymoment(false)}
                          >
                            {"Cancel"}
                          </Button> }
                          <Button
                            bColor="warning"
                            css={{
                              borderRadius: 12,
                              height: mobileView ? 36 : 44,
                              width: mobileView ? "30%" : "90%",
                            }}
                            type="submit"
                          >
                            {"Submit"}
                          </Button>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                </StyledForm>
              )}
            </Row>
          )}
          {!show && (
            <>
              {comments &&
              comments.map((item: any, index: number) => (
                <Row
                  key={index}
                  css={`
                    background-color: ${themeGet("colors.gray.900")};
                    min-height: 120px;
                  `}
                >
                  <Border mode={item?.event_collection?.event_name} />
                  <Row
                    responsive={{
                      480: { flexDirection: "column" },
                    }}
                  >
                    <SectionWrapper>
                      <Text
                        fColor="white"
                        fSize={1}
                        fWeight={700}
                        css={{ marginLeft: 13 }}
                      >
                        {item?.event_collection?.event_name ?? ''}
                      </Text>
                    </SectionWrapper>
                    <SectionWrapper>
                      <Text
                        fColor="red.100"
                        fSize={0.75}
                        fWeight={700}
                        css={{ marginLeft: 13, cursor: "pointer" }}
                        onClick={() => seekPlayerTimer(item?.video_time)}
                      >
                        {`${moment.utc(item?.video_time * 1000).format('HH:mm:ss')}`}
                      </Text>
                      <Text
                        fColor="white"
                        fSize={1}
                        fWeight={200}
                        css={{ marginTop: 5, marginLeft: 13 }}
                      >
                        {item?.comment}
                      </Text>
                      <Text
                        fColor="red.100"
                        fSize={0.75}
                        fWeight={200}
                        css={{ marginTop: 5, marginLeft: 13 }}
                      >
                        {`${item?.players_detail?.user?.first_name ?? ''} ${item?.players_detail?.user?.last_name ?? ''} - ${item?.team?.club?.display_name}`}
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

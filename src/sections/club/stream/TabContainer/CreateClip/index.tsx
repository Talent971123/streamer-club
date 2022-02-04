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

const Comments = [
  {
    type: "OUT!",
    title: "Over 41.2",
    name: "James Entwisle",
    statement:
      " is clean bowled by Martin Wells. Never looked comfortable and he'll be relieved to be walking back to the pavillion.",
    updated: "- Updated by @AdrianCasey",
  },
  {
    type: "FOUR",
    title: "Over 40.2",
    name: "James Entwisle",
    statement:
      " gets a nice healthy edge over a packed slip cordon and the balls races away to boundary for 4.",
    updated: "- Updated by @AdrianCasey",
  },
  {
    type: "SIX",
    title: "Over 39.5",
    name: "Martin Wells",
    statement:
      " drops it in short and it's despatched by @AdrianCasey right over the fence and on to the road for 6.",
    updated: "- Updated by @RealScorer",
  },
  {
    type: "50",
    title: "Over 39.4",
    name: "Adrian Casey",
    statement:
      " cover drives for a quick 2 and that brings up the 50. What a knock!",
    updated: "- Updated by @RealScorer",
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

const CreateClipView: React.FC = () => {
  const { Option } = DropdownContainer;
  const { createClip, setCreateClipShow } = useContext(ScreenContext);
  const [keymoment, showKeymoment] = useState<boolean>(false);
  const [scoring, setScoring] = useState<string>("scoring");
  const [scoreOption, setScoreOption] = useState<string>("");
  const options = [
    {
      title: "Scoring",
      value: "scoring",
      // selectedBackgroundColor: "#0097e6",
    },
    {
      title: "Key Moments",
      value: "keyMoments",
      // selectedBackgroundColor: "#0097e6",
    },
  ];

  const onChange = (value: any) => {
    setScoring(value.target.value);
  };

  const handleScore = (value: any) => {
    setScoreOption(value);
    showKeymoment(true);
  };

  const closeEventButton = () => {
    setCreateClipShow(false);
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
          {createClip && (
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
              <Button
                fColor="gray.100"
                css={`
                  height: 90px;
                  width: 150px;
                  background-color: #4a4949;
                  border: 0px;
                `}
              >
                <Text fSize={20} fWeight={700}>
                  sdf
                </Text>
                <Text fSize={12}>asdf</Text>
              </Button>
              <Button
                bColor="primary"
                css={{ border: "none" }}
                icon={<CloseIcon />}
                onClick={closeEventButton}
              />
              {/* {!keymoment && (
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
                              onClick={() => console.log(item.title)}
                            >
                              <Text fSize={20} fWeight={700}>
                                {item.type}
                              </Text>
                              <Text fSize={12}>{item.title}</Text>
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
                                  <Text fSize={16}>{item.type}</Text>
                                </Button>
                              </Col>
                            );
                          })}
                        </Slider>
                      </Col>
                    </Row>
                  )}
                </>
              )} */}
            </Row>
          )}
        </Row>
      </ContentWrapper>
    </CommentaryWrapper>
  );
};

export default CreateClipView;

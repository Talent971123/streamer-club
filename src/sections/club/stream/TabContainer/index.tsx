import React, { useState } from "react";
import { ContainerWrapper } from "components/Container";
import { ContentWrapper, Content } from "./tabcontainer.style";
import { commonItem } from "types/common/common";
import { Col, Row } from "components/Layout";
import TabsView from "./Tabs";
import CommentaryView from "./Commentary";
// import TeamView from "./Team";
import { Text } from "components/Text";
import MatchStatsView from "./MatchStats";
import MediaGalleryView from "./MediaGallery";
import GameDayWriteupView from "./GameDayWriteup";
import { Button } from "components/Button";
import { themeGet } from "@styled-system/theme-get";
import { ScreenContext } from "hooks/context/ScreenContext";
import { ButtonsPanel } from "sections/club/stream";
import SetThumbnailView from "./SetThumbnail";
import { siteSettings } from "hooks";
import _ from "lodash";

const menudataRaw: commonItem[] = [
  {
    title: "Commentary",
    path: "commentary",
    component: <CommentaryView />,
    display: siteSettings("game_day_page.commentary_tab"),
  },
  // {
  //   title: "Team",
  //   path: "team",
  //   component: <TeamView />,
  // },
  {
    title: "Match Stats",
    path: "match-stats",
    component: <MatchStatsView />,
    display: siteSettings("game_day_page.match_stats_tab"),
  },
  {
    title: "Media Gallery",
    path: "media-gallery",
    component: <MediaGalleryView />,
    display: siteSettings("game_day_page.media_gallery_tab"),
  },
  {
    title: "Game Day Writeup",
    path: "game-day-writeup",
    component: <GameDayWriteupView />,
    display: siteSettings("game_day_page.gameday_write_up"),
  },
];

const menudata = _.filter(menudataRaw, ["display", true]);

const TabContainerView: React.FC = () => {
  const [select, setSelect] = useState<string>(menudata[0].path);
  const [show, setEventShow] = useState<"" | "scoring" | "keyMoments">("");
  const [createClip, setCreateClipShow] = useState<boolean>(false);
  const [thumbFlag, setFlagThumb] = useState<boolean>(false);

  const onHandleSelect = (item: string) => {
    setSelect(item);
  };
  const setThumbnailFlag = () => {
    setFlagThumb(!thumbFlag);
  };

  const createClipFunc = () => {
    setCreateClipShow(true);
  };

  const toggleEvent = (eventType: "scoring" | "keyMoments") => {
    if (show === eventType) {
      setEventShow("");
    } else {
      setEventShow(eventType);
    }
  };

  const values = {
    show,
    setEventShow,
    createClip,
    setCreateClipShow,
    thumbFlag,
    setFlagThumb,
  };

  return (
    <ScreenContext.Provider value={values}>
      <ContainerWrapper>
        <ContentWrapper>
          <Row>
            <Col item={24}>
              <ButtonsPanel
                toggleEvent={toggleEvent}
                createClip={createClipFunc}
                setThumbnailFlag={setThumbnailFlag}
              />
            </Col>
          </Row>
          <Row
            css={`
              border-bottom: 1px solid ${themeGet("colors.gray.300")};
              border-radius: 5px;
            `}
            responsive={{
              834: {
                flexDirection: "column",
              },
            }}
          >
            <Col item={24}>
              <TabsView
                menudata={menudata}
                select={select}
                onHandleSelect={onHandleSelect}
              />
            </Col>
            {/* <Row alignItems="flex-end" justifyContent="flex-end"> */}
            {/* <Col>
                 <Col>
                <Button
                  bColor="primary"
                  css={{
                    padding: 10,
                    marginBottom: 16,
                    marginRight: 16,
                    fontSize: 12,
                    whiteSpace: "nowrap",
                  }}
                  onClick={() => thumbImageFunc()}
                >
                  {"Set Thumbnail Image"}
                </Button>
              </Col>
                <Button
                  bColor="primary"
                  css={{
                    padding: 8,
                    marginBottom: 16,
                    marginRight: 16,
                  }}
                  onClick={() => createClipFunc()}
                >
                  <Text
                    fSize={0.906}
                    wSpace="nowrap"
                    responsive={{
                      480: {
                        fSize: 0.656,
                      },
                      834: {
                        fSize: 0.844,
                      },
                    }}
                  >
                    {"Create Clip"}
                  </Text>
                </Button>
              </Col> */}
            {/* <Col>
                <Button
                  bColor="primary"
                  css={{
                    padding: 8,

                    marginBottom: 16,
                    marginRight: 16,
                    fontSize: 13,
                    whiteSpace: "nowrap",
                  }}
                  onClick={addEvent}
                >
                  <Text
                    fSize={0.906}
                    wSpace="nowrap"
                    responsive={{
                      480: {
                        fSize: 0.656,
                      },
                      834: {
                        fSize: 0.844,
                      },
                    }}
                  >
                    {"Add Event"}
                  </Text>
                </Button>
              </Col> */}
            {/* </Row> */}
          </Row>
          <SetThumbnailView></SetThumbnailView>

          <Row alignItems="center" justifyContent="center" display="flex">
            <Content>
              {menudata.map((item: commonItem, index: number) => {
                if (item.path === select) {
                  return (
                    <div key={index} css={{ width: "100%" }}>
                      {item.component}
                    </div>
                  );
                }
              })}
            </Content>
          </Row>
        </ContentWrapper>
      </ContainerWrapper>
    </ScreenContext.Provider>
  );
};

export default TabContainerView;

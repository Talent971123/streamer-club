import React, { useState } from "react";
import { ContainerWrapper } from "components/Container";
import { ContentWrapper, Content } from "./tabcontainer.style";
import { commonItem } from "types/common/common";
import { Col, Row } from "components/Layout";
import TabsView from "./Tabs";
// import CommentaryView from "./Commentary";
import CreateClipView from "./CreateClip";
// import TeamView from "./Team";
import MatchStatsView from "./MatchStats";
import MediaGalleryView from "./MediaGallery";
import GameDayWriteupView from "./GameDayWriteup";
import { Button } from "components/Button";
import { themeGet } from "@styled-system/theme-get";
import { ScreenContext } from "hooks/context/ScreenContext";

const menudata: commonItem[] = [
  {
    title: "Commentary",
    path: "commentary",
    component: <CreateClipView />,
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
  },
  {
    title: "Media Gallery",
    path: "media-gallery",
    component: <MediaGalleryView />,
  },
  {
    title: "Game Day Writeup",
    path: "game-day-writeup",
    component: <GameDayWriteupView />,
  },
];
const TabContainerView: React.FC = () => {
  const [select, setSelect] = useState<string>(menudata[0].path);
  const [show, setEventShow] = useState<boolean>(false);
  const [createClip, setCreateClipShow] = useState<boolean>(false);

  const onHandleSelect = (item: string) => {
    setSelect(item);
  };

  const createClipFunc = () => {
    setCreateClipShow(true);
  };

  const addEvent = () => {
    setEventShow(true);
  };

  const values = {
    show,
    setEventShow,
    createClip,
    setCreateClipShow,
  };

  return (
    <ScreenContext.Provider value={values}>
      <ContainerWrapper>
        <ContentWrapper>
          <Row
            css={`
              border-bottom: 1px solid ${themeGet("colors.gray.300")};
              border-radius: 5px;
            `}
            responsive={{
              900: {
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
            <Row alignItems="flex-end" justifyContent="flex-end">
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
                  onClick={() => createClipFunc()}
                >
                  {"Create Clip"}
                </Button>
              </Col>
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
                  onClick={addEvent}
                >
                  {"Add Event"}
                </Button>
              </Col>
            </Row>
          </Row>
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

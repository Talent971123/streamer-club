import React, { useState } from "react";
// import componeent
import { Row, Col } from "components/Layout";
import { ContainerWrapper } from "components/Container";
//  import Sections
import Aside from "./Aside";
import Information from "./Information";
import Teams from "./Teams";
import Billing from "./Billing";
import Community from "./Community";
import Players from "./Players";
import Schedules from "./Schedules";
import Sponsorship from "./Sponsorship";
// types
import { commonItem } from "types/common/common";
// styled component
import { ContentWrapper, Content } from "./content.style";

const menudata: commonItem[] = [
  {
    title: "Club Information",
    path: "information",
    component: <Information />,
  },
  {
    title: "Teams",
    path: "team",
    component: <Teams />,
  },
  {
    title: "Players",
    path: "plyer",
    component: <Players />,
  },
  {
    title: "Schedules",
    path: "schedule",
    component: <Schedules />,
  },
  {
    title: "Community",
    path: "community",
    component: <Community />,
  },
  {
    title: "Sponsorship & Offers",
    path: "sponsorship",
    component: <Sponsorship />,
  },
  {
    title: "Billing",
    path: "bill",
    component: <Billing />,
  },
];

const ContentView: React.FC = () => {
  const [select, setSelect] = useState<string>(menudata[0].path);

  const onHandleSelect = (item: string) => {
    setSelect(item);
  };
  return (
    <ContainerWrapper>
      <ContentWrapper>
        <Row>
          <Col item={6}>
            <Aside
              menudata={menudata}
              select={select}
              onHandleSelect={onHandleSelect}
            />
          </Col>
          <Col item={18}>
            <Content>
              {menudata.map((item: commonItem, index: number) => {
                if (item.path === select) {
                  return item.component;
                }
              })}
            </Content>
          </Col>
        </Row>
      </ContentWrapper>
    </ContainerWrapper>
  );
};

export default ContentView;

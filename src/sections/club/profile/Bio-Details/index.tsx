import React, { createContext, useState } from "react";
import { ContainerWrapper } from "components/Container";
import { commonItem } from "types/common/common";
import { Col, Row } from "components/Layout";
import { Content, ContentWrapper, DetailsContent, EditButton } from "./bio.style";
import TabsView from "./Tabs";
import MyDetails from "./MyDetails";
import { Image } from "components/Image";
import ProfileImage from "assets/images/layout/profile.png";
import { useUser } from "@auth0/nextjs-auth0";
import { Text } from "components/Text";

export const UserDetails = createContext<any>({});

const menudata: commonItem[] = [
  {
    title: "My Details",
    path: "my-details",
    component: <MyDetails />,
  },
];
const BioDetailsView: React.FC = () => {
  const [select, setSelect] = useState<string>(menudata[0].path);
  const [show, setShow] = useState<boolean>(false);
  const { user } = useUser();
  const [details, showDetails] = useState(false);

  const onHandleSelect = (item: string) => {
    setSelect(item);
  };

  const addEvent = () => {
    setShow(true);
  };

  const values = {
    show,
    setShow,
    details,
    showDetails,
  };

  return (
    <UserDetails.Provider value={values}>
      <ContainerWrapper>
        <ContentWrapper>
          <Row flexDirection="row">
            <Col>
              <Image
                src={user?.picture || ProfileImage}
                height={67}
                width={67}
                oFit="cover"
                mode="intrinsic"
                css={{ borderRadius: "50%" }}
              />
            </Col>
            <Col>
              <Text padding="0 0 0 30px" fSize={1.375} fWeight={700}>
                {"My Profile"}
              </Text>
              <EditButton onClick={() => showDetails(true)}>
                {"Edit Details"}
              </EditButton>
            </Col>
          </Row>
          {details && (
            <DetailsContent>
              <Row alignItems="flex-start" justifyContent="flex-start">
                <Col item={4}>
                  <TabsView
                    menudata={menudata}
                    select={select}
                    onHandleSelect={onHandleSelect}
                  />
                </Col>
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
            </DetailsContent>
          )}
        </ContentWrapper>
      </ContainerWrapper>
    </UserDetails.Provider>
  );
};

export default BioDetailsView;

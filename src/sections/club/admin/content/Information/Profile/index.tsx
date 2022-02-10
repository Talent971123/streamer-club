import React from "react";
// import { Input } from "components/Input";
import { Col, Row } from "components/Layout";
import { Text } from "components/Text";
import { Input, LinkInput } from "components/Input";
import { Dropdown } from "components/Dropdown";
//  import Browser
import { ImageBroswer } from "./ImageBrowser";
import { CommonBrowser } from "./CommonBrowser";
// import styled component
import { ProfileWrapper } from "./profile.style";
import { Avatar } from "components/Avatar";
// import assets
import logo from "assets/images/home/team1.png";
// define the example data
const data = [
  {
    title: "sport1",
    value: "1",
  },
  {
    title: "sport2",
    value: "2",
  },
  {
    title: "sport3",
    value: "4",
  },
  {
    title: "sport4",
    value: "5",
  },
];

const Profile: React.FC = () => {
  const onChange = (e: any) => {
    console.log(e);
  };

  const onHandleCopy = (link: string) => {
    console.log(link);
  };

  return (
    <ProfileWrapper>
      <Row flexDirection="column" gap={50}>
        <Col item={24}>
          <Text fSize={1.5} fWeight={700} mode="p" fColor="gray.600">
            {"Profile Details"}
          </Text>
          <Text fSize={0.875} fWeight={500} fColor="gray.300">
            {"This information will appear on your Club Po    rtal."}
          </Text>
        </Col>
        <Col item={24}>
          <Row
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={30}
          >
            <Row>
              <Col item={12}>
                <Text fSize={0.9375} fWeight={500} fColor="gray.300">
                  {"Club Name"}
                </Text>
              </Col>
              <Col item={12}>
                <Input
                  iColor="primary"
                  iSize="small"
                  iFont="normal"
                  iRadius="small"
                  placeholder="Club Name ..."
                />
              </Col>
            </Row>
            <Row alignItems="center">
              <Col item={12}>
                <Text fSize={0.9375} fWeight={500} fColor="gray.300">
                  {"Club Logo"}
                </Text>
              </Col>
              <Col item={6} />
              <Col item={6}>
                <Row gap={30} alignItems="center">
                  <Avatar src={logo} radius="circle" mode="small" />
                  <CommonBrowser />
                </Row>
              </Col>
            </Row>
            <Row alignItems="center">
              <Col item={12}>
                <Text fSize={0.9375} fWeight={500} fColor="gray.300">
                  {"Club Banner Image"}
                </Text>
              </Col>
              <Col item={12}>
                <ImageBroswer />
              </Col>
            </Row>
            <Row>
              <Col item={12}>
                <Text fSize={0.9375} fWeight={500} fColor="gray.300">
                  {"Club Domain"}
                </Text>
              </Col>
              <Col item={12}>
                <LinkInput onCopyLink={onHandleCopy} prefix="streamer.com" />
              </Col>
            </Row>
            <Row>
              <Col item={12}>
                <Text fSize={0.9375} fWeight={500} fColor="gray.300">
                  {"Sport"}
                </Text>
              </Col>
              <Col item={12}>
                <Dropdown data={data} onChange={onChange} />
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </ProfileWrapper>
  );
};

export default Profile;

import React from "react";
// import { Input } from "components/Input";
import { Col, Row } from "components/Layout";
import { Text } from "components/Text";
import { useInputHOC } from "components/hoc";
// import styled component
import { ProfileWrapper, Commmon } from "./profile.style";
const Input = useInputHOC(Commmon);

const Profile: React.FC = () => {
  return (
    <ProfileWrapper>
      <Row flexDirection="column" gap={50}>
        <Col item={24}>
          <Text fSize={24} fWeight={700} mode="p" fColor="gray.600">
            {"Profile Details"}
          </Text>
          <Text fSize={14} fWeight={500} fColor="gray.300">
            {"This information will appear on your Club Portal."}
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
                <Text fSize={15} fWeight={500} fColor="gray.300">
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
            <Row>
              <Col item={12}>
                <Text fSize={15} fWeight={500} fColor="gray.300">
                  {"Club Logo"}
                </Text>
              </Col>
              <Col item={12}></Col>
            </Row>
            <Row>
              <Col item={12}>
                <Text fSize={15} fWeight={500} fColor="gray.300">
                  {"Club Banner Image"}
                </Text>
              </Col>
              <Col item={12}></Col>
            </Row>
            <Row>
              <Col item={12}>
                <Text fSize={15} fWeight={500} fColor="gray.300">
                  {"Club Domain"}
                </Text>
              </Col>
              <Col item={12}></Col>
            </Row>
            <Row>
              <Col item={12}>
                <Text fSize={15} fWeight={500} fColor="gray.300">
                  {"Sport"}
                </Text>
              </Col>
              <Col item={12}></Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </ProfileWrapper>
  );
};

export default Profile;

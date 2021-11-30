import React from "react";
import { Text } from "components/Text";
import { useInputHOC } from "components/hoc";
import { Col, Row } from "components/Layout";
// import styled component
import { PrivacyWrapper, Commmon } from "./privacy.style";
const Input = useInputHOC(Commmon);

const PrivacySection: React.FC = () => {
  return (
    <PrivacyWrapper>
      <Row flexDirection="column" gap={20}>
        <Col item={24}>
          <Text fSize={24} fWeight={700} mode="p" fColor="gray.600">
            {"Privacy"}
          </Text>
          <Text
            fSize={15}
            fWeight={600}
            mode="p"
            fColor="gray.600"
            padding="10px 0"
          >
            {"Private Profile"}
          </Text>
        </Col>
        <Col item={24}>
          <Row gap={10} flexDirection="column">
            <Row>
              <Col>
                <Text fSize={14} fWeight={500} fColor="gray.300">
                  {
                    "Only people who you share your profile domain with will be able to access your content."
                  }
                </Text>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col>
                <Text fSize={14} fWeight={500} fColor="gray.300">
                  {"Placeholder."}
                </Text>
              </Col>
              <Col></Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </PrivacyWrapper>
  );
};

export default PrivacySection;

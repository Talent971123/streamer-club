import React from "react";
import { Text } from "components/Text";
import { Col, Row } from "components/Layout";
import ReactToggle from "react-toggle";
// import styled component
import { PrivacyWrapper } from "./privacy.style";
const PrivacySection: React.FC = () => {
  return (
    <PrivacyWrapper>
      <Row flexDirection="column" gap={20}>
        <Col item={24}>
          <Text fSize={1.5} fWeight={700} mode="p" fColor="gray.600">
            {"Privacy"}
          </Text>
          <Text
            fSize={0.9375}
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
            <Row justifyContent="space-between">
              <Col>
                <Text fSize={0.875} fWeight={500} fColor="gray.300">
                  {
                    "Only people who you share your profile domain with will be able to access your content."
                  }
                </Text>
              </Col>
              <Col item={1}>
                <ReactToggle onChange={() => console.log(`1`)} /> {/* Convert to andt swtich */}
              </Col>
            </Row>
            <Row justifyContent="space-between">
              <Col>
                <Text fSize={0.875} fWeight={500} fColor="gray.300">
                  {"Placeholder."}
                </Text>
              </Col>
              <Col item={1}>
                <ReactToggle onChange={() => console.log(`2`)} /> {/* Convert to andt swtich */}
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </PrivacyWrapper>
  );
};

export default PrivacySection;

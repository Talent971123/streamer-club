import React from "react";
import { Text } from "components/Text";
import { useInputHOC } from "components/hoc";
import { Col, Row } from "components/Layout";
// import styled component
import { ContactWrapper, Commmon } from "./contact.style";
const Input = useInputHOC(Commmon);

const ContactSection: React.FC = () => {
  return (
    <ContactWrapper>
      <Row flexDirection="column" gap={20}>
        <Col item={24}>
          <Text fSize={24} fWeight={700} mode="p" fColor="gray.600">
            {"Contact Details"}
          </Text>
          <Text fSize={14} fWeight={500} fColor="gray.300">
            {"This information will not be shared publicly."}
          </Text>
        </Col>
        <Col item={24}>
          <Row justifyContent="space-between" gap={10}>
            <Col item={12}>
              <Row flexDirection="column">
                <Col item={24}>
                  <Text fSize={14} fWeight={500} fColor="gray.300">
                    {"Address Line 1"}
                  </Text>
                  <Input
                    iColor="primary"
                    iSize="small"
                    iFont="normal"
                    iRadius="small"
                    placeholder="Address Line 1"
                  />
                </Col>
              </Row>
            </Col>
            <Col item={12}>
              <Row flexDirection="column">
                <Col item={24}>
                  <Text fSize={14} fWeight={500} fColor="gray.300">
                    {"Address Line 2"}
                  </Text>
                  <Input
                    iColor="primary"
                    iSize="small"
                    iFont="normal"
                    iRadius="small"
                    placeholder="Address Line 2"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col item={24}>
          <Row justifyContent="space-between" gap={10}>
            <Col item={8}>
              <Row flexDirection="column">
                <Col item={24}>
                  <Text fSize={14} fWeight={500} fColor="gray.300">
                    {"City"}
                  </Text>
                  <Input
                    iColor="primary"
                    iSize="small"
                    iFont="normal"
                    iRadius="small"
                    placeholder="City"
                  />
                </Col>
              </Row>
            </Col>
            <Col item={8}>
              <Row flexDirection="column">
                <Col item={24}>
                  <Text fSize={14} fWeight={500} fColor="gray.300">
                    {"State"}
                  </Text>
                  <Input
                    iColor="primary"
                    iSize="small"
                    iFont="normal"
                    iRadius="small"
                    placeholder="State"
                  />
                </Col>
              </Row>
            </Col>
            <Col item={8}>
              <Row flexDirection="column">
                <Col item={24}>
                  <Text fSize={14} fWeight={500} fColor="gray.300">
                    {"PostCode"}
                  </Text>
                  <Input
                    iColor="primary"
                    iSize="small"
                    iFont="normal"
                    iRadius="small"
                    placeholder="PostCode"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </ContactWrapper>
  );
};

export default ContactSection;

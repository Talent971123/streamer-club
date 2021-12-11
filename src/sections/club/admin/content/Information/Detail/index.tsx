import React from "react";
import { Text } from "components/Text";
import { Col, Row } from "components/Layout";
import { Button } from "components/Button";
import { Table } from "components/Table";
// import styled component
import { DetailWrapper } from "./detail.style";
//  import react icons
import { BsPlus } from "react-icons/bs";

const data = [
  {
    Name: "Adrian Casey",
    Email: "adrian@harken.cc",
    Mobile: "+61 491 570 156",
    action: (
      <Button bColor="primary" bSize="small">
        {"Edit"}
      </Button>
    ),
  },
  {
    Name: "Gideon",
    Email: "gideon@harken.cc",
    Mobile: "0491570159",
    action: (
      <Button bColor="primary" bSize="small">
        {"Edit"}
      </Button>
    ),
  },
];

const DetailSection: React.FC = () => {
  return (
    <DetailWrapper>
      <Row flexDirection="column" gap={20}>
        <Col item={24}>
          <Row justifyContent="space-between" alignItems="center">
            <Col item={12}>
              <Text fSize={24} fWeight={700} mode="p" fColor="gray.600">
                {"Club Admin Details"}
              </Text>
              <Text fSize={14} fWeight={500} fColor="gray.300">
                {"Club Administrator users can..."}
              </Text>
            </Col>
            <Col item={12}>
              <Row justifyContent="flex-end">
                <Button bColor="primary" bSize="small" icon={<BsPlus />}>
                  {"Add Club ADmin"}
                </Button>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col item={24}>
          <Table data={data} />
        </Col>
      </Row>
    </DetailWrapper>
  );
};

export default DetailSection;

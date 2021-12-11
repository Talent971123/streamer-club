import React from "react";

import { ContentWrapper, TabItem } from "./content.style";
import { Col, Row } from "components/Layout";
import { Text } from "components/Text";

const tabdatas = [
  {
    title: "Details",
    path: "detail",
  },
  {
    title: "Players",
    path: "player",
  },
  {
    title: "Fixtures & Results",
    path: "result",
  },
];

const Content: React.FC = () => {
  return (
    <ContentWrapper>
      <Row alignItems="center" gap={20}>
        {tabdatas.map((item: any, index: number) => {
          return (
            <Col key={index}>
              <TabItem>
                <Text
                  //   fColor={select !== item.path ? "gray.300" : "white"}
                  fWeight={600}
                  fSize={20}
                  padding="8px 0"
                  //   hoverStyle={
                  // select !== item.path ? { fColor: "gray.200" } : {}
                  //   }
                >
                  {item.title}
                </Text>
              </TabItem>
            </Col>
          );
        })}
      </Row>
    </ContentWrapper>
  );
};

export default Content;

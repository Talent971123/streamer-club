import { Col, Row } from "components/Layout";
import { Text } from "components/Text";
import React from "react";
import { themeGet } from "@styled-system/theme-get";
import { Border, CommentaryWrapper, ContentWrapper } from "./commentary.style";

const Comments = [
  {
    type: "OUT!",
    title: "Over 41.2",
    name: "James Entwisle",
    statement:
      " is clean bowled by Martin Wells. Never looked comfortable and he'll be relieved to be walking back to the pavillion.",
    updated: "- Updated by @AdrianCasey",
  },
  {
    type: "FOUR",
    title: "Over 40.2",
    name: "James Entwisle",
    statement:
      " gets a nice healthy edge over a packed slip cordon and the balls races away to boundary for 4.",
    updated: "- Updated by @AdrianCasey",
  },
  {
    type: "SIX",
    title: "Over 39.5",
    name: "Martin Wells",
    statement:
      " drops it in short and it's despatched by @AdrianCasey right over the fence and on to the road for 6.",
    updated: "- Updated by @RealScorer",
  },
  {
    type: "50",
    title: "Over 39.4",
    name: "Adrian Casey",
    statement:
      " cover drives for a quick 2 and that brings up the 50. What a knock!",
    updated: "- Updated by @RealScorer",
  },
];

const CommentaryView: React.FC = () => {
  return (
    <CommentaryWrapper>
      <ContentWrapper>
        <Row
          flexDirection="column"
          justifyContent="center"
          gap={16}
          display="flex"
        >
          {Comments.map((item: any, index: number) => {
            return (
              <Row
                justifyContent="center"
                alignItems="center"
                gap={4}
                key={index}
                css={`
                  background-color: ${themeGet("colors.gray.900")};
                  padding-right: 10px;
                `}
              >
                <Border mode={index} />
                <Col item={1}>
                  <Row alignItems="center" justifyContent="center">
                    <Text fColor="white" fSize={22} fWeight={700} css={{paddingBottom: 24}}>
                      {item.type}
                    </Text>
                  </Row>
                </Col>
                <Col item={24}>
                  <Row>
                    <Text fColor="white" fSize={22} fWeight={700}>
                      {item.title}
                    </Text>
                  </Row>
                  <Row>
                    <Text fColor="white" fSize={22} fWeight={700}>
                      {item.name}&nbsp;
                    </Text>
                    <Text fColor="white" fSize={22} fWeight={200}>
                      {item.statement}
                    </Text>
                  </Row>
                  <Row>
                    <Text
                      fColor="red.100"
                      fSize={22}
                      fWeight={200}
                      css={{ paddingTop: 24 }}
                    >
                      {item.updated}
                    </Text>
                  </Row>
                </Col>
              </Row>
            );
          })}
        </Row>
      </ContentWrapper>
    </CommentaryWrapper>
  );
};

export default CommentaryView;

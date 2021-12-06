import React from "react";

import { Col, Row } from "components/Layout";
import { Image } from "components/Image";
import { Text } from "components/Text";

import { NewsProps } from "types/components/NewsProps";
import { NewsCardWrapper } from ".//News.style";
const NewsCard: React.FC<NewsProps> = ({
  backgroundImage,
  content,
  timeline,
  title,
}) => {
  return (
    <NewsCardWrapper>
      <Row gap={20}>
        <Col>
          <Image src={backgroundImage} width={300} height={200} />
        </Col>
        <Col>
          <Text mode="p" fColor="gray.300">
            {timeline}
          </Text>
          <Text mode="p" fColor="white" fSize={16} padding="7px 0 0 0">
            {title}
          </Text>
          <Text mode="p" fColor="gray.300" padding="10px 0 0 0">
            {content}
          </Text>
        </Col>
      </Row>
    </NewsCardWrapper>
  );
};

export default NewsCard;

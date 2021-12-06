import React from "react";
// component
import { Image } from "components/Image";
import { Row, Col } from "components/Layout";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { FiShare2 } from "react-icons/fi";
// import styled component
import { HeadWrapper } from "./Head.style";
// import assets
import Mark from "assets/images/home/team2.png";

const HeadView: React.FC = () => {
  return (
    <HeadWrapper>
      <Row alignItems="center">
        <Col item={12}>
          <Row alignItems="center" gap={20}>
            <Col>
              <Image src={Mark} width={89} height={90} />
            </Col>
            <Col>
              <Text fColor="red.100" fSize={38} fWeight={800}>
                Perth Football Club
              </Text>
            </Col>
          </Row>
        </Col>
        <Col item={12}>
          <Row flexDirection="row-reverse" padding="0 20px 0 0">
            <Button icon={<FiShare2 />}>{"Share"}</Button>
          </Row>
        </Col>
      </Row>
    </HeadWrapper>
  );
};

export default HeadView;

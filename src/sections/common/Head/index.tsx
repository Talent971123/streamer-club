// import assets
import Mark from "assets/images/home/team2.png";
// component
import { Button } from "components/Button";
import { Image } from "components/Image";
import { Col, Row } from "components/Layout";
import { Text } from "components/Text";
import React from "react";
import { FiShare2 } from "react-icons/fi";
import { SectionViewProps } from "types/components/Section";
// import styled component
import { HeadWrapper } from "./head.style";

const HeadView: React.FC<SectionViewProps> = (props) => {

  const { data: { logo, title } } = props

  return (
    <HeadWrapper>
      <Row alignItems="center">
        <Col item={12}>
          <Row alignItems="center" gap={20}>
            <Col>
              <Image src={logo || Mark} width={89} height={90} />
            </Col>
            <Col>
              <Text fColor="red.100" fSize={38} fWeight={800}>
                {title || 'Team'}
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

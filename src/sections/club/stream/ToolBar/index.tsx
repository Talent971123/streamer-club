import React from "react";
import { HandIcon } from "assets/icon";
import { Button } from "components/Button";
import { Col, Row } from "components/Layout";
import { Text } from "components/Text";

// icon
import {
  AiFillFlag,
  AiOutlineDollarCircle,
  AiOutlineSave
} from "react-icons/ai";
import { BiCopy } from "react-icons/bi";
import { FiShare2 } from "react-icons/fi";
import {
  BlackBorder,
  LiveWrapper, ToobarWrapper
} from "./toolbar.style";



const ToolBarView: React.FC = () => {

  return (
    <ToobarWrapper>
      <Row justifyContent="space-between" alignItems="center">
        <Col item={4}>
          <Row gap={10} justifyContent="flex-start" alignItems="center">
            <Button bColor="warning" icon={<AiFillFlag />}>
              {"Become a fan"}
            </Button>
            <Button icon={<AiOutlineDollarCircle />}>{"Support Club"}</Button>
          </Row>
        </Col>
        <Col>
          <Row gap={10}>
            <Row justifyContent="center" alignItems="center" gap={10}>
              <HandIcon />
              <Text fSize={16} fWeight={600}>
                {"Suns"}
              </Text>
            </Row>
            <Row justifyContent="center" alignItems="center" gap={10}>

              <BlackBorder />
              <Row
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap={5}
              >
                <LiveWrapper>
                  <Text fColor="white" fWeight={700} fSize={18}>
                    {"Live"}
                  </Text>
                </LiveWrapper>

              </Row>
              <BlackBorder />

            </Row>
            <Row justifyContent="center" alignItems="center" gap={10}>

              <Text fSize={16} fWeight={600}>
                {"Highlanders"}
              </Text>
              <HandIcon />
            </Row>
          </Row>
        </Col>
        <Col item={4}>
          <Row gap={10} justifyContent="flex-end" alignItems="center">
            <Button icon={<FiShare2 />}>{"Share"}</Button>
            <Button icon={<AiOutlineSave />} />
            <Button icon={<BiCopy />} />
          </Row>
        </Col>
      </Row>
    </ToobarWrapper>
  );
};

export default ToolBarView;

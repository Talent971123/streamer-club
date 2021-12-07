import React from "react";

import { Row, Col } from "components/Layout";
import {
  ToobarWrapper,
  ImageContent,
  BlackBorder,
  LiveWrapper,
} from "./toolbar.style";
import { Button } from "components/Button";
import { Text } from "components/Text";
import { Image } from "components/Image";
// icon
import {
  AiFillFlag,
  AiOutlineDollarCircle,
  AiOutlineSave,
} from "react-icons/ai";
import { BiCopy } from "react-icons/bi";
import { FiShare2 } from "react-icons/fi";
import { HandIcon } from "assets/icon";
import { MdOutlineArrowForwardIos } from "react-icons/md";

// assets
import team1 from "assets/images/stream/team1.png";
import team2 from "assets/images/stream/team2.png";

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
          <Row>
            <Row justifyContent="center" alignItems="center" gap={10}>
              <HandIcon />
              <Text fSize={16} fWeight={600}>
                {"Brisbane Heat"}
              </Text>
              <ImageContent>
                <Image src={team1} width={60} height={60} />
              </ImageContent>
            </Row>
            <Row justifyContent="center" alignItems="center" gap={10}>
              <Row
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Text fColor="gray.300" fSize={25} fWeight={700}>
                  {"82"}
                </Text>
                <Text fColor="gray.300" fSize={14} fWeight={600}>
                  {"19.1"}
                </Text>
              </Row>
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
                <Text fColor="white" fSize={20} fWeight={600} tAlign="center">
                  {"2nd Lnnings"}
                </Text>
                <Text fColor="gray.300" fSize={13} fWeight={600}>
                  {"35.5 overs"}
                </Text>
              </Row>
              <BlackBorder />
              <Row
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Text fColor="white" fSize={25} fWeight={700}>
                  {"233"}
                </Text>
                <Text fColor="gray.300" fSize={14} fWeight={600}>
                  {"49.1"}
                </Text>
              </Row>
            </Row>
            <Row justifyContent="center" alignItems="center" gap={10}>
              <ImageContent>
                <Image src={team2} width={60} height={60} />
              </ImageContent>
              <Text fSize={16} fWeight={600}>
                {"Brisbane Heat"}
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

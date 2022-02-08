import React, { useContext } from "react";
import { useRouter } from "next/router";
import { Button } from "components/Button";
import { Col, Row } from "components/Layout";
import { Text } from "components/Text";
import { RWebShare } from "react-web-share";
// icon
import {
  AiFillFlag,
  AiOutlineSave,
  // AiOutlineDollarCircle,
} from "react-icons/ai";
// import { BiCopy } from "react-icons/bi";
import { FiShare2 } from "react-icons/fi";
import { BlackBorder, LiveWrapper, ToobarWrapper } from "./toolbar.style";
import { StreamPageContext } from "hooks/context/StreamPageContext";
import { baseUrl } from "utils/constData";
import { useUser } from "@auth0/nextjs-auth0";

const ToolBarView: React.FC = () => {
  const { home_name, away_name } = useContext(StreamPageContext);
  const router = useRouter();
  const { user } = useUser();
  const _handleSave = () => {
    alert(user?.id);
  };

  return (
    <ToobarWrapper>
      <Row justifyContent="space-between" alignItems="center">
        <Col item={4}>
          <Row gap={10} justifyContent="flex-start" alignItems="center">
            <Button bColor="warning" icon={<AiFillFlag />}>
              {"Become a fan"}
            </Button>
            {/* <Button icon={<AiOutlineDollarCircle />}>{"Support Club"}</Button> */}
          </Row>
        </Col>
        <Col>
          <Row gap={10}>
            <Row justifyContent="center" alignItems="center" gap={10}>
              {/* <HandIcon /> */}
              {/* <Image src={home_logo} width={50} height={50} /> */}
              <Text tAlign={"center"} fSize={18} fWeight={600} wSpace="nowrap">
                {home_name}
              </Text>
            </Row>

            <Row justifyContent="center" alignItems="center" gap={10}>
              <BlackBorder />
              {router.pathname.split("/")[3] !== "replay" ? (
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
              ) : null}
              <BlackBorder />
            </Row>

            <Row justifyContent="center" alignItems="center" gap={10}>
              <Text tAlign={"center"} fSize={18} fWeight={600} wSpace="nowrap">
                {away_name}
              </Text>
              {/* <Image src={away_logo} width={50} height={50} /> */}
              {/* <HandIcon /> */}
            </Row>
          </Row>
        </Col>
        <Col item={4}>
          <Row gap={10} justifyContent="flex-end" alignItems="center">
            <RWebShare
              data={{
                text: "Share Profile",
                url: `${baseUrl + router.asPath}`,
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <Button bColor="primary" bSize="small" icon={<FiShare2 />}>
                {"Share"}
              </Button>
            </RWebShare>
            <Button icon={<AiOutlineSave />} onClick={_handleSave} />
            {/* <Button icon={<BiCopy />} /> */}
          </Row>
        </Col>
      </Row>
    </ToobarWrapper>
  );
};

export default ToolBarView;

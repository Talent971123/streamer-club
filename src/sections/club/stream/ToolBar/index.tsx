import React, { useContext, useState } from "react";
import { connect } from "react-redux";

import { useQuery, useMutation } from "@apollo/client";
import { useUser } from "@auth0/nextjs-auth0";
import { query, mutate } from "graphql/match";
import { useRouter } from "next/router";
import { Button } from "components/Button";
import { Col, Row } from "components/Layout";
import { Text } from "components/Text";
import { RWebShare } from "react-web-share";
import { toast } from "react-toastify";
import { BlackBorder, LiveWrapper, ToobarWrapper } from "./toolbar.style";
// icon
import {
  AiFillFlag,
  AiOutlineSave,
  // AiOutlineDollarCircle,
} from "react-icons/ai";
// import { BiCopy } from "react-icons/bi";
import { FiShare2 } from "react-icons/fi";
// context
import { StreamPageContext } from "hooks/context/StreamPageContext";
// utils
import { baseUrl } from "utils/constData";
import _ from "lodash";

const ToolBarView: React.FC = (props: any) => {
  const { isLive } = props;
  const { home_name, away_name, playback_id } = useContext(StreamPageContext);
  const [isSubmit, setSubmiting] = useState<boolean>(false);
  const router = useRouter();
  const { user } = useUser();

  const { data } = useQuery(query.GET_SAVED_MATCHES, {
    variables: {
      id: user?.id,
    },
  });

  const [Insert] = useMutation(mutate.INSERT_SAVED_MATCHES_ONE, {
    onCompleted() {
      setSubmiting(false);
      toast.warn("Successfully !");
    },
    onError(e) {
      setSubmiting(false);
      toast.error("Error Happened.");
    },
  });

  const _handleSave = async () => {
    if (
      !data?.saved_matches.every(
        (item: any) => item.match_id == router.query.assetId
      )
    ) {
      setSubmiting(true);
      await Insert({
        variables: {
          object: {
            user_id: user?.id,
            match_id: router.query.assetId,
          },
        },
      });
    } else {
      return toast.warn("video already saved.");
    }
  };

  return (
    <ToobarWrapper>
      <Row
        justifyContent="space-between"
        alignItems="center"
        responsive={{ 900: { flexDirection: "column", gap: 10 } }}
      >
        <Col item={4} responsive={{ 900: { item: 24 } }}>
          <Row
            gap={10}
            justifyContent="flex-start"
            alignItems="center"
            responsive={{
              900: {
                justifyContent: "flex-end",
              },
            }}
          >
            <Button bColor="warning" icon={<AiFillFlag />}>
              {"Become a fan"}
            </Button>
            {/* <Button icon={<AiOutlineDollarCircle />}>{"Support Club"}</Button> */}
          </Row>
        </Col>
        <Col>
          <Row gap={10}>
            <Row
              justifyContent="center"
              alignItems="center"
              gap={10}
              responsive={{
                500: {
                  gap: 5,
                },
              }}
            >
              {/* <HandIcon /> */}
              {/* <Image src={home_logo} width={50} height={50} /> */}
              <Text
                tAlign={"center"}
                fSize={1.125}
                fWeight={600}
                wSpace="nowrap"
                responsive={{
                  500: { fSize: 0.9 },
                }}
              >
                {home_name}
              </Text>
            </Row>

            <Row
              justifyContent="center"
              alignItems="center"
              gap={10}
              responsive={{
                500: {
                  gap: 5,
                },
              }}
            >
              <BlackBorder />

              {isLive && router.pathname.split("/")[3] !== "replay" ? (
                <Row
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  gap={5}
                >
                  <LiveWrapper>
                    <Text
                      fColor="white"
                      fWeight={700}
                      fSize={1.125}
                      responsive={{
                        500: { fSize: 0.9 },
                      }}
                    >
                      {"Live"}
                    </Text>
                  </LiveWrapper>
                </Row>
              ) : null}

              <BlackBorder />
            </Row>

            <Row
              justifyContent="center"
              alignItems="center"
              gap={10}
              responsive={{
                500: {
                  gap: 5,
                },
              }}
            >
              <Text
                tAlign={"center"}
                fSize={1.125}
                fWeight={600}
                wSpace="nowrap"
                responsive={{
                  500: { fSize: 0.9 },
                }}
              >
                {away_name}
              </Text>
              {/* <Image src={away_logo} width={50} height={50} /> */}
              {/* <HandIcon /> */}
            </Row>
          </Row>
        </Col>
        <Col item={4} responsive={{ 900: { item: 24 } }}>
          <Row gap={10} justifyContent="flex-end" alignItems="center">
            <RWebShare
              data={{
                text: "Share Profile",
                url: `${baseUrl + router.asPath}`,
              }}
              onClick={() => toast.success("shared successfully !")}
            >
              <Button bColor="primary" bSize="small" icon={<FiShare2 />}>
                {"Share"}
              </Button>
            </RWebShare>
            <Button
              icon={<AiOutlineSave />}
              onClick={_handleSave}
              disabled={isSubmit}
            />
            {/* <Button icon={<BiCopy />} /> */}
          </Row>
        </Col>
      </Row>
    </ToobarWrapper>
  );
};

const mapStateToProps = (state: any) => ({
  isLive: state.watch.live,
});

export default connect(mapStateToProps)(ToolBarView);

import React, { useContext, useState, useRef } from "react";
import { useRouter } from "next/router";

import { useMutation } from "@apollo/client";
import { PLAYERQL, USERQL } from "graphql/club";

import { Button } from "components/Button";
import { Col, Row } from "components/Layout";
import {
  ClubWrapper,
  BottomBorder,
  CustomInput,
  CustomSelect,
  CustomDatePicker,
  CustomText,
  CustomForm,
} from "./club.style";

import moment from "moment";
import { ImCancelCircle } from "react-icons/im";
import { FiSave, FiShare2, FiUserPlus } from "react-icons/fi";

import EditIcon from "assets/icon/edit";
import { s3UploadFile } from "utils/s3-helper";
import d_photo from "assets/images/player/default-player-image.png";
import { PlayerContext } from "pages/club/[club_slug]/player/[player_slug]";
import { RWebShare } from "react-web-share";
import { baseUrl } from "utils/constData";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { UserProfile, useUser } from "@auth0/nextjs-auth0";


const TabletClub: React.FC = (props: any) => {
  const { player } = useContext<any>(PlayerContext);
  const router = useRouter();
  const { teams } = props;
  const { user } = useUser();
  const tlist = teams
    ? teams.map((item: any) => ({ label: item.name, value: item.id }))
    : [];
  const [meta, setMeta] = useState<any>(null);
  const [flag, setFlag] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSubmit, setisSubmit] = useState<boolean>(false);
  const [imageSrc, setiimageSrc] = useState<any>(
    player?.user?.photo ? player?.user?.photo : d_photo
  );
  const [store, setStore] = useState<any>(null);

  const [userUpdate] = useMutation(USERQL.UPDATE_USERS, {
    onCompleted() {
      setiimageSrc(store);
      setShow(false);
      toast.success("Success.");
    },
    onError(e) {
      toast.error("Error Happened.");
    },
  });

  const [update] = useMutation(PLAYERQL.UPDATE_USER_PLAYERS, {
    onCompleted() {
      setisSubmit(false);
      setFlag(false);
      toast.success("Success.");
    },
    onError(e) {
      toast.error("Error Happened.");
      setisSubmit(false);
    },
  });

  if (!player) {
    return <></>;
  }

  return (
    <ClubWrapper>
      <Row gap={50} alignItems="center" justifyContent="center">
        <Col item={12}>
          <Row flexDirection="column">
            <Row alignItems="center">
              <CustomText strong css={{fontSize: "1rem"}}>
                {"Current Club: "}
              </CustomText>
              <CustomText strong css={{ marginLeft: "12px" }}>{player.club.name}</CustomText>
            </Row>
          </Row>
        </Col>
        <Col item={12}>
          <Row alignItems="center">
              <CustomText strong css={{fontSize: "1rem"}}>
                {"Teams:"}
              </CustomText>
              {!flag ? (
                player.teams.map((team: { name: string }, idx: number) => (
                  <Button
                    key={`player-team-${idx}`}
                    bColor="warning"
                    disabled={isSubmit}
                    style={{marginLeft: "12px"}}
                  >
                    {team.name}
                  </Button>
                ))
              ) : (
                <CustomForm.Item name="team_id" style={{ width: "70%" }}>
                  <CustomSelect placeholder="teams" options={tlist} />
                </CustomForm.Item>
              )}
            </Row>
        </Col>
      </Row>
      
      <Row gap={50} alignItems="flex-start" justifyContent="center">
        <Col item={12}>
          {!flag ? <BottomBorder /> : <br />}
        </Col>
        <Col item={12}>
          {!flag ? <BottomBorder /> : <br />}
        </Col>
      </Row>
      
      <Row gap={50} alignItems="center" justifyContent="center">
        <Col item={12}>
          <Row alignItems="center">
            <CustomText strong css={{fontSize: "1rem"}}>
              {"Player Number: "}
            </CustomText>
            {!flag ? (
              <CustomText strong css={{ marginLeft: "12px" }}>{player.positions && player.positions.join(", ")}</CustomText>
            ) : (
              <CustomForm.Item name="positions">
                <CustomInput
                  placeholder="positions"
                  disabled={isSubmit}
                />
              </CustomForm.Item>
            )}
          </Row>
        </Col>
        <Col item={12}>
          <Row alignItems="center" />
        </Col>
      </Row>
    </ClubWrapper>
  );
};

const mapStateToProps = (state) => ({
  teams: state.teams.list,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TabletClub);

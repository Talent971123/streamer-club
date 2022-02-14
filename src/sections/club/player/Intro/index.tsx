import React, { useContext, useState, useRef } from "react";
import { useRouter } from "next/router";

import { useMutation } from "@apollo/client";
import { PLAYERQL, USERQL } from "graphql/club";

import { Button } from "components/Button";
import { Avatar } from "components/Avatar";
import { Col, Row } from "components/Layout";
import { ImageCrop_Modal } from "components/Modal";
import ButtonLoading from "components/Loading/ButtonLoading";
import {
  ProfileWrapper,
  ContentWrapper,
  ClubWrapper,
  BottomBorder,
  CustomTextArea,
  CustomInput,
  CustomSelect,
  CustomDatePicker,
  CustomText,
  CustomForm,
} from "./Intro.style";

import moment from "moment";
import { ImCancelCircle } from "react-icons/im";
import { FiSave, FiShare2, FiUserPlus } from "react-icons/fi";

import EditIcon from "assets/icon/edit";
import { s3UploadFile } from "utils/s3-helper";
import { PlayerContext } from "pages/club/[club_slug]/player/[player_slug]";
import { RWebShare } from "react-web-share";
import { baseUrl } from "utils/constData";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { UserProfile, useUser } from "@auth0/nextjs-auth0";
import d_photo from "assets/images/player/default-player-image.png";

const IntroSection: React.FC = (props: any) => {
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

  const onFinish = async (values: any) => {
    const { first_name, last_name, ...rest } = values;

    // setisSubmit(true);

    await update({
      variables: {
        pid: player.id,
        uid: player.user.id,
        po_object: {
          ...rest,
          positions: rest.positions.split(","),
        },
        user_object: {
          first_name,
          last_name,
        },
      },
    });

    setFlag(false);
  };

  const saveImage = async (file: File, imageSrc: any) => {
    setStore(imageSrc);
    let photo: string | null = null;
    const s3res: any = await s3UploadFile("Players", player.slug, file);
    photo = s3res.location;
    setiimageSrc(`${s3res.location}?${Math.random()}`);
    await userUpdate({ variables: { uid: player.user.id, object: { photo } } });
  };

  const onTargetClick = () => {
    if (fileInputRef && fileInputRef.current) {
      fileInputRef?.current.click();
    }
  };

  const onFileInputChange = (e: any) => {
    setMeta(e);
    setShow(true);
  };

  if (!player) {
    return <></>;
  }

  return (
    <>
      <CustomForm
        name="basic"
        onFinish={onFinish}
        initialValues={{
          first_name: player?.user?.first_name ?? "",
          last_name: player?.user?.last_name ?? "",
          bio: player.bio,
          team_id: player.teams[0].id,
          debut_date: player.debut_date ? moment(player.debut_date) : moment(),
          positions: "",
          prev_club: player.prev_club,
        }}
      >
        <ProfileWrapper>
          <Row gap={20}>
            <Col>
              <Row alignItems="flex-start">
                <Avatar src={imageSrc} mode="medium" />
                <input
                  onChange={onFileInputChange}
                  onClick={(event: any) => {
                    event.target.value = null;
                  }}
                  ref={fileInputRef}
                  type="file"
                  style={{ display: "none" }}
                  accept="image/png, image/jpeg"
                />

                {user && (
                  <Button
                    onClick={onTargetClick}
                    bColor="primary"
                    icon={<EditIcon />}
                    disabled={isSubmit}
                    css={{ border: "none" }}
                  />
                )}
              </Row>
            </Col>
            <Col item={20}>
              <Row alignItems="center" justifyContent="space-between">
                <Col>
                  <Row gap={2}>
                    {!flag ? (
                      <>
                        <CustomText strong css={{ fontSize: "24px" }}>
                          {`${player?.user?.first_name ?? ""} ${
                            player?.user?.last_name ?? ""
                          }`}
                        </CustomText>
                      </>
                    ) : (
                      <>
                        <CustomForm.Item
                          name="first_name"
                          rules={[
                            {
                              required: true,
                              message: "First Name is required.",
                            },
                          ]}
                        >
                          <CustomInput
                            placeholder="first name"
                            disabled={isSubmit}
                          />
                        </CustomForm.Item>
                        <CustomForm.Item
                          name="last_name"
                          rules={[
                            {
                              required: true,
                              message: "Last Name is required.",
                            },
                          ]}
                        >
                          <CustomInput
                            placeholder="last name"
                            disabled={isSubmit}
                          />
                        </CustomForm.Item>
                      </>
                    )}
                  </Row>
                </Col>
                <Col>
                  <Row alignItems="center" gap={10}>
                    <CustomText>{"121 Followers"}</CustomText>
                    {!flag ? (
                      <>
                        {user && (
                          <CustomForm.Item>
                            <Button
                              bColor="warning"
                              icon={<EditIcon />}
                              onClick={() => setFlag(true)}
                            >
                              {"Edit"}
                            </Button>
                          </CustomForm.Item>
                        )}
                        <Button bColor="warning" icon={<FiUserPlus />}>
                          {"Follow Player"}
                        </Button>
                        <RWebShare
                          data={{
                            text: "Share Profile",
                            url: `${baseUrl + router.asPath}`,
                            title: `Streamer - ${
                              player?.user?.first_name ?? ""
                            } ${player?.user?.last_name ?? ""}`,
                          }}
                        >
                          <Button
                            bColor="primary"
                            bSize="small"
                            icon={<FiShare2 />}
                          >
                            {"Share"}
                          </Button>
                        </RWebShare>
                      </>
                    ) : (
                      <>
                        <Button
                          type="submit"
                          bColor="warning"
                          icon={isSubmit ? <ButtonLoading /> : <FiSave />}
                          disabled={isSubmit}
                        >
                          {"Save"}
                        </Button>
                        <Button
                          bColor="warning"
                          icon={<ImCancelCircle />}
                          onClick={() => setFlag(false)}
                          disabled={isSubmit}
                        >
                          {"Cancel"}
                        </Button>
                      </>
                    )}
                  </Row>
                </Col>
              </Row>
              <ContentWrapper>
                <Row alignItems="center" justifyContent="space-between">
                  {!flag ? (
                    <CustomText>{player.bio}</CustomText>
                  ) : (
                    <CustomForm.Item name="bio" style={{ width: "100%" }}>
                      <CustomTextArea
                        placeholder="Bio"
                        rows={5}
                        disabled={isSubmit}
                      />
                    </CustomForm.Item>
                  )}
                </Row>
              </ContentWrapper>
            </Col>
          </Row>
        </ProfileWrapper>
        <ClubWrapper>
          <Row gap={50} alignItems="flex-start" justifyContent="center">
            <Col item={8}>
              <Row flexDirection="column">
                <Row alignItems="center" justifyContent="space-between">
                  <CustomText strong css={{ fontSize: "16px" }}>
                    {"Current Club: "}
                  </CustomText>
                  <CustomText>{player.club.name}</CustomText>
                </Row>
                {!flag ? <BottomBorder /> : <br />}
                <Row alignItems="center" justifyContent="space-between">
                  <CustomText strong css={{ fontSize: "16px" }}>
                    {"Teams:"}
                  </CustomText>
                  {!flag ? (
                    player.teams.map((team: { name: string }, idx: number) => (
                      <Button
                        key={`player-team-${idx}`}
                        bColor="warning"
                        disabled={isSubmit}
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
              </Row>
            </Col>
            <Col item={8}>
              <Row flexDirection="column">
                <Row alignItems="center" justifyContent="space-between">
                  <CustomText
                    strong
                    css={{ fontSize: "16px", whiteSpace: "nowrap" }}
                  >
                    {"Debut Date: "}
                  </CustomText>
                  {!flag ? (
                    <CustomText>
                      {player.debut_date
                        ? moment(player.debut_date).format("LL")
                        : ""}
                    </CustomText>
                  ) : (
                    <CustomForm.Item name="debut_date">
                      <CustomDatePicker
                        format={"YYYY/MM/DD"}
                        placeholder="Debut Date"
                        disabled={isSubmit}
                      />
                    </CustomForm.Item>
                  )}
                </Row>
                {!flag ? <BottomBorder /> : <br />}
                <Row alignItems="center" justifyContent="space-between">
                  <CustomText strong css={{ fontSize: "16px" }}>
                    {"Positions: "}
                  </CustomText>
                  {!flag ? (
                    <CustomText>{player.positions.join(", ")}</CustomText>
                  ) : (
                    <CustomForm.Item name="positions">
                      <CustomInput
                        placeholder="positions"
                        disabled={isSubmit}
                      />
                    </CustomForm.Item>
                  )}
                </Row>
              </Row>
            </Col>
            <Col item={8}>
              <Row flexDirection="column">
                <Row alignItems="center" justifyContent="space-between">
                  <CustomText
                    strong
                    css={{ fontSize: "16px", whiteSpace: "nowrap" }}
                  >
                    {"Previous Clubs: "}
                  </CustomText>
                  {!flag ? (
                    <CustomText>{player.prev_club}</CustomText>
                  ) : (
                    <CustomForm.Item name="prev_club">
                      <CustomInput
                        placeholder="Previous Club"
                        disabled={isSubmit}
                      />
                    </CustomForm.Item>
                  )}
                </Row>
                {!flag ? <BottomBorder /> : null}
              </Row>
            </Col>
          </Row>
        </ClubWrapper>
      </CustomForm>
      <ImageCrop_Modal
        show={show}
        meta={meta}
        saveImage={saveImage}
        handleClose={() => setShow(false)}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  teams: state.teams.list,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(IntroSection);

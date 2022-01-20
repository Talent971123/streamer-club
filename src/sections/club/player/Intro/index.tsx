import React, { useContext, useState, useRef } from "react";

import { useMutation } from "@apollo/client";
import { PLAYERQL } from "graphql/club";

import { Text } from "components/Text";
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
  CustomDatePicker,
} from "./Intro.style";

import { Form } from "antd";
import moment from "moment";
import { ImCancelCircle } from "react-icons/im";
import { FiSave, FiShare2, FiUserPlus } from "react-icons/fi";

import EditIcon from "assets/icon/edit";
import { s3UploadFile } from "utils/s3-helper";
import d_photo from "assets/images/player/default-player-image.png";
import { PlayerContext } from "pages/club/[club_slug]/player/[player_slug]";

const IntroSection: React.FC = () => {
  const player = useContext<any>(PlayerContext);

  const [debut, setDebut] = useState<string>(
    new Intl.DateTimeFormat("en-US").format(Date.now())
  );
  const [meta, setMeta] = useState<any>(null);
  const [flag, setFlag] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSubmit, setisSubmit] = useState<boolean>(false);
  const [imageSrc, setiimageSrc] = useState<any>(
    player.image ? player.image : d_photo
  );
  const [store, setStore] = useState<any>(null);

  const [Imageupdate] = useMutation(PLAYERQL.UPDATE_PLAER_BY_ID, {
    onCompleted() {
      setiimageSrc(store);
      setShow(false);
    },
    onError(e) {
      console.log(e);
    },
  });

  const onFinish = async (values: any) => {
    setisSubmit(true);
    await update({
      variables: {
        id: player.id,
        object: {
          ...values,
          debut_date: debut,
          positions: [values.positions],
        },
      },
    });
  };

  const [update] = useMutation(PLAYERQL.UPDATE_PLAER_BY_ID, {
    onCompleted() {
      setisSubmit(false);
      setFlag(false);
    },
    onError(e) {
      setisSubmit(false);
    },
  });

  const saveImage = async (file: File, imageSrc: any) => {
    setStore(imageSrc);

    let image: string | null = null;
    const s3res: any = await s3UploadFile("Players", player.slug, file);
    image = s3res.location;
    await Imageupdate({ variables: { id: player.id, object: { image } } });
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
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={(e: any) => console.log(e)}
        initialValues={{
          first_name: player.first_name,
          last_name: player.last_name,
          bio: player.bio,
          positions: player.positions.join(", "),
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
                <Button
                  onClick={onTargetClick}
                  bColor="primary"
                  icon={<EditIcon />}
                  disabled={isSubmit}
                  css={{ border: "none" }}
                />
              </Row>
            </Col>
            <Col item={20}>
              <Row alignItems="center" justifyContent="space-between">
                <Col>
                  <Row alignItems="flex-start" gap={2}>
                    {!flag ? (
                      <>
                        <Text fWeight={600} fSize={24} fColor="white">
                          {`${player.first_name} ${player.last_name}`}
                        </Text>
                      </>
                    ) : (
                      <>
                        <Form.Item
                          name="first_name"
                          style={{ width: "100%" }}
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
                        </Form.Item>
                        <Form.Item
                          name="last_name"
                          style={{ width: "100%" }}
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
                        </Form.Item>
                      </>
                    )}
                  </Row>
                </Col>
                <Col>
                  <Row alignItems="center" gap={10}>
                    <Text fSize={14}>{"121 Followers"}</Text>
                    {!flag ? (
                      <>
                        <Form.Item>
                          <Button
                            bColor="warning"
                            icon={<EditIcon />}
                            onClick={() => setFlag(true)}
                          >
                            {"Edit"}
                          </Button>
                        </Form.Item>
                        <Button bColor="warning" icon={<FiUserPlus />}>
                          {"Follow Player"}
                        </Button>
                        <Button
                          bColor="primary"
                          bSize="small"
                          icon={<FiShare2 />}
                        >
                          {"Share"}
                        </Button>
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
                    <Text fSize={14} fColor="white">
                      {player.bio}
                    </Text>
                  ) : (
                    <Form.Item name="bio" style={{ width: "100%" }}>
                      <CustomTextArea
                        placeholder="Bio"
                        rows={5}
                        disabled={isSubmit}
                      />
                    </Form.Item>
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
                <Row alignItems="flex-start" justifyContent="space-between">
                  <Text fColor="white" fSize={15} mode="p">
                    <Text
                      fColor="white"
                      fSize={16}
                      mode="span"
                      padding="0 20px 0 0 "
                    >
                      {"Current Club: "}
                    </Text>
                    {player.club.name}
                  </Text>
                </Row>
                {!flag ? <BottomBorder /> : <br />}
                <Row alignItems="center" gap={5}>
                  <Text fSize={16} padding="0 20px 0 0" fColor="white">
                    {"Teams:"}
                  </Text>
                  <Row flexWrap="wrap" gap={10} justifyContent="space-between">
                    {player.teams.map((team: { name: string }, idx: number) => (
                      <Button
                        key={`player-team-${idx}`}
                        bColor="warning"
                        disabled={isSubmit}
                      >
                        {team.name}
                      </Button>
                    ))}
                  </Row>
                </Row>
              </Row>
            </Col>
            <Col item={8}>
              <Row flexDirection="column">
                <Row alignItems="flex-start">
                  <Text
                    fColor="white"
                    fSize={16}
                    mode="span"
                    wSpace
                    padding="0 20px 0 0"
                  >
                    {"Debut Date: "}
                  </Text>
                  {!flag ? (
                    <Text fColor="white" fSize={15}>
                      {moment(player.debut_date).format("LL")}
                    </Text>
                  ) : (
                    <CustomDatePicker
                      format={"YYYY/MM/DD"}
                      placeholder="Debut Date"
                      defaultValue={moment(player.debut_date)}
                      disabled={isSubmit}
                      onChange={(e, date) => {
                        setDebut(date);
                      }}
                    />
                  )}
                </Row>
                {!flag ? <BottomBorder /> : null}

                <Row alignItems="flex-start">
                  <Text
                    fColor="white"
                    fSize={16}
                    mode="span"
                    padding="0 20px 0 0 "
                  >
                    {"Positions: "}
                  </Text>
                  {!flag ? (
                    <Text fColor="white" fSize={15}>
                      {player.positions.join(", ")}
                    </Text>
                  ) : (
                    <Form.Item name="positions" style={{ width: "100%" }}>
                      <CustomInput
                        placeholder="positions"
                        disabled={isSubmit}
                      />
                    </Form.Item>
                  )}
                </Row>
              </Row>
            </Col>
            <Col item={8}>
              <Row flexDirection="column">
                <Row alignItems="flex-start" justifyContent="space-between">
                  <Text
                    fColor="white"
                    fSize={16}
                    mode="span"
                    wSpace
                    padding="0 20px 0 0 "
                  >
                    {"Previous Clubs: "}
                  </Text>
                  {!flag ? (
                    <Text fColor="white" fSize={15}>
                      {player.prev_club}
                    </Text>
                  ) : (
                    <Form.Item name="prev_club" style={{ width: "100%" }}>
                      <CustomInput
                        placeholder="Previous Club"
                        disabled={isSubmit}
                      />
                    </Form.Item>
                  )}
                </Row>
                {!flag ? <BottomBorder /> : null}
              </Row>
            </Col>
          </Row>
        </ClubWrapper>
      </Form>
      <ImageCrop_Modal
        show={show}
        meta={meta}
        saveImage={saveImage}
        handleClose={() => setShow(false)}
      />
    </>
  );
};

export default IntroSection;

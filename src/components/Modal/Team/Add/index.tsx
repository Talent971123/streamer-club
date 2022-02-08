import React, { useState, useRef, useContext } from "react";
import { useMutation } from "@apollo/client";
import { ADMINQL } from "graphql/club";
// components
import { Text } from "components/Text";
import { Col, Row } from "components/Layout";
import { Avatar } from "components/Avatar";
import { Button } from "components/Button";
//  styled components
import {
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalWrapper,
  CustomSelect,
  CustomeInput,
  CustomText,
} from "../index.style";
//  type
import { ImageCrop_Modal } from "components/Modal";
import { ModalProps } from "types/components/Modal";
import ButtonLoading from "components/Loading/ButtonLoading";
//  utils
import { BsSave } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";

import {
  ClubAdminContext,
  ClubLeagueContext,
} from "pages/club/[club_slug]/admin";

import _ from "lodash";
import { Form } from "antd";
import { v4 as uuidv4 } from "uuid";
import { s3UploadFile } from "utils/s3-helper";
import photo from "assets/images/player/default-player-image.png";

const { Option } = CustomSelect;

const Team_A_Modal: React.FC<ModalProps> = ({ show = false, handleClose }) => {
  const league = useContext(ClubLeagueContext);
  const club = useContext(ClubAdminContext);

  const leagueData = league
    ? league.map((item: any) => ({ label: item.name, value: item.id }))
    : [];

  const [form] = Form.useForm();
  const [meta, setMeta] = useState<any>(null);
  const [flag, setFlag] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [croppedImage, setCroppedImage] = useState<any>(photo);
  const [isSubmit, setSubmiting] = useState<boolean>(false);
  const [file, setFile] = useState<any>(null);

  const [add] = useMutation(ADMINQL.ADD_TEAM, {
    onCompleted() {
      setFile(null);
      form.resetFields();
      setCroppedImage(photo);
      handleClose && handleClose();
    },
    onError(e) {
      console.log("error", e);
    },
  });

  const onTargetClick = () => {
    if (fileInputRef && fileInputRef.current) {
      fileInputRef?.current.click();
    }
  };

  const onFileInputChange = (e: any) => {
    setMeta(e);
    setFlag(true);
  };

  const onFinish = async (values: any) => {
    setSubmiting(true);
    const slug = uuidv4();
    let image: string | null = null;

    if (!_.isNull(file)) {
      // const s3res: any = await s3UploadFile("Teams", slug, file);
      // image = s3res.location;
      image = "s3res.location";
    }

    console.log({
      club_id: club.id,
      image,
      league_id: values.league,
      name: values.team_name,
      slug,
      division: values.team_name,
      players: values.players,
      admins: values.admins
        ? values.admins.map((item: any) => ({
            id: item.split("/")[1],
            mail: item.split("/")[0],
          }))
        : [],
    });

    // await add({
    //   variables: {
    //     objects: {
    //       club_id: club.id,
    //       image,
    //       league_id: values.league,
    //       name: values.team_name,
    //       slug,
    //       division: values.division,
    //       // players: values.players,
    //     },
    //   },
    // });
    setSubmiting(false);
  };

  const _handleClose = () => {
    setFile(null);
    form.resetFields();
    setCroppedImage(photo);
    handleClose && handleClose();
  };

  const saveImage = async (file: File, imageSrc: any) => {
    setFile(file);
    setCroppedImage(imageSrc);
  };

  return (
    <ModalWrapper show={show}>
      <Form
        name="basic"
        form={form}
        onFinish={onFinish}
        layout="vertical"
        css={{ color: "white" }}
      >
        <ModalContent show={show}>
          <ModalHeader>
            <CustomText strong css={{ fontSize: "22px" }}>
              {"Add Team"}
            </CustomText>
          </ModalHeader>
          <ModalBody>
            <Row flexDirection="column" gap={30}>
              <Row flexDirection="row" gap={50}>
                <Col item={12}>
                  <Row
                    flexDirection="column"
                    justifyContent="flex-start"
                    gap={10}
                  >
                    <Form.Item
                      name="team_name"
                      rules={[
                        { required: true, message: "Team Name is required." },
                      ]}
                      label={
                        <label style={{ color: "white" }}>{"Team Name"}</label>
                      }
                    >
                      <CustomeInput placeholder="Team Name" />
                    </Form.Item>

                    <Form.Item
                      name="league"
                      label={
                        <label style={{ color: "white" }}>{"League"}</label>
                      }
                    >
                      <CustomSelect placeholder="League" options={leagueData} />
                    </Form.Item>
                    <Form.Item
                      name="division"
                      label={
                        <label style={{ color: "white" }}>{"Division"}</label>
                      }
                    >
                      <CustomeInput placeholder="Division" />
                    </Form.Item>
                    <Form.Item
                      name="players"
                      label={
                        <label style={{ color: "white" }}>
                          {"Add Player(s)"}
                        </label>
                      }
                    >
                      <CustomSelect placeholder="Add Players" mode="multiple">
                        {club?.players
                          ? club.players.map((player: any) => (
                              <Option key={`dropdown-${player.id}`}>
                                {player.first_name + " " + player.last_name}
                              </Option>
                            ))
                          : []}
                      </CustomSelect>
                    </Form.Item>

                    <Form.Item
                      name="admins"
                      label={
                        <label style={{ color: "white" }}>
                          {"Team Admin(s)"}
                        </label>
                      }
                    >
                      <CustomSelect
                        placeholder="Add Team Admins"
                        mode="multiple"
                      >
                        {club?.players
                          ? club.players.map((player: any) => (
                              <Option key={player.email + "/" + player.id}>
                                {player.email}
                              </Option>
                            ))
                          : []}
                      </CustomSelect>
                    </Form.Item>
                  </Row>
                </Col>
                <Col item={12}>
                  <Row flexDirection="column" gap={30}>
                    <CustomText>{"Team Photo"}</CustomText>
                    <Row flexDirection="column" alignItems="center" gap={15}>
                      <Avatar src={croppedImage} mode="big" radius="small" />
                      <Button
                        bColor="primary"
                        bSize="small"
                        type="button"
                        disabled={isSubmit}
                        onClick={onTargetClick}
                      >
                        {"Upload Photo"}
                      </Button>
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
                    </Row>
                    <Row flexDirection="column" gap={10}>
                      <Text fSize={16} fWeight={700} mode="p"></Text>
                      <CustomText css={{ fontSize: "15px", fontWeight: 700 }}>
                        {"Photo Guidelines:"}
                      </CustomText>
                      <ul>
                        <li>
                          <CustomText>
                            {"Accepted file formats:JPG, PNG, SVG"}
                          </CustomText>
                        </li>
                        <li>
                          <CustomText>{"Maximum file size: 25MB"}</CustomText>
                        </li>
                        <li>
                          <CustomText>
                            {"Minimum dimensions: 300 x 300px"}
                          </CustomText>
                        </li>
                      </ul>
                    </Row>
                  </Row>
                </Col>
              </Row>
              <Row>
                <ul>
                  <li>
                    <CustomText>
                      {"Team Admin will be notified by email."}
                    </CustomText>
                  </li>
                  <li>
                    <CustomText>
                      {
                        "If no Streamer account exists for this email, an invite to Sign Up will be sent to this email."
                      }
                    </CustomText>
                  </li>
                  <li>
                    <CustomText>
                      {
                        "Team Admin will be able to add / modify / remove Players, Matches, Results and Team Details for this team. Club Admin is administrator for this team by default."
                      }
                    </CustomText>
                  </li>
                </ul>
              </Row>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button
              bSize="small"
              type="button"
              bColor="primary"
              disabled={isSubmit}
              onClick={_handleClose}
              icon={<ImCancelCircle />}
            >
              {"Cancel"}
            </Button>
            <Button
              bColor="primary"
              bSize="small"
              type="submit"
              disabled={isSubmit}
              icon={isSubmit ? <ButtonLoading /> : <BsSave />}
            >
              {"Save"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Form>
      <ImageCrop_Modal
        show={flag}
        meta={meta}
        cropShape="rect"
        saveImage={saveImage}
        handleClose={() => setFlag(false)}
      />
    </ModalWrapper>
  );
};

export default Team_A_Modal;

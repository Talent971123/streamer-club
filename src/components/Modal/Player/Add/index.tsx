import React, { useContext, useRef, useState } from "react";

import { useMutation } from "@apollo/client";
import { ADMINQL } from "graphql/club";
// assets
import { Avatar } from "components/Avatar";
import { Button } from "components/Button";
import { Col, Row } from "components/Layout";
import { ClubAdminContext } from "pages/club/[club_slug]/admin";
import { ImageCrop_Modal } from "components/Modal";
// types
import { ModalProps } from "types/components/Modal";
// utils
import { s3UploadFile } from "utils/s3-helper";
// common
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import { BsSave } from "react-icons/bs";
import PhoneInput from "react-phone-input-2";
import { ImCancelCircle } from "react-icons/im";

import photo from "assets/images/layout/group.png";

import {
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalWrapper,
  phone_inputStyle,
  phone_dropstyle,
  CustomSelect,
  CustomeInput,
  CustomText,
} from "../index.style";

import { Form } from "antd";
import ButtonLoading from "components/Loading/ButtonLoading";

const Player_A_Modal: React.FC<ModalProps> = ({
  show = false,
  handleClose,
}) => {
  const [form] = Form.useForm();
  const club = useContext(ClubAdminContext);
  const teamsData = club?.teams
    ? club.teams.map((team) => ({ label: team.name, value: team.id }))
    : [];

  // useState
  const [meta, setMeta] = useState<any>(null);
  const [file, setFile] = useState<any>(null);
  const [flag, setFlag] = useState<boolean>(false);
  const [isSubmit, setSubmiting] = useState<boolean>(false);
  const [croppedImage, setCroppedImage] = useState<any>(photo);
  // useRef
  const fileInputRef = useRef<HTMLInputElement>(null);
  // **
  const [add] = useMutation(ADMINQL.ADD_PLAYER, {
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

  const onFinish = async (values: any) => {
    setSubmiting(true);
    console.log(values);
    const slug = uuidv4();
    let image: string | null = null;

    if (!_.isNull(file)) {
      const s3res: any = await s3UploadFile("Players", slug, file);
      image = s3res.location;
    }

    await add({
      variables: {
        objects: {
          ...values,
          slug,
          image,
          club_id: club.id,
          positions: [values.positions],
          prev_club: "",
        },
      },
    });

    setSubmiting(false);
  };

  const saveImage = async (file: File, imageSrc: any) => {
    setFile(file);
    setCroppedImage(imageSrc);
  };
  const onFileInputChange = (e: any) => {
    setMeta(e);
    setFlag(true);
  };
  const _handleClose = () => {
    setFile(null);
    form.resetFields();
    setCroppedImage(photo);
    handleClose && handleClose();
  };
  const onTargetClick = () => {
    if (fileInputRef && fileInputRef.current) {
      fileInputRef?.current.click();
    }
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
              {"Add Player"}
            </CustomText>
          </ModalHeader>
          <ModalBody>
            <Row flexDirection="row" gap={30}>
              <Col item={12}>
                <Row flexDirection="column" gap={10}>
                  <Form.Item
                    name="first_name"
                    rules={[
                      { required: true, message: "First Name is required." },
                    ]}
                    label={
                      <label style={{ color: "white" }}>{"First Name"}</label>
                    }
                  >
                    <CustomeInput placeholder="First Name" />
                  </Form.Item>
                  <Form.Item
                    name="last_name"
                    rules={[
                      { required: true, message: "Last Name is required." },
                    ]}
                    label={
                      <label style={{ color: "white" }}>{"Last Name"}</label>
                    }
                  >
                    <CustomeInput placeholder="Last Name" />
                  </Form.Item>
                  <Form.Item
                    name="mobile"
                    rules={[
                      { required: true, message: "Mobile Number is required." },
                      {
                        min: 10,
                        message: "The number is not valid",
                      },
                    ]}
                    label={
                      <label style={{ color: "white" }}>
                        {"Mobile Number"}
                      </label>
                    }
                  >
                    <PhoneInput
                      country={"us"}
                      inputStyle={phone_inputStyle}
                      dropdownStyle={phone_dropstyle}
                      specialLabel={"Player Mobile Number"}
                    />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        type: "email",
                        message: "The input is not valid E-mail!",
                      },
                    ]}
                    label={
                      <label style={{ color: "white" }}>
                        {"Email Address"}
                      </label>
                    }
                  >
                    <CustomeInput placeholder="Email" />
                  </Form.Item>
                  <Form.Item
                    name="team_id"
                    label={
                      <label style={{ color: "white" }}>
                        {" "}
                        {"Primary Team"}
                      </label>
                    }
                  >
                    <CustomSelect
                      placeholder="Primary Team"
                      options={teamsData}
                    />
                  </Form.Item>
                  <Form.Item
                    name="positions"
                    label={
                      <label style={{ color: "white" }}>{"Position"}</label>
                    }
                  >
                    <CustomeInput placeholder="Position" />
                  </Form.Item>
                </Row>
              </Col>
              <Col item={12}>
                <Row flexDirection="column" gap={30}>
                  <CustomText>{"Player Photo"}</CustomText>
                  <Row flexDirection="column" alignItems="center" gap={15}>
                    <Avatar src={croppedImage} mode="medium" />
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
                    <ul>
                      <li>
                        <CustomText>
                          {"Accepted file formats:JPG, PNG, SVG"}
                        </CustomText>
                      </li>
                      <li>
                        <CustomText>{"Maximum file size: 25MB"} </CustomText>
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
          </ModalBody>
          <ModalFooter>
            <Button
              bColor="primary"
              bSize="small"
              icon={<ImCancelCircle />}
              type="button"
              disabled={isSubmit}
              onClick={_handleClose}
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
        saveImage={saveImage}
        handleClose={() => setFlag(false)}
      />
    </ModalWrapper>
  );
};

export default Player_A_Modal;

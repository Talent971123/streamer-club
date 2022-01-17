import React, { useCallback, useContext, useRef, useState } from "react";

import { useMutation, useQuery } from "@apollo/client";
import { ADMINQL, PLAYERQL } from "graphql/club";
// assets
import photo from "assets/images/layout/group.png";
import { Avatar } from "components/Avatar";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { Col, Row } from "components/Layout";
import { Text } from "components/Text";
import { ClubAdminContext } from "pages/club/[club_slug]/admin";
// types
import { PlayerFormValues } from "types/common/player";
import { EditProps } from "types/components/Modal";
// utils
import { getCroppedImg, getRotatedImage } from "utils/canvasUtils";
import { PlayerSchema } from "utils/validation-schema";
import { s3UploadFile } from "utils/s3-helper";
// common
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import Cropper from "react-easy-crop";
import { BsSave } from "react-icons/bs";
import PhoneInput from "react-phone-input-2";
import { ImCancelCircle } from "react-icons/im";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getOrientation } from "get-orientation/browser";

import {
  ImageContent,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalWrapper,
  NumberRange,
  phone_inputStyle,
  phone_dropstyle,
  CustomSelect,
} from "../index.style";
import ButtonLoading from "components/Loading/ButtonLoading";

const ORIENTATION_TO_ANGLE = {
  "3": 180,
  "6": 90,
  "8": -90,
};

const Player_U_Modal: React.FC<EditProps> = ({
  show = false,
  pid,
  handleClose,
}) => {
  // const { data, loading } = useQuery(PLAYERQL.GET_PLAYER_BY_ID, {
  //   variables: {
  //     id: pid,
  //   },
  // });
  const club = useContext(ClubAdminContext);
  const teamsData: any = club.teams
    ? club.teams.map((team) => ({ label: team.name, value: team.id }))
    : [];
  const formData: any = club.players
    ? club.players.find((player) => pid === player.id)
    : [];

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PlayerFormValues>({
    resolver: yupResolver(PlayerSchema),
    defaultValues: {
      first_name: formData.first_name,
      last_name: formData.last_name,
      mobile: formData.mobile,
      email: formData.email,
      team_id: teamsData.find((team) => team.value === formData.team_id),
      club_id: formData.club_id,
      positions: formData.positions,
    },
  });

  const [imageSrc, setImageSrc] = useState<any>(
    _.isEmpty(formData) ? photo : formData.image
  );
  const [load, setLoad] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState<any>(
    _.isEmpty(formData) ? photo : formData.image
  );
  const [file, setFile] = useState<any>(null);

  const _handleClose = () => {
    reset();
    handleClose && handleClose();
  };
  // mutations
  const [add] = useMutation(ADMINQL.ADD_PLAYER, {
    onCompleted() {
      /** TODO: add notifications */
      handleClose && handleClose();
      reset();
    },
    onError(e) {
      console.log("error", e);
    },
  });

  const saveObject = async (objects: any) => {
    /** TODO: Edit */
    await add({ variables: { objects } });
  };

  // functions

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation
      );

      setCroppedImage(croppedImage);

      /* convert blob to File */
      await fetch(croppedImage)
        .then((res) => res.blob())
        .then(async (myBlob) => {
          const myFile = new File([myBlob], file.name, {
            type: file.type,
          });
          setFile(myFile);
        });

      setLoad(false);
    } catch (e) {
      console.error(e);
    }
  }, [imageSrc, croppedAreaPixels, rotation]);

  const onFileInputChange = async (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);
      // apply rotation if needed
      const orientation = await getOrientation(file);
      const rotation = ORIENTATION_TO_ANGLE[orientation];

      setFile(file);

      if (rotation) {
        imageDataUrl = await getRotatedImage(imageDataUrl, rotation);
      }
      setImageSrc(imageDataUrl);
      setLoad(true);
    }
  };

  const onTargetClick = () => {
    if (fileInputRef && fileInputRef.current) {
      fileInputRef?.current.click();
    }
  };

  const onSubmit = handleSubmit(async (data: any) => {
    console.log(data);
    // const slug = uuidv4();
    // let image: string | null = null;
    // if (!_.isNull(file)) {
    //   const s3res: any = await s3UploadFile("Players", slug, file);
    //   image = s3res.location;
    // }
    // await saveObject({
    //   ...data,
    //   image,
    //   club_id: club.id,
    //   team_id: data.team_id === undefined ? null : data.team_id.value,
    //   positions: [data.positions],
    //   slug,
    //   prev_club: "",
    // });
  });

  return (
    <ModalWrapper show={show}>
      {!load ? (
        <ModalContent show={show}>
          <form onSubmit={onSubmit}>
            <ModalHeader>
              <Text fSize={22} fWeight={600}>
                {"Edit Player"}
              </Text>
            </ModalHeader>
            <ModalBody>
              <Row flexDirection="row" gap={30}>
                <Col item={12}>
                  <Row flexDirection="column" gap={10}>
                    <Col>
                      <Text fSize={14}>{"Player First Name *"}</Text>
                      <Text fColor="red.100" padding="0 0 7px 0">
                        {errors.first_name?.message}
                      </Text>
                      <Input
                        iColor="primary"
                        iSize="small"
                        iFont="normal"
                        iRadius="small"
                        placeholder="First Name"
                        {...register("first_name")}
                      />
                    </Col>
                    <Col>
                      <Text fSize={14} padding="0 0 7px 0">
                        {"Player Last Name *"}
                      </Text>
                      <Text fColor="red.100" padding="0 0 7px 0">
                        {errors.last_name?.message}
                      </Text>
                      <Input
                        iColor="primary"
                        iSize="small"
                        iFont="normal"
                        iRadius="small"
                        placeholder="Last Name"
                        {...register("last_name")}
                      />
                    </Col>
                    <Col>
                      <Text fSize={14} padding="0 0 7px 0">
                        {"Mobile Number *"}
                      </Text>
                      <Text fColor="red.100" padding="0 0 7px 0">
                        {errors.mobile?.message}
                      </Text>
                      <Controller
                        control={control}
                        name="mobile"
                        rules={{ required: true }}
                        render={({ field: { ...field } }) => (
                          <PhoneInput
                            {...field}
                            country={"us"}
                            inputStyle={phone_inputStyle}
                            dropdownStyle={phone_dropstyle}
                            specialLabel={"Player Mobile Number"}
                          />
                        )}
                      />
                    </Col>
                    <Col>
                      <Text fSize={14} padding="0 0 7px 0">
                        {"Email Address *"}
                      </Text>
                      <Text fColor="red.100" padding="0 0 7px 0">
                        {errors.email?.message}
                      </Text>
                      <Input
                        iColor="primary"
                        iSize="small"
                        iFont="normal"
                        iRadius="small"
                        placeholder="Email Address"
                        {...register("email")}
                      />
                    </Col>
                    <Col>
                      <Text fSize={14} padding="0 0 7px 0">
                        {"Primary Team"}
                      </Text>

                      <Controller
                        name="team_id"
                        render={({ field }) => (
                          <CustomSelect {...field} options={teamsData} />
                        )}
                        control={control}
                      />
                    </Col>
                    <Col>
                      <Text fSize={14} padding="0 0 7px 0">
                        {"Position"}
                      </Text>
                      <Input
                        iColor="primary"
                        iSize="small"
                        iFont="normal"
                        iRadius="small"
                        placeholder="Position"
                        {...register("positions")}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col item={12}>
                  <Row flexDirection="column" gap={30}>
                    <Text fSize={15} mode="p">
                      {"Player Photo"}
                    </Text>
                    <Row flexDirection="column" alignItems="center" gap={15}>
                      <Avatar src={croppedImage} mode="medium" />
                      <Button
                        bColor="primary"
                        bSize="small"
                        onClick={onTargetClick}
                        type="button"
                      >
                        {"Upload Photo"}
                      </Button>
                      <input
                        onChange={onFileInputChange}
                        ref={fileInputRef}
                        type="file"
                        style={{ display: "none" }}
                        accept="image/png, image/jpeg"
                      />
                    </Row>
                    <Row flexDirection="column" gap={10}>
                      <ul>
                        <li>
                          <Text fSize={14}>
                            {"Accepted file formats:JPG, PNG, SVG"}
                          </Text>
                        </li>
                        <li>
                          <Text fSize={14}>{"Maximum file size: 25MB"}</Text>
                        </li>
                        <li>
                          <Text fSize={14}>
                            {"Minimum dimensions: 300 x 300px"}
                          </Text>
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
                onClick={_handleClose}
                type="button"
              >
                {"Cancel"}
              </Button>
              <Button
                bColor="primary"
                bSize="small"
                type="submit"
                disabled={isSubmitting}
                icon={isSubmitting ? <ButtonLoading /> : <BsSave />}
              >
                {"Save"}
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      ) : (
        <ModalContent show={true}>
          <ModalHeader>
            <Text fSize={22} fWeight={600}>
              {"Crop Photo"}
            </Text>
          </ModalHeader>
          <ModalBody>
            <ImageContent>
              <Cropper
                image={imageSrc}
                crop={crop}
                rotation={rotation}
                zoom={zoom}
                cropShape="round"
                aspect={1}
                onCropChange={setCrop}
                onRotationChange={setRotation}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
              />
            </ImageContent>
            <Row
              justifyContent="space-between"
              flexDirection="column"
              padding="20px 0 0 0"
            >
              <Row gap={10}>
                <Col item={5}>
                  <Text fSize={14} tAlign="right">
                    {"Zoom"}
                  </Text>
                </Col>
                <NumberRange
                  type="range"
                  value={zoom}
                  min={1}
                  max={10}
                  aria-labelledby="Zoom"
                  onChange={(e) => setZoom(parseInt(e.target.value))}
                ></NumberRange>
              </Row>

              <Row gap={10}>
                <Col item={5}>
                  <Text fSize={14} tAlign="right">
                    {"Rotation"}
                  </Text>
                </Col>
                <NumberRange
                  type="range"
                  value={rotation}
                  min={0}
                  max={360}
                  step={1}
                  aria-labelledby="Rotation"
                  onChange={(e) => setRotation(parseInt(e.target.value))}
                ></NumberRange>
              </Row>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button
              bColor="primary"
              bSize="small"
              icon={<ImCancelCircle />}
              onClick={() => setLoad(false)}
            >
              {"Cancel"}
            </Button>
            <Button
              bColor="primary"
              bSize="small"
              icon={<BsSave />}
              onClick={showCroppedImage}
            >
              {"Save"}
            </Button>
          </ModalFooter>
        </ModalContent>
      )}
    </ModalWrapper>
  );
};

const readFile = (file: any) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
};

export default Player_U_Modal;

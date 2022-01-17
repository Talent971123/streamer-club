import React, { useState, useRef, useCallback } from "react";
// assets
import photo from "assets/images/layout/group.png";
import { Text } from "components/Text";
import { Col, Row } from "components/Layout";
import { Input } from "components/Input";
import { Avatar } from "components/Avatar";
import { Button } from "components/Button";
//  styled components
import {
  ImageContent,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalWrapper,
  NumberRange,
  StyledSelect,
} from "./index.style";
//  type
import { ModalProps } from "types/components/Modal";
//  utils
import { getCroppedImg, getRotatedImage } from "utils/canvasUtils";
import { getOrientation } from "get-orientation/browser";
import { BsSave } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import Cropper from "react-easy-crop";

const { Option } = StyledSelect;

const ORIENTATION_TO_ANGLE = {
  "3": 180,
  "6": 90,
  "8": -90,
};

const TeamModal: React.FC<ModalProps> = ({ show = false, handleClose }) => {
  const [imageSrc, setImageSrc] = useState<any>(null);
  const [file, setFile] = useState<any>(null);
  const [load, setLoad] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState<number>(0);
  const [zoom, setZoom] = useState<number>(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [croppedImage, setCroppedImage] = useState<any>(photo);

  //    define methods

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

      setFile(file);

      // apply rotation if needed
      const orientation = await getOrientation(file);
      const rotation = ORIENTATION_TO_ANGLE[orientation];

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

  //    Select Options
  const children = [];
  for (let i = 10; i < 36; i++) {
    // children.push(<Option key={i}>{toString("Player") + i}</Option>);
  }

  return (
    <ModalWrapper show={show}>
      {!load ? (
        <ModalContent show={show}>
          <ModalHeader>
            <Text fSize={22} fWeight={600}>
              {"Add Team"}
            </Text>
          </ModalHeader>
          <ModalBody>
            <Row flexDirection="column" gap={30}>
              <Row flexDirection="row" gap={30}>
                <Col item={12}>
                  <Row flexDirection="column" justifyContent="center" gap={10}>
                    <Col>
                      <Text fSize={14} padding="0 0 7px 0">
                        {"Team Name"}
                      </Text>
                      <Input
                        iColor="primary"
                        iSize="small"
                        iFont="normal"
                        iRadius="small"
                        placeholder="Team Name"
                        name="name"
                      />
                    </Col>
                    <Col>
                      <Text fSize={14} padding="0 0 7px 0">
                        {"League"}
                      </Text>
                      <Input
                        iColor="primary"
                        iSize="small"
                        iFont="normal"
                        iRadius="small"
                        placeholder="League"
                      />
                    </Col>
                    <Col>
                      <Text fSize={14} padding="0 0 7px 0">
                        {"Add Players"}
                      </Text>
                      <StyledSelect
                        mode="tags"
                        placeholder="Add Players"
                        onChange={() => console.log("log")}
                      >
                        {children}
                      </StyledSelect>
                    </Col>
                    <Col>
                      <Text fSize={14} padding="0 0 7px 0">
                        {"Team Admin(s)"}
                      </Text>
                      <Input
                        iColor="primary"
                        iSize="small"
                        iFont="normal"
                        iRadius="small"
                        placeholder="Team Admin(s)"
                      />
                    </Col>
                  </Row>
                </Col>
                <Col item={12}>
                  <Row flexDirection="column" gap={30}>
                    <Text fSize={15} mode="p">
                      {"Team Photo"}
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
                      <Text fSize={15} fWeight={700} mode="p">
                        {"Photo Guidelines:"}
                      </Text>
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
              <Row>
                <ul>
                  <li>
                    <Text fSize={14}>
                      {"Team Admin will be notified by email."}
                    </Text>
                  </li>
                  <li>
                    <Text fSize={14}>
                      {
                        "If no Streamer account exists for this email, an invite to Sign Up will be sent to this email."
                      }
                    </Text>
                  </li>
                  <li>
                    <Text fSize={14}>
                      {
                        "Team Admin will be able to add / modify / remove Players, Matches, Results and Team Details for this team. Club Admin is administrator for this team by default."
                      }
                    </Text>
                  </li>
                </ul>
              </Row>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button
              bColor="primary"
              bSize="small"
              icon={<ImCancelCircle />}
              onClick={handleClose}
              type="button"
            >
              {"Cancel"}
            </Button>
            <Button
              bColor="primary"
              bSize="small"
              type="submit"
              icon={<BsSave />}
            >
              {"Save"}
            </Button>
          </ModalFooter>
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

export default TeamModal;

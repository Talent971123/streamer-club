import React, { useState, useRef, useCallback } from "react";

import {
  ModalWrapper,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ImageContent,
  NumberRange,
} from "./index.style";

import { Button } from "components/Button";
import { Text } from "components/Text";
import { Col, Row } from "components/Layout";
import { Input } from "components/Input";
import { Avatar } from "components/Avatar";

import Cropper from "react-easy-crop";
import { getOrientation } from "get-orientation/browser";
// utils
import { getCroppedImg, getRotatedImage } from "utils/canvasUtils";
//
import { BsSave } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
// types
import { ModalProps } from "types/components/Modal";
// assets
import photo from "assets/images/layout/group.png";

const ORIENTATION_TO_ANGLE = {
  "3": 180,
  "6": 90,
  "8": -90,
};

const PlayerModal: React.FC<ModalProps> = ({ show = false, handleClose }) => {
  const [imageSrc, setImageSrc] = useState<any>(photo);
  const [load, setLoad] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState<any>(photo);

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
      console.log("donee", { croppedImage });
      setCroppedImage(croppedImage);
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

  return (
    <ModalWrapper show={show}>
      {!load ? (
        <ModalContent show={show}>
          <ModalHeader>
            <Text fSize={22} fWeight={600}>
              {"Add Player"}
            </Text>
          </ModalHeader>
          <ModalBody>
            <Row flexDirection="row" padding="15px 0 0 0" gap={30}>
              <Col item={12}>
                <Row flexDirection="column" justifyContent="center" gap={10}>
                  <Col>
                    <Text fSize={14} padding="0 0 7px 0">
                      {"Player First Name"}
                    </Text>
                    <Input
                      iColor="primary"
                      iSize="small"
                      iFont="normal"
                      iRadius="small"
                      placeholder="First Name"
                    />
                  </Col>
                  <Col>
                    <Text fSize={14} padding="0 0 7px 0">
                      {"Player Last Name"}
                    </Text>
                    <Input
                      iColor="primary"
                      iSize="small"
                      iFont="normal"
                      iRadius="small"
                      placeholder="Last Name"
                    />
                  </Col>
                  <Col>
                    <Text fSize={14} padding="0 0 7px 0">
                      {"Mobile Number"}
                    </Text>
                    <Input
                      iColor="primary"
                      iSize="small"
                      iFont="normal"
                      iRadius="small"
                      placeholder="Mobile Number"
                    />
                  </Col>
                  <Col>
                    <Text fSize={14} padding="0 0 7px 0">
                      {"Email Address"}
                    </Text>
                    <Input
                      iColor="primary"
                      iSize="small"
                      iFont="normal"
                      iRadius="small"
                      placeholder="Email Address"
                    />
                  </Col>
                  <Col>
                    <Text fSize={14} padding="0 0 7px 0">
                      {"Primary Team"}
                    </Text>
                    <Input
                      iColor="primary"
                      iSize="small"
                      iFont="normal"
                      iRadius="small"
                      placeholder="Team"
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
              onClick={handleClose}
            >
              {"Cancel"}
            </Button>
            <Button bColor="primary" bSize="small" icon={<BsSave />}>
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

export default PlayerModal;

import React, { useCallback, useState, useEffect } from "react";
// assets
import { Text } from "components/Text";

import { Button } from "components/Button";
import { Col, Row } from "components/Layout";
// types
import { ImageCropProps } from "types/components/Modal";
import { toast } from "react-toastify";
// common
import Cropper from "react-easy-crop";
import { BsSave } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import { getCroppedImg, getRotatedImage } from "utils/canvasUtils";

import ButtonLoading from "components/Loading/ButtonLoading";

import {
  ImageContent,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalWrapper,
  NumberRange,
} from "./index.style";

import _ from "lodash";
import photo from "assets/images/layout/group.png";
import { getOrientation } from "get-orientation/browser";

const ORIENTATION_TO_ANGLE = {
  "3": 180,
  "6": 90,
  "8": -90,
};

const ImageCrop_Modal: React.FC<ImageCropProps> = ({
  show = false,
  handleClose,
  meta,
  saveImage,
  cropShape = "round",
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [imageSrc, setImageSrc] = useState<any>(photo);
  const [file, setFile] = useState<any>(null);
  const [isSubmit, setisSubmit] = useState<boolean>(false);
  const [cropImage, setCropImage] = useState<any>(null);
  const [flag, setFlag] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      await saveImage(file, cropImage)
        .then(() => {
          setFile(null);
          setFlag(false);
          handleClose && handleClose();
        })
        .catch((e: any) => toast.error("Error happened."));
    };
    if (!_.isNull(file)) {
      fetchData();
    }
  }, [flag]);

  useEffect(() => {
    const onFilterFile = async (meta: any) => {
      if (meta) {
        if (meta.target.files && meta.target.files.length > 0) {
          const file = meta.target.files[0];
          let imageDataUrl = await readFile(file);
          const orientation = await getOrientation(file);
          const rotation = ORIENTATION_TO_ANGLE[orientation];

          setFile(file);

          if (rotation) {
            imageDataUrl = await getRotatedImage(imageDataUrl, rotation);
          }

          setImageSrc(imageDataUrl);
        }
      }
    };
    onFilterFile(meta).catch(() => toast.error("Error happened."));
  }, [meta]);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    setisSubmit(true);
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation
      );

      await fetch(croppedImage)
        .then((res) => res.blob())
        .then(async (myBlob) => {
          const myFile = new File([myBlob], file.name, {
            type: file.type,
          });
          setFile(myFile);
        });
      setCropImage(croppedImage);
      setFlag(true);
    } catch (e) {
      toast.error("Error Happened.");
    } finally {
      setisSubmit(false);
    }
  }, [imageSrc, croppedAreaPixels, rotation]);

  if (!meta) {
    return <></>;
  }

  return (
    <ModalWrapper show={show}>
      <ModalContent show={show}>
        <ModalHeader>
          <Text fSize={1.375} fWeight={600}>
            {"Edit Photo"}
          </Text>
        </ModalHeader>
        <ModalBody>
          <ImageContent>
            <Cropper
              image={imageSrc}
              crop={crop}
              rotation={rotation}
              zoom={zoom}
              cropShape={cropShape}
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
                <Text fSize={0.875} tAlign="right">
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
                <Text fSize={0.875} tAlign="right">
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
            disabled={isSubmit}
            onClick={() => handleClose && handleClose()}
          >
            {"Cancel"}
          </Button>
          <Button
            bColor="primary"
            bSize="small"
            disabled={isSubmit}
            icon={isSubmit ? <ButtonLoading /> : <BsSave />}
            onClick={showCroppedImage}
          >
            {"Save"}
          </Button>
        </ModalFooter>
      </ModalContent>
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

export default ImageCrop_Modal;

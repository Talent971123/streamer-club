import React, { useState, useRef } from "react";

import {
  ModalWrapper,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  UploadWrapper,
} from "./index.style";

import { Button } from "components/Button";
import { Text } from "components/Text";
import { Col, Row } from "components/Layout";
import { Input } from "components/Input";

//
import { UploadIcon } from "assets/icon";
// utils
import { BsSave } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
// types
import { ModalProps } from "types/components/Modal";
// assets
const PreviousAdd: React.FC<ModalProps> = ({ show = false, handleClose }) => {
  // functions
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState([]);
  const onFileInputChange = (event: any) => {
    const newFiles = event.target.files;

    setFiles(files.concat(newFiles));
    console.log(files);
    // do something with your files...
  };
  const onTargetClick = () => {
    if (fileInputRef && fileInputRef.current) {
      fileInputRef?.current.click();
    }
  };

  return (
    <ModalWrapper show={show}>
      <ModalContent show={show}>
        <ModalHeader>
          <Text fSize={22} fWeight={600}>
            {"Add Previous Match"}
          </Text>
        </ModalHeader>
        <ModalBody>
          <Row flexDirection="column" gap={5}>
            <Text fWeight={600} fSize={17}>
              {"Match Details"}
            </Text>
            <Row templateCol="1fr 1fr" display="grid" gap={10}>
              <Col>
                <Text fSize={14} padding="0 0 7px 0">
                  {"Date & Time"}
                </Text>
                <Input
                  iColor="primary"
                  iSize="small"
                  iFont="normal"
                  iRadius="small"
                  placeholder="Date & Time"
                />
              </Col>
              <Col></Col>
              <Col>
                <Text fSize={14} padding="0 0 7px 0">
                  {"League Name"}
                </Text>
                <Input
                  iColor="primary"
                  iSize="small"
                  iFont="normal"
                  iRadius="small"
                  placeholder="League Name"
                />
              </Col>
              <Col>
                <Text fSize={14} padding="0 0 7px 0">
                  {"Round Name"}
                </Text>
                <Input
                  iColor="primary"
                  iSize="small"
                  iFont="normal"
                  iRadius="small"
                  placeholder="Round Name"
                />
              </Col>
              <Col>
                <Text fSize={14} padding="0 0 7px 0">
                  {"Select Team"}
                </Text>
                <Input
                  iColor="primary"
                  iSize="small"
                  iFont="normal"
                  iRadius="small"
                  placeholder="Select Team"
                />
              </Col>
              <Col>
                <Text fSize={14} padding="0 0 7px 0">
                  {"Home/Away Name"}
                </Text>
                <Input
                  iColor="primary"
                  iSize="small"
                  iFont="normal"
                  iRadius="small"
                  placeholder="Home/Away"
                />
              </Col>
              <Col>
                <Text fSize={14} padding="0 0 7px 0">
                  {"Opposition Club"}
                </Text>
                <Input
                  iColor="primary"
                  iSize="small"
                  iFont="normal"
                  iRadius="small"
                  placeholder="Opposition Club"
                />
              </Col>
              <Col>
                <Text fSize={14} padding="0 0 7px 0">
                  {"Opposition Team"}
                </Text>
                <Input
                  iColor="primary"
                  iSize="small"
                  iFont="normal"
                  iRadius="small"
                  placeholder="Opposition Team"
                />
              </Col>
            </Row>
            <Text fWeight={600} fSize={17} padding="10px 0 0 0">
              {"Upload Reply"}
            </Text>
            <UploadWrapper onClick={onTargetClick}>
              <Row
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                gap={7}
                padding="10px"
              >
                <input
                  onChange={onFileInputChange}
                  ref={fileInputRef}
                  type="file"
                  style={{ display: "none" }}
                  accept="image/png, image/jpeg"
                />
                <UploadIcon />
                <Text fColor="gray.300">
                  {"Drag & Drop your video here, or tap to upload."}
                </Text>
                <Text fColor="gray.300" fWeight={700}>
                  {"Supported file types -.MP4, MPEG, or H. 264 video file."}
                </Text>
              </Row>
            </UploadWrapper>
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
    </ModalWrapper>
  );
};

export default PreviousAdd;

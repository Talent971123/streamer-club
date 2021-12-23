import React from "react";

import {
  ModalWrapper,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "./index.style";

import { Button } from "components/Button";
import { Text } from "components/Text";
import { Col, Row } from "components/Layout";
import { Input } from "components/Input";

// utils
//
import { BsSave } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
// types
import { ModalProps } from "types/components/Modal";
// assets
const UpcomingModal: React.FC<ModalProps> = ({ show = false, handleClose }) => {
  // functions

  return (
    <ModalWrapper show={show}>
      <ModalContent show={show}>
        <ModalHeader>
          <Text fSize={22} fWeight={600}>
            {"Add Upcoming Match"}
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
              {"Stream Details"}
            </Text>
            <Row flexDirection="column" gap={7}>
              <Col>
                <Text fSize={14} padding="0 0 7px 0">
                  {"RTMP Server URL"}
                </Text>
                <Input
                  iColor="primary"
                  iSize="small"
                  iFont="normal"
                  iRadius="small"
                  placeholder="rtmp://global-live.mux.com:5222/app	"
                />
              </Col>
              <Col>
                <Text fSize={14} padding="0 0 7px 0">
                  {"Stream Key"}
                </Text>
                <Input
                  iColor="primary"
                  iSize="small"
                  iFont="normal"
                  iRadius="small"
                  placeholder="MUX_TOKEN_ID=0ea2cf07-5919-4e7c-85eb-fa8c72fdc16f"
                />
              </Col>
              <Col>
                <Text fSize={14} padding="0 0 7px 0">
                  {"Stream URL"}
                </Text>
                <Input
                  iColor="primary"
                  iSize="small"
                  iFont="normal"
                  iRadius="small"
                  placeholder="https://streamer.com/club/enter-stream-url"
                />
              </Col>
            </Row>
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

export default UpcomingModal;

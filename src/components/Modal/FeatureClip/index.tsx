import React from "react";
import dynamic from "next/dynamic";
import {
  ModalWrapper,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "./index.style";
import { Button } from "components/Button";
import { Text } from "components/Text";
import { Row } from "components/Layout";

// utils
import { ImCancelCircle } from "react-icons/im";
// types
import { ClipAssetProps } from "types/components/Modal";
// assets

const VideoPlayer = dynamic(() => import("components/Video/Bitmovin"), {
  ssr: false,
});

const FeatureClip_Modal: React.FC<ClipAssetProps> = ({ title, playbackId, show = false, handleClose }) => {
  // functions

  return (
    <ModalWrapper show={show}>
      <ModalContent show={show}>
        <ModalHeader>
          <Button
            style={{
              backgroundColor: "#1B1B25",
            }}
            bColor="primary"
            bSize="small"
            icon={<ImCancelCircle />}
            onClick={handleClose}
          >
          </Button>
        </ModalHeader>
        <ModalBody>
          <Row flexDirection="column" gap={5}>
            <VideoPlayer key={playbackId} playback_id={playbackId} />
          </Row>
        </ModalBody>
        <ModalFooter>
        <Text className="footer-text" fSize={1.5} fWeight={600}>
            {title}
          </Text>
        </ModalFooter>
      </ModalContent>
    </ModalWrapper>
  );
};

export default FeatureClip_Modal;

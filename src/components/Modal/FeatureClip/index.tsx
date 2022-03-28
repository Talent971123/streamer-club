import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { RWebShare } from "react-web-share";
import { baseUrl } from "utils/constData";
import { useRouter } from "next/router";
import { FiShare2 } from "react-icons/fi";
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

const FeatureClip_Modal: React.FC<ClipAssetProps> = ({
  title,
  playbackId,
  show = false,
  handleClose,
}) => {
  // functions
  const router = useRouter();

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
          />
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
          <RWebShare
            data={{
              text: "Share Profile",
              url: `${baseUrl + router.asPath.split('?')[0]}?fc=${playbackId}`,
            }}
          >
            <Button
              bColor="primary"
              bSize="small"
              icon={<FiShare2 />}
              className="actionBtn"
            >
              {"Share"}
            </Button>
          </RWebShare>
        </ModalFooter>
      </ModalContent>
    </ModalWrapper>
  );
};

export default FeatureClip_Modal;

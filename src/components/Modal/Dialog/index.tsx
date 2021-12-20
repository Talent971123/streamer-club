import { Button } from "components/Button";
import React from "react";

import {
  ModalWrapper,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "./index.style";

import { ModalProps } from "types/components/Modal";

const CustomModal: React.FC<ModalProps> = ({
  children,
  show = false,
  handleClose,
}) => {
  return (
    <ModalWrapper show={show}>
      <ModalContent>
        <ModalHeader></ModalHeader>
        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          <Button bColor="primary" bSize="small" onClick={handleClose}>
            {"Cancel"}
          </Button>
          <Button bColor="primary" bSize="small">
            {"Save"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </ModalWrapper>
  );
};

export default CustomModal;

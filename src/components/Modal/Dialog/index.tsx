import { Button } from "components/Button";
import React from "react";

import {
  ModalWrapper,
  ModalContent,
  ModalHeader,
  ModalFooter,
} from "./index.style";

import { ModalProps } from "types/components/Modal";

const CustomModal: React.FC<ModalProps> = ({ children, show = false }) => {
  return (
    <ModalWrapper show={show}>
      <ModalHeader></ModalHeader>
      <ModalContent>{children}</ModalContent>
      <ModalFooter>
        <Button bColor="primary" bSize="small">
          {"Cancel"}
        </Button>
        <Button bColor="primary" bSize="small">
          {"Save"}
        </Button>
      </ModalFooter>
    </ModalWrapper>
  );
};

export default CustomModal;

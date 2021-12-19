import { ReactNode } from "react";

export interface ModalProps {
  children?: ReactNode;
  show?: boolean;
  handleClose?: () => any;
}

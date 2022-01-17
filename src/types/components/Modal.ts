export interface ModalProps {
  show?: boolean;
  handleClose?: () => any;
  clubInfo?: any;
}

export interface EditProps extends ModalProps {
  pid: number;
}

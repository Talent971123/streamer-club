export interface ModalProps {
  show?: boolean;
  handleClose?: () => any;
  clubInfo?: any;
}

export interface EditProps extends ModalProps {
  mid: number;
}

export interface ImageCropProps extends ModalProps {
  meta: any;
  saveImage: any;
  cropShape?: "rect" | "round";
}

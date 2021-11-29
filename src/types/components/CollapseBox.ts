import { ReactNode } from "react";

// ---------------------------------
export interface CollapeBoxProps {
  hide: boolean;
}
export interface HeaderWrapperProps extends AccordionPorps {
  handleOpen: () => void;
  hide: boolean;
}
export interface AccordionPorps {
  title?: string;
  children?: ReactNode;
}

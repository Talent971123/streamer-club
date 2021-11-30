import { InitialProps } from "./Common";
// -----------------------------------------------
export interface ImageProps extends InitialProps {
  src: any;
  alt?: string;
  width?: number;
  height?: number;
  mode?: "intrinsic" | "fill";
  oFit?: "cover" | "contain" | "none" | "fill";
}

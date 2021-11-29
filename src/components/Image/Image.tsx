import React from "react";
// next
import Image from "next/image";
// type
type ImageComponentProps = {
  src: any;
  alt?: string;
  width?: number;
  height?: number;
  mode?: "intrinsic" | "fill";
  oFit?: "cover" | "contain" | "none" | "fill";
};
// styeld component
import { ImageWrapper, ImageInner } from "./Image.style";

// ----------------------------------------------------
const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt = "No Image, Please reload.",
  width,
  height,
  mode = "intrinsic",
  oFit = "fill",
}) => {
  return mode === "fill" ? (
    <ImageWrapper>
      <ImageInner>
        <Image
          src={src}
          layout={mode}
          alt={alt}
          priority={true}
          objectFit={oFit}
        />
      </ImageInner>
    </ImageWrapper>
  ) : (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      layout={mode}
      objectFit={oFit}
    />
  );
};
export default ImageComponent;

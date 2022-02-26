import React from "react";
// next
import Image from "next/image";
// type
import { ImageProps } from "types/components/Image";
// styeld component
import { ImageWrapper, ImageInner } from "./Image.style";

// ----------------------------------------------------
const ImageComponent: React.FC<ImageProps> = ({
  src,
  alt = "No Image, Please reload.",
  width,
  height,
  mode = "intrinsic",
  oFit = "fill",

  ...props
}) => {
  return mode === "fill" ? (
    <ImageWrapper {...props}>
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
      {...props}
    />
  );
};
export default ImageComponent;

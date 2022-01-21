import React from "react";
import styled from "styled-components";
import { Image } from "components/Image";
import { compose, variant, border, space, layout } from "styled-system";
import css from "@styled-system/css";
import themeGet from "@styled-system/theme-get";

interface StyledProps {
  radius?: "circle" | "small";
  mode?: "small" | "medium" | "big";
}

interface AvatarProps extends StyledProps {
  src: any;
  position?: string;
}

const AvatarWrapper = styled.div(
  (props: StyledProps) =>
    css({
      transition:
        "all 0.3s ease, color 300ms ease-in-out, background-color 300ms ease-in-out",
    }),
  {
    position: "relative",
    contain: "content",
    border: "1px solid #666",
  },
  variant({
    prop: "radius",
    variants: {
      circle: {
        borderRadius: "50%",
      },
      small: {
        borderRadius: "4px",
      },
    },
  }),
  variant({
    prop: "position",
    variants: {
      center: {
        margin: "auto",
      },
    },
  }),
  variant({
    prop: "mode",
    variants: {
      small: {
        width: "65px",
        height: "65px",
      },
      medium: {
        width: "150px",
        height: "150px",
      },
      big: {
        width: "200px",
        height: "200px",
      },
    },
  }),
  compose(border, space, layout)
);

const Avatar: React.FC<AvatarProps> = ({
  src,
  radius = "circle",
  mode = "small",
  position,
}) => {
  const dataProps = {
    radius,
    mode,
    position,
  };
  return (
    <AvatarWrapper {...dataProps}>
      <Image src={src} mode="fill" />
    </AvatarWrapper>
  );
};

export default Avatar;

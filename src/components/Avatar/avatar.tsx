import React from "react";
import styled from "styled-components";
import { Image } from "components/Image";
import { compose, variant, border, space, layout } from "styled-system";
import css from "@styled-system/css";

interface StyledProps {
  Radius?: "circle" | "small";
  mode?: "small" | "medium" | "big";
}

interface AvatarProps extends StyledProps {
  src: any;
}

const AvatarWrapper = styled.div(
  (props: StyledProps) =>
    css({
      transition:
        "all 0.3s ease, color 300ms ease-in-out, background-color 300ms ease-in-out",
    }),
  {
    position: "relative",
  },
  variant({
    prop: "Radius",
    variants: {
      circle: {
        borderRadius: "50%",
      },
      small: {
        borderRadius: "7px",
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
        width: "120px",
        height: "120px",
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
  Radius = "circle",
  mode = "small",
}) => {
  const dataProps = {
    Radius,
    mode,
  };
  return (
    <AvatarWrapper {...dataProps}>
      <Image src={src} mode="fill" />
    </AvatarWrapper>
  );
};

export default Avatar;

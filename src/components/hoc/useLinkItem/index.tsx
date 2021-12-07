/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ComponentType } from "react";
// component
import { Row } from "components/Layout";
// hook
import { useRouter } from "hooks";
// type
import {
  LinkItemWrapperProps,
  IconWrapperProps,
} from "types/components/LinkItem";
// styled system
import styled from "styled-components";
import { Text } from "components/Text";

// -----------------------------------------------------------------
const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ iconWidth }) => {
    return iconWidth ? `${iconWidth}px` : "auto";
  }};
`;

const useLinkItem = (
  LinkItemWrapper: ComponentType<LinkItemWrapperProps>,
  mode: "title" | "icon" = "title"
) => {
  if (mode === "title") {
    return ({
      title = "",
      href = "",
      icon,
      iconSlot = "start",
      iconDirection = "row",
      iconGaping = 6,
      iconWidth,
      alignVertical = "center",
      alignHorizontal = "initial",
      handleClick = () => {},
    }: LinkItemWrapperProps) => {
      const { move } = useRouter();
      const handleOnClick = () => {
        handleClick();
        if (href != "") move(href);
      };
      return (
        <LinkItemWrapper>
          <Row
            alignItems={alignVertical}
            justifyContent={alignHorizontal}
            gap={icon ? iconGaping : 0}
            flexDirection={iconDirection}
          >
            {icon && iconSlot === "start" && (
              <IconWrapper iconWidth={iconWidth}>{icon}</IconWrapper>
            )}
            <Text
              onClick={handleOnClick}
              className="link_title"
              mode="p"
              lHeight={0}
            >
              {title}
            </Text>
            {icon && iconSlot === "end" && (
              <IconWrapper iconWidth={iconWidth}>{icon}</IconWrapper>
            )}
          </Row>
        </LinkItemWrapper>
      );
    };
  }
  if (mode === "icon") {
    return ({
      href = "",
      icon,
      handleClick = () => {},
    }: LinkItemWrapperProps) => {
      const { move } = useRouter();
      const handleOnClick = () => {
        handleClick();
        if (href != "") move(href);
      };

      return <LinkItemWrapper onClick={handleOnClick}>{icon}</LinkItemWrapper>;
    };
  }
  return () => <></>;
};

export default useLinkItem;

import React, { ComponentType } from "react";
// component
import { Row, Col } from "components/Layout";
// hook
import { useRouter } from "hooks";
// type
import {
  LinkItemWrapperProps,
  IconWrapperProps,
} from "types/components/LinkItem";
// styled system
import styled from "styled-components";

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
    // eslint-disable-next-line react/display-name
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
    }: LinkItemWrapperProps) => {
      const { move } = useRouter();
      const handleOnClick = () => {
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
            <Col onClick={handleOnClick} className="link_title">
              {title}
            </Col>
            {icon && iconSlot === "end" && (
              <IconWrapper iconWidth={iconWidth}>{icon}</IconWrapper>
            )}
          </Row>
        </LinkItemWrapper>
      );
    };
  }
  if (mode === "icon") {
    // eslint-disable-next-line react/display-name
    return ({ href = "", icon }: LinkItemWrapperProps) => {
      const { move } = useRouter();
      const handleOnClick = () => {
        if (href != "") move(href);
      };

      return <LinkItemWrapper onClick={handleOnClick}>{icon}</LinkItemWrapper>;
    };
  }
  // eslint-disable-next-line react/display-name
  return () => <></>;
};

export default useLinkItem;

import React from "react";
import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { HiMenuAlt2 } from "react-icons/hi";
import { FootballIcon } from "assets/icon";

const MarkWrapper = styled.div``;

export const RedMarker = styled.div<{ type: string }>`
  width: 62px;
  height: 62px;
  position: relative;
  background-color: ${themeGet("colors.red.100")};
  svg:first-child {
    position: absolute;
    ${({ type }) => {
      if (type === "mobile") {
        return css`
          width: 30px;
          height: 30px;
          left: 15px;
          top: 15px;
        `;
      } else {
        return css`
          left: 18px;
          top: 18px;
        `;
      }
    }};
  }
`;

const MarkIcon: React.FC<{ type?: string }> = ({ type = "default" }) => {
  return (
    <MarkWrapper>
      {type === "mobile" ? (
        <RedMarker type={type}>
          <HiMenuAlt2 />
        </RedMarker>
      ) : (
        <RedMarker type={type}>
          <FootballIcon />
        </RedMarker>
      )}
    </MarkWrapper>
  );
};

export default MarkIcon;

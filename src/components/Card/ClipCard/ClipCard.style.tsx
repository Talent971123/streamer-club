import themeGet from "@styled-system/theme-get";
import styled, { css } from "styled-components";
import { defaultTheme } from "theme";

export const ClipCardWrapper = styled.div<{ mode: string }>`
  @media screen and (min-width: ${defaultTheme.mediaSize.md}px)  {
    width: 20% !important;
  }

  @media screen and (min-width: ${defaultTheme.mediaSize.sm}px) and (max-width: ${defaultTheme.mediaSize.md}px) {
    width: 33% !important;
  }

  @media screen and (max-width: ${defaultTheme.mediaSize.sm}px) {
    width: 100% !important;
  }

  ${({ mode }) => {
    if(mode === 'teams') 
    return `
      border: 1px solid black;
      border-radius: 7px;
    `
  }};

  &:first-child {
    margin: 0 5px 0 0 !important;
  }
  &:last-child {
    margin: 0 0 0 5px !important;
  }
  margin: 0 5px;
  cursor: pointer;
  contain: content;
`;

export const ClipContent = styled.div<{ mode: string }>`
  ${({ mode }) => {
    if (mode === "photos" || mode === "videos") {
      return css`
        img {
          border-radius: 4px;
        }
      `;
    } else if (mode === "teams") {
      return css`
        height: 180px;
        position: relative;
      `;
    } else if (mode === "player") {
      return css`
        img {
          border-radius: 50%;
        }
      `;
    }
  }}
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  position: relative;
`;

export const ClipFooter = styled.div<{ mode: string }>`
  padding: 10px 5px;
  ${({ mode }) => {
    if (mode === "teams") {
      return css`
        background-color: ${themeGet("colors.primary.regular")};
        border-radius: 0 0 4px 4px;
      `;
    }
  }}
`;

export const PlayWrapper = styled.div<{ mode: string }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

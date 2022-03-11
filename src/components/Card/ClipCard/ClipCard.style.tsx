import themeGet from "@styled-system/theme-get";
import styled, { css } from "styled-components";
import { defaultTheme } from "theme";

export const ClipCardWrapper = styled.div<{ mode: string }>`
  ${({ mode }) => {
    if (mode === "teams" || mode === "clip")
      return `
      img {
        border-radius: 2px;
      }
    `;
  }};
  width: 98%;
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
    } else if (mode === "club") {
      return css`
        max-height: 175px;
      `;
    }
  }}
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const ClipFooter = styled.div<{ mode: string }>`
  padding: 10px 5px;

  /* ${({ mode }) => {
    if (mode === "teams") {
      return css`
        background-color: ${themeGet("colors.primary.regular")};
        border-radius: 0 0 4px 4px;
      `;
    }
  }} */
`;

export const PlayWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ClipCardTitle = styled.div<{ mode: string }>`
  font-weight: bold;
  @media screen and (min-width: ${defaultTheme.mediaSize.lg}px) {
    font-size: 1rem !important;
  }

  @media screen and (max-width: ${defaultTheme.mediaSize.lg}px) {
    font-size: 0.875rem !important;
  }

  @media screen and (max-width: ${defaultTheme.mediaSize.md}px) {
    font-size: 0.688rem !important;
  }
`;

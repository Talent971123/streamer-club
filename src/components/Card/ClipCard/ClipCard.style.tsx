import themeGet from "@styled-system/theme-get";
import styled, { css } from "styled-components";
import { defaultTheme } from "theme";

export const ClipCardWrapper = styled.div<{ mode: string }>`
  ${({ mode }) => {
    if (mode === "teams" || mode === "clip")
      return `
      border: 1px solid black;
      border-radius: 7px;
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

export const PlayWrapper = styled.div<{ mode: string }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

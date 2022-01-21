import themeGet from "@styled-system/theme-get";
import styled, { css } from "styled-components";

export const ClipCardWrapper = styled.div<{ mode: string }>`
  ${({ mode }) => {
    switch (mode) {
      case "clip":
        return css`
          width: 98%;
        `;
      case "teams":
        return css`
          width: 97%;
          border: 1px solid black;
          border-radius: 7px;
        `;
      case "player":
        return css`
          width: 95%;
        `;
    }
  }};
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

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
        `;
      case "player":
        return css`
          width: 95%;
        `;
    }
  }};
  contain: content;
`;

export const ClipContent = styled.div<{ mode: string }>`
  ${({ mode }) => {
    if (mode === "photos" || mode === "videos") {
      return css`
        img {
          border-radius: 10px;
        }
      `;
    }
  }}
  border-radius: ${({ mode }) => (mode === "player" ? "50%" : "")};
  width: 100%;
  position: relative;
`;

export const ClipFooter = styled.div`
  padding: 10px 5px;
`;

export const PlayWrapper = styled.div<{ mode: string }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  ${({ mode }) => {
    if (mode === "videos") {
      return css`
        top: 0;
        left: -5px;
      `;
    } else {
      return css`
        top: 0;
        left: 0;
      `;
    }
  }};
`;

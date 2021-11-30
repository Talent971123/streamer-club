import styled, { css } from "styled-components";

export const ClipCardWrapper = styled.div<{ mode: string }>`
  ${({ mode }) => {
    switch (mode) {
      case "clip":
        return css`
          width: 312px;
        `;
      case "teams":
        return css`
          width: 176px;
        `;
      case "player":
        return css`
          width: 185px;
        `;
    }
  }};
  padding: 0 5px;
`;

export const ClipContent = styled.div<{ mode: string }>`
  ${({ mode }) => {
    switch (mode) {
      case "clip":
        return css`
          height: 202px;
        `;
      case "teams":
        return css`
          height: 200px;
        `;
      case "player":
        return css`
          height: 170px;
        `;
    }
  }};
  border-radius: ${({ mode }) => (mode === "player" ? "50%" : "")};
  width: 100%;
  position: relative;
`;

export const ClipFooter = styled.div`
  padding-top: 10px;
`;

export const PlayWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

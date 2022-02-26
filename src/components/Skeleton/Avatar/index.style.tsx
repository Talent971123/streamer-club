import styled, { css } from "styled-components";
import { defaultTheme } from "theme";

export const StyleContent = styled.div<{ type: string }>`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  * {
    border-radius: 50% !important;

    width: 180px !important;
    height: 180px !important;

    @media screen and (max-width: ${defaultTheme.mediaSize.md}px) {
      width: 120px !important;
      height: 120px !important;
      ${({ type }) => {
        if (type == "main") {
          return css`
            width: 120px !important;
            height: 120px !important;
          `;
        } else {
          return css`
            width: 150px !important;
            height: 150px !important;
          `;
        }
      }}
    }
    @media screen and (max-width: ${defaultTheme.mediaSize.xs}px) {
      ${({ type }) => {
        if (type == "main") {
          return css`
            width: 80px !important;
            height: 80px !important;
          `;
        } else {
          return css`
            width: 130px !important;
            height: 130px !important;
          `;
        }
      }}
    }
  }
`;

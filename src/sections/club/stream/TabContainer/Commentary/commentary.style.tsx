import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const CommentaryWrapper = styled.div``;

export const ContentWrapper = styled.div`
  margin: 5px 0;
  width: 100%;
  border-radius: 8px;
  padding: 20px;
`;

export const Border = styled.div<{mode: number}>`
  height: 150px;
  width: 5px;
  background-color: ${themeGet("colors.gray.300")};
  ${({ mode }) => {
    if (mode === 0) {
      return css`
      background-color: ${themeGet("colors.red.100")};
      `;
    }
  }}
`;

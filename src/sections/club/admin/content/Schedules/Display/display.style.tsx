import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const DisplayWrapper = styled.div`
  padding: 30px 0;
`;

export const TabWrapper = styled.div<{ item: boolean }>`
  display: flex;
  gap: 20px;
  border-bottom: 1px solid ${themeGet("colors.gray.300")};
  ${({ item }) => {
    if (item) {
      return css`
        & > *:first-child {
          border-bottom: 2px solid white;
        }
      `;
    } else {
      return css`
        & > *:last-child {
          border-bottom: 2px solid white;
        }
      `;
    }
  }}
`;

export const TabItem = styled.div`
  cursor: pointer;
`;

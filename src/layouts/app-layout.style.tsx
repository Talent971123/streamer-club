// styled system
import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { defaultTheme } from "theme";
// -------------------------------------------------------
export const AppLayoutWrapper = styled.div`
  position: relative;
`;

export const MenuItemList = styled.div<{ mode: String }>`
  @media screen and (max-width: ${defaultTheme.mediaSize.lg}px) {
    width: 100%;
    font-size: 14px;
    padding: 16px;
    margin-top: 2px;
    background-color: rgba(80, 80, 80, 0.1);
  }
  @media screen and (min-width: ${defaultTheme.mediaSize.lg}px) {
    display: none;
  }
  ${({ mode }) => {
    if (mode === "true") {
      return css`
        p {
          color: ${themeGet("colors.white.100")};
        }
        ::after {
          transform: scaleX(1);
        }
      `;
    }
  }}
`;

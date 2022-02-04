// styled component
import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { defaultTheme } from "theme";
// -------------------------------------------------
import {Avatar} from "components/Avatar"

export const HeaderWrapper = styled.div`
  height: 62px;
  width: 100%;
  border-bottom: 1px solid ${themeGet("colors.gray.300")};
  .ImageWrapper {
    contain: content;
    img {
      border-radius: 50%;
    }
  }
`;

export const MenuItem = styled.div<{ mode: String }>`
  @media screen and (max-width:${defaultTheme.mediaSize.lg}px){
    display: none;
  }
  @media screen and (min-width:${defaultTheme.mediaSize.lg}px){
    display: inline-block;
    position: relative;
    cursor: pointer;
    margin: 0 10px;
    transition: all 0.2s ease-in-out;
    ::after {
      transition: all 0.2s ease-in-out;
      position: absolute;
      content: "";
      height: 2px;
      background-color: ${themeGet("colors", "white")};
      width: 100%;
      left: 0;
      bottom: -5px;
      transform: scaleX(0);
    }
    :hover {
      ::after {
        transform: scaleX(1);
      }
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
  }
`;

export const Border = styled.div`
  @media screen and (max-width:${defaultTheme.mediaSize.md}px){
    display: none;
  }
  height: 24px;
  width: 1px;
  background-color: ${themeGet("colors.gray.300")};
`;

export const MenuItemBody = styled.div`
  @media screen and (max-width:${defaultTheme.mediaSize.sm}px){
    display: none;
  }
`;

export const MenuItemBodyMobile = styled.div`
  @media screen and (min-width:${defaultTheme.mediaSize.sm}px){
    display: none;
  }
`;

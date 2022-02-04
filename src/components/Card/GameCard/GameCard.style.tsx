import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { defaultTheme } from "theme";

export const GameCardWrapper = styled.div`
  @media screen and (min-width: ${defaultTheme.mediaSize.md}px)  {
    width: 33% !important;
  }

  @media screen and (min-width: ${defaultTheme.mediaSize.sm}px) and (max-width: ${defaultTheme.mediaSize.md}px) {
    width: 50% !important;
  }

  @media screen and (max-width: ${defaultTheme.mediaSize.sm}px) {
    width: 100% !important;
  }

  border-radius: 10px;
  contain: content;
  cursor: pointer;
  &:first-child {
    margin: 0 5px 0 0 !important;
  }
  &:last-child {
    margin: 0 0 0 5px !important;
  }
  margin: 0 5px;
`;

export const LayerWrapper = styled.div`
  width: 100%;
  z-index: 1;
  height: 100%;
  position: absolute;
  top: 0px;
  background-color: ${themeGet("colors.blue.100")}60;
`;

export const Content = styled.div`
  z-index: 3;
  width: 100%;
  position: absolute;
  .playwrapper {
    :hover {
      cursor: pointer;
    }
  }
`;

export const CardContent = styled.div`
  height: 181px;
  width: 100%;
  position: relative;
`;

export const CardFooter = styled.div`
  padding: 10px 12px;
  background-color: ${themeGet("colors.black.300")};
  .markwrapper {
    img {
      border-radius: 50%;
    }
  }
`;

export const LiveWrapper = styled.div`
  background-color: ${themeGet("colors.red.100")};
  width: 45px;
  height: 25px;
  text-align: center;
  border-radius: 8px;
`;

export const UserWrapper = styled.div`
  background-color: ${themeGet("colors.black.regular")}60;
  width: 48px;
  height: 25px;
  border-radius: 8px;
  text-align: center;
`;

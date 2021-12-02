// styled component
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// -------------------------------------------------

export const HeaderWrapper = styled.div`
  height: 62px;
  width: 100%;
  border-bottom: 1px solid ${themeGet("colors.gray.300")};
`;

export const RedMarker = styled.div`
  width: 62px;
  height: 62px;
  background-color: ${themeGet("colors.red.100")};
  position: relative;
  svg:first-child {
    position: absolute;
    left: 14px;
    top: 11px;
  }
`;

export const MenuItem = styled.div`
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
    background-color: ${themeGet("colors.red.100")};
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
`;

export const Border = styled.div`
  height: 24px;
  width: 1px;
  background-color: ${themeGet("colors.gray.300")};
`;

// styled component
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
// -------------------------------------------------

export const HeaderWrapper = styled.div`
  height: 62px;
  width: 100%;
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

export const HeaderMenuItem = styled.div`
  cursor: pointer;
`;

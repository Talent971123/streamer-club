// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// --------------------------------------------------

export const IconItem = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  background: ${themeGet("colors.white")};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg,
  path {
    color: ${themeGet("colors.red.regular")} !important;
  }
`;

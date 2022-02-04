import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const ClipWrapper = styled.div`
  margin: 30px 0;
`;
export const LinkWrapper = styled.div`
  cursor: pointer;
  color: ${themeGet("colors.gray.200")};
  :hover {
    text-decoration: underline;
    color: ${themeGet("colors.white")};
  }
`;
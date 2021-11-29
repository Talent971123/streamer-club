// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// -----------------------------------------------

export const CopyRightSectionWrapper = styled.div`
  padding: 20px 0 58px 0;
  font-size: 11px;
  color: ${themeGet("colors.gray.100")};
  border-top: 1px solid ${themeGet("colors.gray.200")};
  @media screen and (max-width: 1024px) {
    border: none;
  }
  @media screen and (max-width: 600px) {
    color: ${themeGet("colors.white")};
    font-size: 12px;
    font-weight: 400;
  }
`;
export const StyledLinkItem = styled.div`
  cursor: pointer;
  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;
  :hover {
    color: ${themeGet("colors.white")};
  }
`;

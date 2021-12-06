// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// -----------------------------------------------

export const CopyRightSectionWrapper = styled.div`
  padding: 20px 0;
  font-size: 11px;
  color: ${themeGet("colors.gray.100")};
  ::after {
    content: " ";
    width: 100%;
    height: 1px;
    background: ${themeGet("colors.gray.300")};
    position: absolute;
    top: 0;
    left: 0;
  }
  @media screen and (max-width: 1024px) {
    border: none;
  }
  @media screen and (max-width: 600px) {
    color: ${themeGet("colors.white")};
    font-size: 12px;
    font-weight: 400;
  }
`;

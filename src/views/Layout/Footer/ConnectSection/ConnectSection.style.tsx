// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// --------------------------------------------------

export const ConnectionSectionWrapper = styled.div`
  padding: 55px 0;
  color: ${themeGet("colors.white")};
  @media screen and (max-width: 768px) {
    padding: 55px 0 0 0;
  }
`;

export const ServiceItem = styled.div`
  cursor: pointer;
  padding-bottom: 10px;
  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;
  :hover {
    text-decoration: underline;
  }
`;

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
export const ServiceInfoText = styled.div`
  color: ${themeGet("colors.white")};
`;

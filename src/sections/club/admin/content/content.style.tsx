import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
//  define
export const ContentWrapper = styled.div`
  border: 1px solid ${themeGet("colors.gray.300")};
  border-radius: 5px;
`;

export const Content = styled.div`
  height: 100%;
  border-left: 1px solid ${themeGet("colors.gray.300")};
`;

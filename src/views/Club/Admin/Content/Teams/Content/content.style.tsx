import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const ContentWrapper = styled.div`
  border-bottom: 1px solid ${themeGet("colors.gray.300")};
`;

export const TabItem = styled.div`
  cursor: pointer;
`;

import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const MenuWrapper = styled.div`
  width: 100%;
  background: ${themeGet("colors.primary.regular")};
`;
export const MenuInner = styled.div`
  padding: 0 60px;
`;

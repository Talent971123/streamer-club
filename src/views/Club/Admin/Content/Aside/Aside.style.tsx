import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const AsideWrapper = styled.div`
  padding: 30px;
  height: 100%;
  border-right: 1px solid ${themeGet("colors.gray.300")};
`;

export const Scrollbar = styled.div``;

export const MenuItem = styled.div`
  cursor: pointer;
`;

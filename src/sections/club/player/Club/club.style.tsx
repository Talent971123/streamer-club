import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const ClubWrapper = styled.div`
  margin: 30px 0;
  padding: 20px;
  border-radius: 10px;
  background-color: ${themeGet("colors.gray.900")};
`;

export const BottomBorder = styled.div`
  width: 100%;
  margin: 10px 0 !important;
  height: 1px;
  background-color: ${themeGet("colors.gray.200")};
`;

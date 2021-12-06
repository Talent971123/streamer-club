import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const SupportWrapper = styled.div``;

export const ContentWrapper = styled.div`
  margin: 5px 0;
  width: 100%;
  border-radius: 8px;
  padding: 20px;
  background-color: ${themeGet("colors.gray.900")};
`;

import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Row } from "components/Layout";
import { defaultTheme } from "theme";

export const GameDayWrapper = styled.div`
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
export const SeeAllWrapper = styled(Row)`
  margin: 0 0 0 30px;
  @media screen and (max-width: ${defaultTheme.mediaSize.md}px) {
    margin: 0;
  }
  @media screen and (max-width: ${defaultTheme.mediaSize.sm}px) {
    margin: 0;
  }
`;
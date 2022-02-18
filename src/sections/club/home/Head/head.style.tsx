import themeGet from "@styled-system/theme-get";
import { Button } from "components/Button";
import styled from "styled-components";
import { defaultTheme } from "theme";

export const HeadWrapper = styled.div`
  padding: 10px 12px 0px 12px;
`;

export const HeadClubName = styled.div`
  @media screen and (min-width: ${defaultTheme.mediaSize.md}px) {
    font-size: 3rem;
  }
  @media screen and (max-width: ${defaultTheme.mediaSize.md}px) {
    font-size: 2rem;
  }
`;

export const ShareButton = styled(Button)`
  border: 1px solid #333333;
  @media screen and (max-width: ${defaultTheme.mediaSize.lg}px) {
    height: 36px;
    width: 90px;
    font-size: 0.875rem;
    padding: 14px 8px;
  }
  @media screen and (max-width: ${defaultTheme.mediaSize.md}px) {
    height: 33px;
    width: 83px;
    font-size: 0.813rem;
    padding: 12px 7px;
  }
  @media screen and (max-width: ${defaultTheme.mediaSize.sm}px) {
    height: 26px;
    width: 65px;
    font-size: 0.688rem;
    padding: 10px 6px;
  }
`;

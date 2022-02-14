import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { defaultTheme } from "theme";

export const UserWrapper = styled.div`
  background-color: rgba(29, 29, 29, 0.8);
  width: 51px;
  height: 22px;
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const PlayWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  height: 80px;
  @media screen and (min-width: ${defaultTheme.mediaSize.md}px) {
    height: 150px;
  }
`

export const LeagueWrapper = styled.div`
  display: flex;
  img{
    border-radius: 50%;
    padding-right: 10px;
  }
`

export const ThumbCardImage = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  @media screen and (min-width: ${defaultTheme.mediaSize.md}px) {
    padding: 39px 39px 0 39px;
    img {
      width: 90px !important;
      height: 90px !important;
    }
  }

  @media screen and (max-width: ${defaultTheme.mediaSize.md}px) {
    padding: 33px 33px 0 33px;
    font-size: 0.84375rem;
    img {
      width: 90px !important;
      height: 90px !important;
    }
  }

  @media screen and (max-width: ${defaultTheme.mediaSize.sm}px) {
    padding: 26px 26px 0 26px;
    font-size: 0.625rem;
    line-height: 0.75rem;
    img {
      width: 56px !important;
      height: 56px !important;
    }
  }
`;

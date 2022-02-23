import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { defaultTheme } from "theme";

export const ToobarWrapper = styled.div`
  width: 100%;
  height: 80px;
  @media (min-width: 1024px) {
    height: 72px;
  }
  padding: 10px 20px;
  background-color: ${themeGet("colors.gray.900")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeClubWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 834px) {
    flex-direction: column-reverse;
  }
`;

export const AwayClubWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 834px) {
    flex-direction: column;
  }
`;

export const ClubNameWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2px;
  margin-right: 2px;
  @media (min-width: 480px) {
    margin-left: 5px;
    margin-right: 5px;
  }
`;

export const BlackBorder = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${themeGet("colors.gray.300")};
  margin-left: 5px;
  margin-right: 5px;
  @media (min-width: 480px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const LiveWrapper = styled.div`
  background-color: ${themeGet("colors.red.100")};
  width: 36px;
  height: 20px;
  text-align: center;
  border-radius: 4px;
  @media (min-width: 480px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const TeamLogo = styled.img`
  margin-left: 5px;
  margin-right: 5px;
  width: 60px;
  height: 60px;
  @media screen and (max-width: ${defaultTheme.mediaSize.md}px) {
    width: 50px;
    height: 50px;
  }

  @media screen and (max-width: ${defaultTheme.mediaSize.sm}px) {
    width: 40px;
    height: 40px;
  }
  @media screen and (max-width: ${defaultTheme.mediaSize.xs}px) {
    margin-left: 10px;
    margin-right: 10px;
    width: 25px;
    height: 25px;
  }
`;

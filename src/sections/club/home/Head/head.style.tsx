import themeGet from "@styled-system/theme-get";
import { Button } from "components/Button";
import { Text } from "components/Text";
import styled from "styled-components";
import { defaultTheme } from "theme";

export const HeadWrapper = styled.div`
  padding: 10px 12px 0px 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: ${defaultTheme.mediaSize.sm}px) {
    flex-direction: column;
    align-items: center;
  }

  .name-wrapper{
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;

    @media screen and (max-width: ${defaultTheme.mediaSize.sm}px) {
      flex-direction: column;
      align-items: center;
    }
  }
  
  .button-wrapper{
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: ${defaultTheme.mediaSize.sm}px) { 
      justify-content: space-evenly;
    }
  }
`;

export const HeadClubName = styled.div`
  font-size: 3rem;
  text-align: left;
  padding: 0 1rem;
  @media screen and (max-width: ${defaultTheme.mediaSize.sm}px) {
    font-size: 2rem;
    text-align: center;
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

export const FollowButton = styled(Button)`
  @media screen and (max-width: ${defaultTheme.mediaSize.lg}px) {
    height: 36px;
    width: 110px;
    font-size: 0.875rem;
    padding: 14px 8px;
  }
  @media screen and (max-width: ${defaultTheme.mediaSize.md}px) {
    height: 33px;
    width: 110px;
    font-size: 0.813rem;
    padding: 12px 7px;
  }
  @media screen and (max-width: ${defaultTheme.mediaSize.sm}px) {
    height: 26px;
    width: 95px;
    font-size: 0.688rem;
    padding: 10px 6px;
  }
`;

export const FollowerText = styled.div`
  width: 80px;

  @media screen and (max-width: ${defaultTheme.mediaSize.lg}px) { 
    p{ font-size: 0.875rem; }
  }
  @media screen and (max-width: ${defaultTheme.mediaSize.md}px) { 
    p{ font-size: 0.813rem; }
    width: 65px;
  }
  @media screen and (max-width: ${defaultTheme.mediaSize.sm}px) { 
    p{ font-size: 0.688rem; }
  }
`;

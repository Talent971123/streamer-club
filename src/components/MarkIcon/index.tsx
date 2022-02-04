import React from "react";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { HiMenuAlt2 } from "react-icons/hi";
import { defaultTheme } from "theme";
import {
  FootballIcon,
  //   BellIcon,
    DownIcon,
  //   BasketIcon,
  //   AflIcon,
  //   HockeyIcon,
  CriketIcon,
} from "assets/icon";

const MarkWrapper = styled.div``;

export const RedMarker = styled.div`
  width: 62px;
  height: 62px;
  position: relative;
  @media screen and (max-width:${defaultTheme.mediaSize.lg}px){
    svg:first-child {
      display: none;
    }
    svg:last-child {
      position: absolute;
      width: 30px;
      height: 20px;
      left: 25px;
      top: 15px;
    }
  }
  @media screen and (min-width:${defaultTheme.mediaSize.lg}px){
    background-color: ${themeGet("colors.red.100")};
    svg:first-child {
      position: absolute;
      left: 18px;
      top: 18px;
    }
    svg:last-child {
      display: none;
    }
  }
`;

const MarkIcon: React.FC = () => {
  return (
    <MarkWrapper>
      <RedMarker>
        <FootballIcon />
        <HiMenuAlt2 />
      </RedMarker>
    </MarkWrapper>
  );
};

export default MarkIcon;

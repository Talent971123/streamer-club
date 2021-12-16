import React from "react";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import {
  FootballIcon,
  //   BellIcon,
  //   DownIcon,
  //   BasketIcon,
  //   AflIcon,
  //   HockeyIcon,
  //   CriketIcon,
} from "assets/icon";

const MarkWrapper = styled.div``;

export const RedMarker = styled.div`
  width: 62px;
  height: 62px;
  background-color: ${themeGet("colors.red.100")};
  position: relative;
  svg:first-child {
    position: absolute;
    left: 18px;
    top: 18px;
  }
`;

const MarkIcon: React.FC = () => {
  return (
    <MarkWrapper>
      <RedMarker>
        <FootballIcon />
      </RedMarker>
    </MarkWrapper>
  );
};

export default MarkIcon;

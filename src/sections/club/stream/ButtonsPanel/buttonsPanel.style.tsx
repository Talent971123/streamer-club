import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const ButtonsMobilePanelWrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  background-color: ${themeGet("colors.gray.900")};
  align-items: center;
  @media (min-width: 480px) {
    display: none;
  }
`;

export const ButtonsDesktopPanelWrapper = styled.div`
  @media (max-width: 480px) {
    display: none;
  }
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${themeGet("colors.gray.900")};
`;

export const DesktopButtonWrapper = styled.div`
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const PanelButton = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  text-align: center;
`;

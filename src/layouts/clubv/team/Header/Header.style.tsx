import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const HeaderWrapper = styled.div`
  height: 55px;
  width: 100%;
  background-color: rgba(29, 48, 112, 0.4);
  border-bottom: 1px solid rgba(124, 128, 141, 0.479);
  position: absolute;
  z-index: 3;
`;

export const MenuItemWrapper = styled.div`
  cursor: pointer;
  :hover {
    color: ${themeGet("colors.gray.600")};
  }
  padding: 0 10px;
  font-family: ${themeGet("fonts.base")}; ;
`;

export const HeaderContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-size: 15px;
`;

export const BlackBorder = styled.div`
  height: 24px;
  width: 1px;
  background-color: ${themeGet("colors.gray.600")};
`;

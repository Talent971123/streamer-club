// styled component
import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { defaultTheme } from "theme";
// -------------------------------------------------
import { Menu } from "antd";

export const ProfileWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const StyledMenu = styled(Menu)`
  background-color: ${themeGet("colors.gray.900")};
  border-bottom: none;
  .ant-menu-submenu-horizontal > .ant-menu {
    margin-top: -2px;
  }
`;

export const StyledItemMenu = styled(Menu.Item)`
  font-size: 12px;
  padding: 10px 20px;
  color: white;
  transition: all 0.2s ease-in-out;
  ::after {
    transition: all 0.2s ease-in-out;
    position: absolute;
    content: "";
    height: 2px;
    background-color: ${themeGet("colors.white")};
    width: 100%;
    left: 0;
    bottom: -5px;
    transform: scaleX(0);
  }
  :hover {
    background: ${themeGet("colors.gray.900")};
    font-weight: 700;
    ::after {
      transform: scaleX(1);
    }
  }
`;

export const HeaderWrapper = styled.div`
  height: 62px;
  width: 100%;
  border-bottom: 1px solid ${themeGet("colors.gray.300")};
  .ImageWrapper {
    contain: content;
    img {
      border-radius: 50%;
    }
  }
  .DropdownWrapper {
    padding: 10px 10px;
  }
`;

export const MenuItem = styled.div<{ mode: String }>`
  @media screen and (max-width: ${defaultTheme.mediaSize.lg}px) {
    width: 100%;
    font-size: 14px;
    padding: 16px;
    margin-top: 2px;
    background-color: rgba(80, 80, 80, 0.1);
  }
  @media screen and (min-width: ${defaultTheme.mediaSize.lg}px) {
    display: none;
  }
`;

export const Border = styled.div`
  @media screen and (max-width: ${defaultTheme.mediaSize.md}px) {
    display: none;
  }
  height: 24px;
  width: 1px;
  background-color: ${themeGet("colors.gray.300")};
`;

export const NameLabel = styled.div`
  @media screen and (max-width: ${defaultTheme.mediaSize.xs}px) {
    display: none;
  }
`;

export const MenuItemBody = styled.div`
  position: absolute;
  z-index: 100;
  background: #141414;
  width: 100%;
`;

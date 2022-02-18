// styled component
import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
// -------------------------------------------------
import { Menu } from "antd";

export const ProfileWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const StreamLogoWrapper = styled.div`
  cursor: pointer;
`

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
  display: flex;

  .ImageWrapper {
    contain: content;
    img {
      border-radius: 50%;
    }
  }
  .DropdownWrapper {
    padding: 10px 10px;
  }
  .fitbox {
    padding-right: 15px;
  }
`;

export const MenuItem = styled.div<{ mode: String }>`
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin: 0 10px;
  transition: all 0.2s ease-in-out;
  ::after {
    transition: all 0.2s ease-in-out;
    position: absolute;
    content: "";
    height: 2px;
    background-color: ${themeGet("colors", "white")};
    width: 100%;
    left: 0;
    bottom: -5px;
    transform: scaleX(0);
  }
  :hover {
    ::after {
      transform: scaleX(1);
    }
  }
  ${({ mode }) => {
    if (mode === "true") {
      return css`
        p {
          color: ${themeGet("colors.white.100")};
        }
        ::after {
          transform: scaleX(1);
        }
      `;
    }
  }}
`;

export const Border = styled.div`
  height: 24px;
  width: 1px;
  background-color: ${themeGet("colors.gray.300")};
`;

export const MenuItemBody = styled.div`
  display: flex;
`;

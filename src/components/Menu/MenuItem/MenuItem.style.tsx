// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
// type
import { StyledProps } from "types/components/Menu";

// --------------------------------------------------------

export const MenuItemWrapper = styled.div<StyledProps>`
  position: relative;
  padding: 0 12px;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${themeGet("colors.primary.regular")};
  color: ${themeGet("colors.white")};
  text-transform: uppercase;
  cursor: pointer;
  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;
  :hover {
    color: ${themeGet("colors.black.200")};
    background: ${themeGet("colors.gray.400")};
  }
  ::before {
    width: 1px;
    height: 100%;
    content: "";
    background: #b00026;
    position: absolute;
    top: 0;

    ${({ fDirection }) => {
      if (fDirection === "start") {
        return `right: -1px;`;
      } else if (fDirection === "end") {
        return `left: -1px;`;
      } else {
        return `width : 0px;`;
      }
    }}
    z-index: 1;
  }
`;

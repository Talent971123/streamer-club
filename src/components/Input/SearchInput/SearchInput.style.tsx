// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { defaultTheme } from "theme";
// ---------------------------------------------------

export const InputWrapper = styled.div`
  @media screen and (max-width:${defaultTheme.mediaSize.md}px){
    display: none;
  }
  @media screen and (min-width:${defaultTheme.mediaSize.md}px){
    display: flex;
    justify-content: center;
    max-width: 407px;
    width: 100%;
  }
`;
export const SeachButtonContainer = styled.div`
  border: none;
  padding: 13px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${themeGet("colors.gray.300")};
  border-radius: 0 4px 4px 0;
  cursor: pointer;
`;

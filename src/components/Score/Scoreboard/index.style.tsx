import styled from "styled-components";
import { defaultTheme } from "theme";
import { themeGet } from "@styled-system/theme-get";

export const ScoreCotainer = styled.div`
  width: 175px;
  height: 70px;
  border-radius: 5px;
  background-color: ${themeGet("colors.white")};
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  contain: content;
  justify-content: center;
  padding-left: 5px;
  transition: all ease 0.5s;
  @media screen and (max-width: ${defaultTheme.mediaSize.sm}px) {
    height: 40px;
    width: 140px;
    font-size: 0.75rem;
  }
  .redwrapper {
    background-color: ${themeGet("colors.primary.regular")};
  }
`;

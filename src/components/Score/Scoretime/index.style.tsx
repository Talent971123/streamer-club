import styled from "styled-components";
import { defaultTheme } from "theme";
import { themeGet } from "@styled-system/theme-get";

export const ScoreTimeContainer = styled.div`
  width: 80px;
  height: 30px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  background-color: ${themeGet("colors.white")};
  font-size: 1rem;
  font-weight: 600;
  transition: all ease 0.5s;
  contain: content;
  line-height: 30px;

  @media screen and (max-width: ${defaultTheme.mediaSize.sm}px) {
    height: 25px;
    width: 60px;
    line-height: 25px;
    font-size: 0.75rem;
  }
  .redwrapper {
    background-color: ${themeGet("colors.primary.regular")};
  }
`;

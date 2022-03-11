import styled from "styled-components";
import { defaultTheme } from "theme";

export const StyleContent = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  * {
    border-radius: 50% !important;

    width: 180px !important;
    height: 180px !important;

    @media screen and (max-width: ${defaultTheme.mediaSize.md}px) {
      width: 120px !important;
      height: 120px !important;
    }
    @media screen and (max-width: ${defaultTheme.mediaSize.xs}px) {
      width: 80px !important;
      height: 80px !important;
    }
  }
`;

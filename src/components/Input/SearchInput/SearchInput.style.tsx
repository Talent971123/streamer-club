// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// ---------------------------------------------------

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 340px;
  width: 100%;
  @media screen and (max-width: 600px) {
    max-width: 320px;
  }
`;
export const SeachButtonContainer = styled.div`
  border: none;
  padding: 13px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${themeGet("colors.primary.regular")};
  cursor: pointer;
`;

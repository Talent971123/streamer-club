// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// ---------------------------------------------------

export const SignUpInner = styled.div`
  background: ${themeGet("colors.white")};
  padding: 41px 78px;
  max-width: 916px;
  border-radius: 10px;
  @media screen and (max-width: 600px) {
    padding: 32px 32px;
  }
  @media screen and (max-width: 365px) {
    padding: 32px 22px;
  }
`;
export const RegisterButtonContainer = styled.button`
  border: none;
  padding: 7px 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${themeGet("colors.primary.regular")};
  cursor: pointer;
  height: 100%;
  @media screen and (max-width: 768px) {
    padding: 7px 21px;
  }
`;

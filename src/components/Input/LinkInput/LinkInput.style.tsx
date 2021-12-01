// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LinkContent = styled.div`
  border: 1px solid ${themeGet("colors.gray.300")};
  width: 100%;
  height: 38px;
  border-radius: 7px;
  background: ${themeGet("colors.gray.600")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CopyWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: -40px;
  cursor: pointer;
`;

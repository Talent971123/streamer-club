// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// ---------------------------------------------
export const CartStateWrapper = styled.div`
  cursor: pointer;
  height: 45px;
`;
export const IconWrapper = styled.div`
  padding: 12px;
  background: ${themeGet("colors.whites.100")};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CartCounts = styled.div`
  padding: 12px;
  background: ${themeGet("colors.black.regular")};
  color: ${themeGet("colors.white")};
  font-size: 17px;
  line-height: 21px;
`;

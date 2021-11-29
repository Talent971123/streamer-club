// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// -------------------------------------------
export const AccordionHeaderWrapper = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid ${themeGet("colors.gray.200")};
  cursor: pointer;
`;

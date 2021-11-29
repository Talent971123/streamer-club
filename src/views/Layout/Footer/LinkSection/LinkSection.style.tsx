// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// -------------------------------------------------
export const LinkSectionWrapper = styled.div`
  padding: 65px 0 30px;
  .hiddenWrapper {
    div:last-child {
      .accordionHeader {
        border: none;
      }
    }
  }
`;
export const CategoryItemHeader = styled.div`
  color: ${themeGet("colors.white")};
  text-transform: uppercase;
  padding-bottom: 17px;
`;
export const CategoryItem = styled.div`
  cursor: pointer;
  padding-bottom: 5px;
  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;
  color: ${themeGet("colors.gray.100")};
  :hover {
    color: ${themeGet("colors.white")};
    text-decoration: underline;
  }
`;
export const AccordionItemWrapper = styled.div``;

import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const StyledTable = styled.table`
  border-bottom: 1px dotted ${themeGet("colors.gray.300")};
  td {
    padding: 7px 0;
  }
  tbody tr {
    cursor: pointer;
    font-size: 14px;
    :hover {
      background-color: ${themeGet("colors.gray.300")};
    }
  }
  th {
  }
  thead > tr {
    font-size: 17px;
    font-weight: 700;
    color: ${themeGet("colors.gray.300")};
  }
`;

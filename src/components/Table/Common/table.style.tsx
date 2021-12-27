import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const EmptyWrapper = styled.div`
  padding-top: 40px;
`;

export const StyledTable = styled.div`
  max-width: 1000px;
  overflow: auto;

  ::-webkit-scrollbar {
    height: 7px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px ${themeGet("colors.black.300")};
  }
  ::-webkit-scrollbar-thumb {
    background: ${themeGet("colors.primary.regular")};
    border-radius: 3px;
  }

  table {
    tr > *:first-child > * {
      margin: auto;
    }
    th {
      white-space: nowrap;
      text-align: center;
      padding: 7px;
    }
    td {
      text-align: center;
      max-width: 250px;
      word-wrap: break-word;
      padding: 7px;
    }
    tbody tr {
      text-align: center;
      cursor: pointer;
      font-size: 14px;
      :hover {
        background-color: ${themeGet("colors.gray.300")};
      }
    }
    thead > tr {
      font-size: 17px;
      font-weight: 700;
      color: ${themeGet("colors.gray.300")};
    }
  }
`;

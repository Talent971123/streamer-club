import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Select } from "antd";

export const CommentaryWrapper = styled.div``;

export const ContentWrapper = styled.div`
  margin: 5px 0;
  width: 100%;
  border-radius: 8px;
  padding: 20px;
`;

export const Border = styled.div<{ mode: number }>`
  min-height: 100%;
  width: 5px;
  background-color: ${themeGet("colors.gray.300")};
  ${({ mode }) => {
    if (mode === 0) {
      return css`
        background-color: ${themeGet("colors.red.100")};
      `;
    }
  }}
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
`;

export const DropdownContainer = styled(Select)`
  width: 100%;
  min-height: 44px;
  max-height: 140px;
  border-radius: 7px;
  overflow: auto;
  contain: content;
  background-color: ${themeGet("colors.gray.600")};
  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px ${themeGet("colors.black.300")};
  }
  ::-webkit-scrollbar-thumb {
    background: ${themeGet("colors.primary.regular")};
    border-radius: 3px;
  }

  .ant-select-selector {
    min-height: 44px;
    color: ${themeGet("colors.gray.300")};
    background-color: ${themeGet("colors.gray.600")} !important;
    padding: 7px 12px !important;
    .ant-select-selection-placeholder {
      color: ${themeGet("colors.gray.300")};
    }
    .ant-select-selection-overflow-item {
      .ant-select-selection-item {
        border-radius: 7px;
        contain: content;
        background-color: red;
      }
    }
  }
`;

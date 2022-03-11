import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Form, Select, TimePicker } from "antd";

export interface SectionWrapperProps {
  justifyContent?: | "center" | "flex-start" | "flex-end" | "initial" | "space-around" | "space-between" | "stretch";
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  width?: string
}

export const CommentaryWrapper = styled.div``;

export const StyledForm = styled(Form)`
  width: 100%; 
  padding: 0;
  margin: 0;
`;

export const StyledFormItem = styled(Form.Item)`
  width: 100%; 
  padding: 0;
  margin: 0;
`;

export const StyledTimePicker = styled(TimePicker)`
  width: 100%;
  margin-bottom: 6px;
  padding: 10px 30px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${themeGet("colors.gray.600")};
  .ant-picker-input > input {
    color: ${themeGet("colors.gray.300")};
  }
`;


export const ContentWrapper = styled.div`
  margin: 5px 0;
  width: 100%;
  border-radius: 8px;
  padding: 20px;
`;

export const Border = styled.div<{ mode: string }>`
  min-height: 100%;
  width: 5px;
  background-color: ${themeGet("colors.gray.300")};
  ${({ mode }) => {
    if (mode === "Goal") {
      return css`
        background-color: ${themeGet("colors.red.100")};
      `;
    }
  }}
`;

export const SectionWrapper = styled.div(
  (props: SectionWrapperProps) => css({
    display: "flex",
    flexDirection: props.flexDirection ?? "column",
    justifyContent: props.justifyContent ?? "center",
    padding: "5px",
    width: props.width ?? "auto"
  })
);

export const DropdownContainer = styled(Select)`
  width: 100%;
  min-height: 44px;
  max-height: 140px;
  border-radius: 8px;
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

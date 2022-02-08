import React from "react";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Select } from "antd";
// import type

interface dropdownProps {
  data: any;
  onChange?: any;
}

export const FormikSelectWrapper = styled.div`
  select {
    height: 38px;
    padding: 10px;
    border-radius: 4px;
    width: 100%;
    color: ${themeGet("colors.gray.300")};
    border: none;
    font-size: 14px;
    font-weight: 400;
    background-color: ${themeGet("colors.gray.600")};
    option {
      color: ${themeGet("colors.black.100")};
      background: ${themeGet("colors.white")};
      display: flex;
      white-space: pre;
      min-height: 20px;
      padding: 0px 2px 1px;
    }
  }
`;

const CommonSelect = styled.select`
  height: 38px;
  padding: 10px;
  border-radius: 7px;
  width: 100%;
  color: ${themeGet("colors.gray.300")};
  border: none;
  font-size: 14px;
  font-weight: 400;
  background-color: ${themeGet("colors.gray.600")};
  option {
    color: ${themeGet("colors.black.100")};
    background: ${themeGet("colors.white")};
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const AntSelect = styled(Select)`
  width: 100%;
  min-height: 38px;
  max-height: 140px;
  border-radius: 7px;
  overflow: auto;
  contain: content;

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
    min-height: 38px;
    background-color: ${themeGet("colors.gray.600")};
    span {
      color: ${themeGet("colors.black.100")};
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

const Dropdown: React.FC<dropdownProps> = ({ data, onChange }) => {
  const onHandleChange = (e: any) => {
    onChange && onChange(e);
  };

  return (
    <CommonSelect onChange={(e: any) => onHandleChange(e)}>
      {data.map((item: any, index: number) => {
        return (
          <option value={item.value} key={`common-select-${index}`}>
            {item.title}
          </option>
        );
      })}
    </CommonSelect>
  );
};

export default Dropdown;

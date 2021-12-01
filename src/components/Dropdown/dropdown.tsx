import React from "react";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
// import type

interface dropdownProps {
  data: any;
  onChange?: any;
}

const Select = styled.select`
  height: 38px;
  padding: 10px;
  border-radius: 7px;
  width: 100%;
  color: ${themeGet("colors.gray.300")};
  border: none;
  font-size: 16px;
  font-weight: 400;
  option {
    color: ${themeGet("colors.black.100")};
    background: ${themeGet("colors.white")};
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const Dropdown: React.FC<dropdownProps> = ({ data, onChange }) => {
  const onHandleChange = (e: any) => {
    onChange && onChange(e);
  };
  return (
    <Select onChange={(e: any) => onHandleChange(e)}>
      {data.map((item: any, index: number) => {
        return (
          <option value={item.value} key={index}>
            {item.title}
          </option>
        );
      })}
    </Select>
  );
};

export default Dropdown;

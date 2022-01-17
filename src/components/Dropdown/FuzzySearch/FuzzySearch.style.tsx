// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Select } from 'antd';

export const StyledFuzzyDropDownSearch = styled(Select)`
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
}`;
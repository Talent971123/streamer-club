// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { AutoComplete } from 'antd';

export const StyledFuzzySearch = styled(AutoComplete)`
    min-height: 38px;
    background-color: ${themeGet("colors.gray.600")};
    color: ${themeGet("colors.black.100")};
    border-radius: 7px;
    border: none;
    /* padding: 0px 12px; */
    width: 100%;
    font-size: 14px;
    .ant-select-selector{
        background: none !important;
        border: none !important;
        outline: none !important;
        height: 38px;
        .ant-select-selection-search-input{
            height: 38px !important;
        }
    }
`
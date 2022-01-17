import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import DatePicker from 'react-datepicker';


export const DateTimeSelect = styled(DatePicker)`
    min-height: 38px;
    background-color: ${themeGet("colors.gray.600")};
    color: ${themeGet("colors.black.100")};
    border-radius: 7px;
    border: none;
    padding: 0px 12px;
    width: 100%;
    font-size: 12px;
`
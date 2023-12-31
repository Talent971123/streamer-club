import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Input, DatePicker, Typography, Select, Form } from "antd";
import { defaultTheme } from "theme";
const { Text } = Typography;

export const ClubWrapper = styled.div`
  
  @media screen and (max-width: ${defaultTheme.mediaSize.lg}px) {
  
  }

  @media screen and (min-width: ${defaultTheme.mediaSize.lg}px) {
    display: block;
  }

  margin: 30px 0;
  padding: 20px;
  border-radius: 10px;
  background-color: ${themeGet("colors.gray.900")};
  * {
    font-size: 1.125rem !important;
  }


  .infoWrapper{
    border-bottom: solid #ccc 1px;
    min-height: 60px;
    margin: 0px 5px;
    max-width: 400px;
    @media screen and (max-width: ${defaultTheme.mediaSize.md}px) {
      padding: 20px 0px;
    }
  }

`;

export const BottomBorder = styled.div`
  width: 100%;
  margin: 10px 0 !important;
  height: 1px;
  background-color: ${themeGet("colors.gray.200")};
`;

export const CustomInput = styled(Input)`
  background-color: transparent !important;
  color: ${themeGet("colors.gray.150")};
  border: none;
  border-bottom: 1px solid;
  :focus {
    box-shadow: none !important;
  }
  :disabled {
    color: ${themeGet("colors.gray.150")};
    background: transparent;
  }
`;

export const CustomSelect = styled(Select)`
  width: 100%;
  border-radius: 4px;
`;

export const CustomDatePicker = styled(DatePicker)`
  width: 100%;
  border: none;
  color: ${themeGet("colors.gray.150")};
  border-bottom: 1px solid;
  box-shadow: none !important;
  background: transparent !important;
  & input {
    color: ${themeGet("colors.gray.150")};
    border: none;
    :disabled {
      color: ${themeGet("colors.gray.150")};
    }
  }
`;

export const CustomText = styled(Text)`
  @media screen and (min-width: ${defaultTheme.mediaSize.lg}px) {
    font-size: 2rem;
  }
  @media screen and (min-width: ${defaultTheme.mediaSize.md}px) {
    font-size: 1.625rem;
  }
  @media screen and (max-width: ${defaultTheme.mediaSize.md}px) {
    font-size: 1.125rem;
    text-align: center;
  }
  color: white;
`;

export const CustomForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 0 !important;
  }
`;

interface FlexWrapperInterface {
  direction?: "row" | "column"
  justify?: "space-around" | "space-evenly" | "space-between" | "center" | "flex-start" | "flex-end"
  maxWidth?: string
}

export const FlexWrapper = styled.div<FlexWrapperInterface>`
  display: flex ;
  flex-direction: column ;
  justify-content: center;
  align-items: center ;
  width: 100%;
  max-width: 100%;

  @media screen and (min-width: ${defaultTheme.mediaSize.md}px) {
    flex-direction: ${props => props.direction ?? 'column'} ;
    justify-content:  ${props => props.justify ?? 'flex-start'};
    max-width: ${props => props.maxWidth ?? '100%'};
  }
`
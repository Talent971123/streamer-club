import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Select, Checkbox as AntCheckBox, TimePicker as AntTimePicker } from "antd";
import { defaultTheme } from "theme";


export const CommentaryWrapper = styled.div`
  margin: 5px 0;
  width: 100%;
  border-radius: 8px;
  padding: 20px;
`;

export const ContentWrapper = styled.div`
  background-color: ${themeGet("colors.gray.900")};
  padding: 10px 20px ;
`;

export const Border = styled.div<{ mode: number }>`
  height: 120px;
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

export const ButtonWrapper = styled.div`
  width: 100% ;
  display: flex;
  flex-direction: column-reverse;
  padding-bottom: 15px;
  align-items: center ;
  button{
    margin: 10px 0px 0px 0px ;
  }

  @media screen and (min-width: ${defaultTheme.mediaSize.xs}px) {
    flex-direction: row-reverse;
    button{
      margin: 0px 0px 5px 0px ;
      margin-left: 10px;
      
    }
  }

`;

export const CheckBox = styled(AntCheckBox)`
  color: white ;
  font-weight: bold ;
`

export const TimeDisplay = styled.div`
    padding: 10px 20px ;
    border-radius: 5px;
    border: solid 2px ${themeGet("colors.gray.200")};
    font-weight: bold;
    width: 150px ;
    text-align: center ;
    font-size: 19px;
    margin-bottom: 5px;
`;

export const SliderWrapper = styled.div`
  
  width: 100%;
  padding: 20px 0px;
  display: flex;
  align-items: center ;
  margin-bottom: 0px !important;
  
  div.time-range-slider{
    width: 100% ;
    padding: 0px 20px;
  }

  div.time-range{
    padding: 10px 20px ;
    border-radius: 5px;
    background: ${themeGet("colors.gray.300")};
    font-weight: bold;
    width: 80px ;
    text-align: center ;
  }
`

export const TextInput = styled.input<any>`
  background-color: transparent ;
  font-size: 16px ;
  font-weight: bold ;
  border-width: 1px ;
  border: none ;
  border-bottom: solid 1px ;
  border-color: ${props => props.error ? 'red' : 'white'} ;
  width: 100% ;
  max-width: 300px ;
  padding: 5px 0px ;
  color: white ;
`

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
  input{
    margin-bottom: 15px;
  }
  
  @media screen and (min-width: ${defaultTheme.mediaSize.sm}px) {
    flex-direction: ${props => props.direction ?? 'column'} ;
    justify-content:  ${props => props.justify ?? 'flex-start'};
    max-width: ${props => props.maxWidth ?? '100%'};
    input{
      margin-bottom: 0px;
    }
  }
`
export const TimePicker = styled(AntTimePicker)`
  
  &.ant-picker{
    background: ${themeGet("colors.gray.300")};
    border: ${themeGet("colors.gray.400")};
    height: 40px;
    border-radius: 5px;
  }

  .ant-picker-input{
    >input{
      color: white;
      font-weight: bold;
    }
    /* .ant-picker-clear{
      color: white;
    } */
  }

`
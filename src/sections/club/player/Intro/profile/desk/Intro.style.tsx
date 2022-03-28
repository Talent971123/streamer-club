import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Input, DatePicker, Typography, Select, Form } from "antd";
import { defaultTheme } from "theme";
const { TextArea } = Input;
const { Text } = Typography;

export const CustomForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 0 !important;
  }
`;

export const CustomText = styled(Text)`
  font-size: 2rem;
  color: white;
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
  @media screen and (max-width: ${defaultTheme.mediaSize.sm}px) {
    width: 100%;
    max-width: 300px;
  }

`;

export const DeskProfileWrapper = styled.div`
  
  @media screen and (min-width: ${defaultTheme.mediaSize.lg}px) {
    
  }
  
  @media screen and (min-width: ${defaultTheme.mediaSize.md}px) {
    margin: 12px 0;
  }

  @media screen and (max-width: ${defaultTheme.mediaSize.md}px) {
    margin: 58px 0;
  }

  @media screen and (max-width: ${defaultTheme.mediaSize.sm}px) {
    .actionBtn{
      margin-bottom: 10px;
      width: 200px;
    }
    .playerNameWrapper{
      font-size: 1.8rem;
      margin: 15px 0px;
    }

    .saveActionButton{
      margin-top: 20px;
    }

  }

`;

export const ContentWrapper = styled.div<{ show: boolean }>`
  display: flex;
  align-items: center;
  ${({ show }) => {
    if (!show) {
      return `
        width: 245px;
        height: 40px;
        span {
          font-size: 0.75rem;
        }
        padding-left: 10px;
      `
    } else {
      return `
        padding: 20px;
        font-size: 1rem;
      `
    }
  }}
  margin: 5px 0;
  border-radius: 8px;
  background-color: ${themeGet("colors.gray.900")};
`;

export const ImageContent = styled.div`
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  strong {
    display: none;
  }

  button{
    border: none;
    position: absolute;
    top: 0;
    right: -20px;
  }

  @media screen and (min-width: ${defaultTheme.mediaSize.lg}px) {
    width: 175px;
    height: 175px;
  }
  @media screen and (max-width: ${defaultTheme.mediaSize.lg}px) {
    
    width: 150px;
    height: 150px;
    
    button{
      right: -30px;
    }

  }
  @media screen and (max-width: ${defaultTheme.mediaSize.md}px) {
    width: 180px;
    height: 180px;
    
    strong {
      display: block;
    }
  }
  img {
    min-width: 60% !important;
    min-height: 60% !important;
    max-height: 60% !important;
  }
`;

export const PlayerBtn = styled.div`

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

  @media screen and (min-width: ${defaultTheme.mediaSize.sm}px) {
    flex-direction: ${props => props.direction ?? 'column'} ;
    justify-content:  ${props => props.justify ?? 'flex-start'};
    max-width: ${props => props.maxWidth ?? '100%'};
  }
`
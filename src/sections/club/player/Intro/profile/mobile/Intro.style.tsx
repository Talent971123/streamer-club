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

export const MobileProfileWrapper = styled.div`
  display: none;
  @media screen and (max-width: ${defaultTheme.mediaSize.md}px) {
    display: block;
  }
`;

export const ContentWrapper = styled.div<{ show: boolean }>`
  display: flex;
  align-item: center;
  ${({ show }) => {
    if (!show) {
      return `
        width: 240px;
        height: 20px;
        span {
          font-size: 0.625rem;
        }
        padding-left: 10px;
      `
    } else {
      return `
        padding: 20px;
        font-size: 0.875rem;
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
  strong {
    display: none;
  }
  @media screen and (min-width: ${defaultTheme.mediaSize.lg}px) {
    width: 175px;
    height: 175px;
  }
  @media screen and (max-width: ${defaultTheme.mediaSize.lg}px) {
    width: 150px;
    height: 150px;
  }
  @media screen and (max-width: ${defaultTheme.mediaSize.md}px) {
    width: 100px;
    height: 100px;
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

export const PlayerDetailShow = styled.div`
  @media screen and (max-width: ${defaultTheme.mediaSize.md}px) {
    display: none;
  }
  @media screen and (min-width: ${defaultTheme.mediaSize.md}px) {
    display: block;
  }
`;

export const PlayerBtn = styled.div`
  * {
    font-size: 14px;
  }
`;
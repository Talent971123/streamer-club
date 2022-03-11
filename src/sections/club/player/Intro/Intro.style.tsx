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

export const CustomSelect = styled(Select)`
  width: 100%;
  border-radius: 4px;
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
export const CustomTextArea = styled(TextArea)`
  background: transparent;
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

export const ProfileWrapper = styled.div`
  @media screen and (min-width: ${defaultTheme.mediaSize.md}px) {
    margin: 12px 0;
  }
  @media screen and (max-width: ${defaultTheme.mediaSize.md}px) {
    margin: 58px 0;
  }
`;

export const ContentWrapper = styled.div`
  margin: 5px 0;
  border-radius: 8px;
  padding: 20px;
  background-color: ${themeGet("colors.gray.900")};
`;

export const ImageContent = styled.div`
  strong {
    display: none;
  }
  @media screen and (min-width: ${defaultTheme.mediaSize.lg}px) {
    img {
      width: 175px;
      height: 175px;
    }
  }
  @media screen and (max-width: ${defaultTheme.mediaSize.lg}px) {
    img {
      width: 150px;
      height: 150px;
    }
  }
  @media screen and (max-width: ${defaultTheme.mediaSize.md}px) {
    img {
      width: 100px;
      height: 100px;
    }
    strong {
      display: block;
    }
  }
  img {
    border-radius: 50%;
  }
`;

export const ClubWrapper = styled.div`
  margin: 30px 0;
  padding: 20px;
  border-radius: 10px;
  background-color: ${themeGet("colors.gray.900")};
`;

export const BottomBorder = styled.div`
  width: 100%;
  margin: 10px 0 !important;
  height: 1px;
  background-color: ${themeGet("colors.gray.200")};
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
  @media screen and (min-width: ${defaultTheme.mediaSize.lg}px) {
    width: 144px !important;
    height: 36px !important;
  }
  @media screen and (max-width: ${defaultTheme.mediaSize.lg}px) {
    width: 136px !important;
    height: 28px !important;
  }
  @media screen and (max-width: ${defaultTheme.mediaSize.md}px) {
    width: 88px !important;
    height: 22px !important;
  }
`;
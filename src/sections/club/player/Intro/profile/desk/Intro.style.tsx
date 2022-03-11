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
`;

export const DeskProfileWrapper = styled.div`
  display: none;
  @media screen and (min-width: ${defaultTheme.mediaSize.lg}px) {
    display: block;
  }
  @media screen and (min-width: ${defaultTheme.mediaSize.md}px) {
    margin: 12px 0;
  }
  @media screen and (max-width: ${defaultTheme.mediaSize.md}px) {
    margin: 58px 0;
  }
`;

export const ContentWrapper = styled.div<{ show: boolean }>`
  display: flex;
  align-item: center;
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

export const PlayerBtn = styled.div`

`;
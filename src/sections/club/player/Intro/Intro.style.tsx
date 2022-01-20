import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Input, DatePicker, Typography } from "antd";
const { TextArea } = Input;

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
  margin: 30px 0;
`;

export const ContentWrapper = styled.div`
  margin: 5px 0;
  border-radius: 8px;
  padding: 20px;
  background-color: ${themeGet("colors.gray.900")};
`;

export const ImageContent = styled.div`
  contain: content;
  width: 100%;
  height: 100%;
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

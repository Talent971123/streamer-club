import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import Select from "antd/lib/select";
export const phone_inputStyle = {
  width: "100%",
  height: "38px",
  borderRadius: "4px",
  color: "black",
  background: "#E5E5E5",
};

export const phone_dropstyle = {
  color: "black",
};
export const CustomSelect = styled(Select)`
  color: black !important;
  font-size: 14px;
  width: 100%;
  border-radius: 4px;
  height: 38px;
  color: black;
  background: #e5e5e5;
  & div {
    height: 100% !important;
    display: flex;
    align-items: center;
  }
`;

export const ModalWrapper = styled.div<{ show: boolean }>`
  position: fixed;
  z-index: 16;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  ${({ show }) =>
    show
      ? css`
          visibility: visible;
        `
      : css`
          visibility: hidden;
        `};
  text-align: left;
`;

export const ModalContent = styled.div<{ show: boolean }>`
  border-radius: 4px;
  transition: all ease 0.5s;
  ${({ show }) =>
    show
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `};
  padding: 20px;
  position: fixed;
  background: ${themeGet("colors.black.300")};
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalBody = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ul {
    li {
      list-style: disc !important;
      padding: 3px;
    }
  }
`;

export const ModalHeader = styled.div`
  padding-bottom: 20px;
`;

export const ModalFooter = styled.div`
  padding-top: 30px;
  display: flex;
  gap: 20px;
  justify-content: right;
`;

export const ImageContent = styled.div`
  border: 2px solid gray;
  border-radius: 4px;
  contain: content;
  position: relative;
  width: 300px;
  height: 300px;
`;

export const NumberRange = styled.input`
  width: 100%;
`;

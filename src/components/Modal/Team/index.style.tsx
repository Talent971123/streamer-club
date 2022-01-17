import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";

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

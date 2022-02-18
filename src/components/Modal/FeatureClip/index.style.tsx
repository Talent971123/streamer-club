import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { defaultTheme } from "theme";

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
          display: block;
        `
      : css`
          display: none;
        `};
  padding: 0;
  position: fixed;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 88%;

  @media screen and (max-width: ${defaultTheme.mediaSize.md}px) {
    width: 92.5%;
  }
  @media screen and (max-width: ${defaultTheme.mediaSize.sm}px) {
    width: 95%;
  }
`;

export const ModalBody = styled.div``;

export const ModalHeader = styled.div`
  padding-bottom: 10px;
  display: flex;
  justify-content: right;
`;

export const ModalFooter = styled.div`
  padding: 20px;
  display: flex;
  gap: 20px;
  justify-content: left;
  background: ${themeGet("colors.black.300")};
  .footer-text{
    font-size: 24px;
  }
  @media screen and (max-width: ${defaultTheme.mediaSize.md}px) {
    padding: 15px;
    .footer-text{
      font-size: 20px;
    }
  }
  @media screen and (max-width: ${defaultTheme.mediaSize.sm}px) {
    padding: 10px;
    .footer-text{
      font-size: 14.5px;
    }
  }
`;
import styled, { css } from "styled-components";

export const ModalWrapper = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  ${({ show }) =>
    show
      ? css`
          display: block;
        `
      : css`
          display: none;
        `};
`;

export const ModalContent = styled.div`
  border-radius: 7px;
  position: fixed;
  background: white;
  width: 70%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalBody = styled.div``;

export const ModalHeader = styled.div``;

export const ModalFooter = styled.div``;

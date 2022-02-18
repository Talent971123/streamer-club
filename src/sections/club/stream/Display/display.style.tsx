import styled from "styled-components";

export const DisplayWrpper = styled.div`
  position: relative;
`;

export const UpcommingDateTime = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20%;
  z-index: 10;
  @media (max-width: 480px) {
    bottom: 0;
  }
`;

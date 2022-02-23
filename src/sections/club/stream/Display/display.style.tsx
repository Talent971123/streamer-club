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

export const ScoreWrapper = styled.div`
  z-index: 10;
  top: 3%;
  left: 3%;
  position: absolute;
`;

export const ScoreTimeWrapper = styled.div`
  z-index: 10;
  top: 3%;
  right: 3%;
  position: absolute;
`;

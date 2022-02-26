import styled from "styled-components";

export const StyleContent = styled.div`
  position: relative;
  height: 100%;
  * {
    height: 100% !important;
  }
`;

export const AvartarContent = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  top: 0;
  z-index: 1;
  justify-content: space-around;
  align-items: center;
  * {
    width: 90px !important;
    height: 90px !important;
  }
`;

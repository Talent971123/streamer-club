import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const TeamCardWrapper = styled.div`
  width: 97%;
  height: 250px;
  border-radius: 10px;
  contain: content;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
export const LiveWrapper = styled.div`
  background-color: ${themeGet("colors.red.100")};
  width: 60px;
  height: 30px;
  text-align: center;
  border-radius: 10px;
`;
export const UserWrapper = styled.div`
  background-color: ${themeGet("colors.black.regular")}99;
  width: 60px;
  border-radius: 10px;
  height: 30px;
  text-align: center;
`;
export const LayerWrapper = styled.div`
  width: 100%;
  z-index: 1;
  height: 20%;
  position: absolute;
  bottom: 0;
  background-color: ${themeGet("colors.black.regular")}99;
`;

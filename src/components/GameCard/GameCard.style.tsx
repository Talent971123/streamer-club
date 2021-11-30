import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const GameCardWrapper = styled.div`
  width: 314px;
  padding: 0 7px;
`;

export const LayerWrapper = styled.div`
  width: 100%;
  z-index: -1;
  height: 100%;
  position: absolute;
  top: 0px;
  background-color: ${themeGet("colors.blue.100")}80;
`;

export const CardContent = styled.div`
  height: 181px;
  width: 100%;
  position: relative;
`;

export const CardFooter = styled.div`
  padding-top: 10px;
`;

export const LiveWrapper = styled.div`
  background-color: ${themeGet("colors.red.100")};
  width: 45px;
  height: 23px;
  text-align: center;
`;

export const UserWrapper = styled.div`
  background-color: ${themeGet("colors.black.regular")}60;
  width: 48px;
  height: 23px;
  text-align: center;
`;

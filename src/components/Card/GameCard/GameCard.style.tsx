import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const GameCardWrapper = styled.div`
  border-radius: 10px;
  width: 98%;
  contain: content;
`;

export const LayerWrapper = styled.div`
  width: 100%;
  z-index: 1;
  height: 100%;
  position: absolute;
  top: 0px;
  background-color: ${themeGet("colors.blue.100")}90;
`;

export const Content = styled.div`
  z-index: 3;
  width: 100%;
  position: absolute;
`;

export const CardContent = styled.div`
  height: 181px;
  width: 100%;
  position: relative;
`;

export const CardFooter = styled.div`
  padding: 10px 12px;
  background-color: ${themeGet("colors.black.300")};
`;

export const LiveWrapper = styled.div`
  background-color: ${themeGet("colors.red.100")};
  width: 45px;
  height: 25px;
  text-align: center;
  border-radius: 8px;
`;

export const UserWrapper = styled.div`
  background-color: ${themeGet("colors.black.regular")}60;
  width: 48px;
  height: 25px;
  border-radius: 8px;
  text-align: center;
`;

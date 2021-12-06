import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const BannerWrapper = styled.div`
  position: relative;
`;
export const Content = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  z-index: 2;
  background: linear-gradient(0deg, #141414, #191d227e);
`;

export const VSWrapper = styled.div`
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

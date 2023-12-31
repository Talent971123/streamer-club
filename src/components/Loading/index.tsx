import styled from "styled-components";
import React from "react";
import { themeGet } from "@styled-system/theme-get";
import { Image } from "components/Image";
import loading from "assets/images/layout/loading.gif";
const CustomLoadingWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  left: 0%;
  top: 0%;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.7);
  flex-direction: column;
`;
const CustomLoadingContent = styled.div`
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  background: transparent;
  border: 3px solid #3c3c3c;
  border-radius: 50%;
  text-align: center;
  line-height: 150px;
  font-family: sans-serif;
  font-size: 20px;
  color: ${themeGet("colors.red.100")};
  letter-spacing: 4px;
  text-transform: uppercase;
  text-shadow: 0 0 10px ${themeGet("colors.red.100")};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  &:before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    width: 100%;
    height: 100%;
    border: 3px solid transparent;
    border-top: 3px solid ${themeGet("colors.red.100")};
    border-right: 3px solid ${themeGet("colors.red.100")};
    border-radius: 50%;
    animation: animateC 2s linear infinite;
    @keyframes animateC {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  } */
`;
export const Label = styled.span`
  /* display: block;
  position: absolute;
  top: calc(50% - 2px);
  left: 50%;
  width: 50%;
  height: 4px;
  background: transparent;
  transform-origin: left;
  animation: animate 2s linear infinite;
  @keyframes animate {
    0% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(405deg);
    }
  }
  &:before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${themeGet("colors.red.100")};
    top: -6px;
    right: -8px;
    box-shadow: 0 0 20px ${themeGet("colors.red.100")};
  } */
`;

const Loading = () => {
  return (
    <CustomLoadingWrapper>
      <CustomLoadingContent>
        <Image src={loading} oFit="contain" />
      </CustomLoadingContent>
    </CustomLoadingWrapper>
  );
};

export default Loading;

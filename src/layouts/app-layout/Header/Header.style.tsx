// styled component
import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// -------------------------------------------------

export const HeaderWrapper = styled.div`
  height: 62px;
  width: 100%;
  border-bottom: 1px solid ${themeGet("colors.gray.300")};
  .ImageWrapper {
    contain: content;
    img {
      border-radius: 50%;
    }
  }
`;

export const MenuItem = styled.div<{ mode: String }>`
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin: 0 10px;
  transition: all 0.2s ease-in-out;
  ::after {
    transition: all 0.2s ease-in-out;
    position: absolute;
    content: "";
    height: 2px;
    background-color: ${themeGet("colors", "white")};
    width: 100%;
    left: 0;
    bottom: -5px;
    transform: scaleX(0);
  }
  :hover {
    ::after {
      transform: scaleX(1);
    }
  }
  ${({ mode }) => {
    if (mode === "true") {
      return css`
        p {
          color: ${themeGet("colors.white.100")};
        }
        ::after {
          transform: scaleX(1);
        }
      `;
    }
  }}
`;

export const Border = styled.div`
  height: 24px;
  width: 1px;
  background-color: ${themeGet("colors.gray.300")};
`;

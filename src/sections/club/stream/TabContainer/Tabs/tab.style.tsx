import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const TabWrapper = styled.div`
  padding: 20px;
  height: 80px;
`;

export const Scrollbar = styled.div``;

export const MenuItem = styled.div<{ mode?: String }>`
  display: inline-block;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  ::after {
    transition: all 0.2s ease-in-out;
    position: absolute;
    content: "";
    height: 2px;
    background-color: ${themeGet("colors.red.100")};
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

// export const MenuItem = styled.div<{ mode: String }>`
//   display: inline-block;
//   position: relative;
//   cursor: pointer;
//   margin: 0 10px;
//   transition: all 0.2s ease-in-out;
//   ::after {
//     transition: all 0.2s ease-in-out;
//     position: absolute;
//     content: "";
//     height: 2px;
//     background-color: ${themeGet("colors", "white")};
//     width: 100%;
//     left: 0;
//     bottom: -5px;
//     transform: scaleX(0);
//   }
//   :hover {
//     ::after {
//       transform: scaleX(1);
//     }
//   }
//   ${({ mode }) => {
//     if (mode === "true") {
//       return css`
//         p {
//           color: ${themeGet("colors.white.100")};
//         }
//         ::after {
//           transform: scaleX(1);
//         }
//       `;
//     }
//   }}
// `;

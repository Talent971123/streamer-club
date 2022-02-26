// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { defaultTheme } from "theme";
// -----------------------------------------------

export const CopyRightSectionWrapper = styled.div`
  padding: 20px 0;
  font-size: 11px;
  color: ${themeGet("colors.gray.100")};
  ::after {
    content: " ";
    width: 100%;
    height: 1px;
    background: ${themeGet("colors.gray.300")};
    position: absolute;
    top: 0;
    left: 0;
  }
  @media screen and (min-width: ${defaultTheme.mediaSize.md}px) {
    img {
      width: 300px !important; 
      height: 32px !important;
    }
  }
  @media screen and (max-width: ${defaultTheme.mediaSize.md}px) {
    border: none;
    img {
      width: 250px !important;
      height: 27px !important;
    }
  }
  @media screen and (max-width: ${defaultTheme.mediaSize.sm}px) {
    color: ${themeGet("colors.white")};
    font-size: 12px;
    font-weight: 400;
    img {
      width: 250px !important;
      height: 27px !important;
    }
  }
`;

export const CopyRightLogImg = styled.div<{ mode: string }>`
${({ mode }) => {
  if (mode !== "sm") {
    return `
      @media screen and (min-width: ${defaultTheme.mediaSize.md}px) {
        img {
          margin-top: 20px;
        }
      }
      @media screen and (min-width: ${defaultTheme.mediaSize.sm}px) {
        img {
          display: none !important;
          margin-top: 15px;
        }
      }
      @media screen and (max-width: ${defaultTheme.mediaSize.sm}px) {
        img {
          display: block !important;
        }
      }
    `;
  } else {
    return `
      @media screen and (min-width: ${defaultTheme.mediaSize.sm}px) {
        img {
          display: block !important;
        }
      }
      @media screen and (max-width: ${defaultTheme.mediaSize.sm}px) {
        img {
          display: none !important;
        }
      }
    `;
  }
}}
`;
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { defaultTheme } from "theme";

export const DisplayWrpper = styled.div<{ loading: boolean }>`
  width: 100%;
  max-height: 80vh;
  ${({ loading }) => (loading ? "display:none;" : "display:block;")}
`;

export const DisplayContainer = styled.div`
  .bmpui-ui-uicontainer {
    font-family: "HeyWow";
    font-size: 1.1rem;
    @media screen and (max-width: ${defaultTheme.mediaSize.xs}px) {
      font-size: 0.8rem;
    }
  }
  .bmpui-ui-watermark {
    display: none;
  }
  .bmpui-ui-buffering-overlay {
    display: none;
  }
  .bmpui-seekbar-playbackposition,
  .bmpui-seekbar-playbackposition-marker {
    background-color: ${themeGet("colors.primary.regular")} !important;
    border: 0.1rem solid ${themeGet("colors.primary.regular")} !important;
  }
  .bmpui-ui-settings-panel-item .bmpui-ui-selectbox {
    color: ${themeGet("colors.primary.regular")} !important;
  }
  .bmpui-ui-fullscreentogglebutton.bmpui-on,
  .bmpui-ui-settingstogglebutton.bmpui-on {
    filter: invert(1);
  }
  .bmpui-ui-seekbar-label,
  .bmpui-seekbar-thumbnail {
    width: 200px !important;
    @media screen and (max-width: ${defaultTheme.mediaSize.md}px) {
      width: 150px !important;
    }

    @media screen and (max-width: ${defaultTheme.mediaSize.sm}px) {
      width: 120px !important;
    }
    @media screen and (max-width: ${defaultTheme.mediaSize.xs}px) {
      width: 100px !important;
    }
  }
`;

import styled, { createGlobalStyle, css } from "styled-components";
import { get } from "styled-system";
import { defaultTheme } from "theme";
import photo from "assets/images/home/default-bg.png";

export const GlobalStyle = createGlobalStyle(({ theme }) =>
  css({
    "*, *::before, *::after": {
      boxSizing: "border-box",
      outline: "none !important",
    },
    "#__next": {
      width: "100%",
      height: "100%",
    },
    html: {
      scrollBehavior: "smooth",
      overflowX: "hidden",
      margin: 0,
      padding: 0,
    },
    ".poster": {
      position: "absolute",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundColor: "#121113",
      backgroundPosition: "center",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      width: "100%",
      height: "100%",
      zIndex: 10,
      backgroundImage: `url(${photo.src})`,
    },
    body: {
      scrollBehavior: "smooth",
      padding: 0,
      color: get(theme, "colors.white"),
      margin: "0 auto",
      transition: get(theme, "transition.normal"),
      fontFamily: "HeyWow !important",
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "1.5",
      backgroundColor: get(theme, "colors.black.100"),
      WebkitTextSizeAdjust: "100%",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      textShadow: "1px 1px 1px rgba(0, 0, 0, 0.004)",
      button: {
        "-moz-user-select": "none",
        "-khtml-user-select": "none",
        "-webkit-user-select": "none",
        "-ms-user-select": "none",
        "user-select": "none",
      },
      "::-webkit-scrollbar": {
        width: "3px",
      },
      "::-webkit-scrollbar-track": {
        boxShadow: "inset 0 0 5px grey",
        borderRadius: "10px",
      },
      " ::-webkit-scrollbar-thumb": {
        background: get(theme, "colors.primary.regular"),
        borderRadius: "6px",
      },
    },

    h1: {
      fontFamily: "MartelSans",
      fontSize: "5xl",
      fontWeight: "bolder",
      zIndex: 10,
      margin: 0,
    },
    h2: {
      fontFamily: "MartelSans",
      fontSize: "4xl",
      fontWeight: "bold",
      zIndex: 10,
      margin: 0,
    },
    h3: {
      fontFamily: "MartelSans",
      fontSize: "xl",
      fontWeight: "bold",
      zIndex: 10,
      margin: 0,
    },
    h4: {
      fontFamily: "MartelSans",
      fontSize: "xl",
      fontWeight: "regular",
      zIndex: 10,
      margin: 0,
    },
    h5: {
      fontFamily: "MartelSans",
      fontSize: "mm",
      fontWeight: "regular",
      zIndex: 10,
      margin: 0,
    },
    h6: {
      fontFamily: "MartelSans",
      fontSize: "ms",
      fontWeight: "medium",
      zIndex: 10,
      margin: 0,
    },

    "p,span,button,li,div": {
      fontFamily: "base",
      margin: 0,
    },
    a: {
      fontFamily: "MartelSans",
      textDecoration: "none",
    },
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
    li: {
      listStyle: "none",
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    button: {
      appearance: "none",
    },
    img: {
      maxWidth: "100%",
    },
    ".bmpui-ui-uicontainer": {
      fontFamily: "HeyWow !important",
      fontSize: "1.1rem !important",
    },
    ".bmpui-ui-watermark": {
      display: "none",
    },
    ".bmpui-seekbar-playbackposition": {
      backgroundColor: `${get(theme, "colors.primary.regular")} !important`,
    },
    ".bmpui-seekbar-playbackposition-marker": {
      border: `.35rem solid ${get(theme, "colors.primary.regular")} !important`,
    },
    ".bmpui-ui-selectbox": {
      color: `${get(theme, "colors.primary.regular")} !important`,
    },
    ".bmpui-ui-fullscreentogglebutton bmpui-off": {
      filter: "unset !important",
    },
    ".bmpui-on.bmpui-ui-audiotracksettingstogglebutton:hover, .bmpui-on.bmpui-ui-settingstogglebutton:hover":
      {
        filter: "invert(1) !important",
      },

    ".bmpui-ui-fullscreentogglebutton.bmpui-on": {
      filter: "invert(1) !important",
    },

    // custom
    "#nprogress": {
      pointerEvents: "none",
    },
    "#nprogress .bar": {
      top: "0",
      left: "0",
      height: "2px",
      width: "100%",
      position: "fixed",
      background: get(theme, "colors.primary.regular"),
      boxShadow: `0 0 2px ${get(theme, "colors.primary.regular")}`,
    },
    "#nprogress .peg": {
      right: "0",
      opacity: "1",
      width: "100px",
      height: "100%",
      display: "block",
      position: "absolute",
      transform: "rotate(3deg) translate(0px, -4px)",
      boxShadow: `0 0 10px ${get(
        theme,
        "colors.primary.regular"
      )}, 0 0 5px ${get(theme, "colors.primary.regular")}`,
    },

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ...theme.globals,
  })
);

export const CarouselBody = styled.div`
  @media screen and (min-width: ${defaultTheme.mediaSize.lg}px) {
    width: 15% !important;
  }

  @media screen and (min-width: ${defaultTheme.mediaSize
      .md}px) and (max-width: ${defaultTheme.mediaSize.lg}px) {
    width: 25% !important;
  }

  @media screen and (min-width: ${defaultTheme.mediaSize
      .sm}px) and (max-width: ${defaultTheme.mediaSize.md}px) {
    width: 33% !important;
  }

  @media screen and (max-width: ${defaultTheme.mediaSize.sm}px) {
    width: 100% !important;
  }
`;

export const ClubBody = styled.div`
  @media screen and (min-width: ${defaultTheme.mediaSize.md}px) {
    width: 250px;
  }

  @media screen and (max-width: ${defaultTheme.mediaSize.md}px) {
    width: 200px;
  }

  @media screen and (max-width: ${defaultTheme.mediaSize.sm}px) {
    width: 150px;
  }

  @media screen and (max-width: ${defaultTheme.mediaSize.xs}px) {
    width: 100px;
  }
`;
export const CardBody = styled.div`
  @media screen and (min-width: ${defaultTheme.mediaSize.md}px) {
    width: 324px;
  }

  @media screen and (max-width: ${defaultTheme.mediaSize.md}px) {
    width: 272px;
  }

  @media screen and (max-width: ${defaultTheme.mediaSize.sm}px) {
    width: 222px;
  }
`;

// include Card style

export const CardWrapper = styled.div`
  width: 98%;
  border-radius: 6px;
  contain: content;
  cursor: pointer;
  margin: 0 5px;
`;

export const CardContent = styled.div`
  @media screen and (min-width: ${defaultTheme.mediaSize.md}px) {
    height: 212px;
  }

  @media screen and (max-width: ${defaultTheme.mediaSize.md}px) {
    height: 182px;
  }

  @media screen and (max-width: ${defaultTheme.mediaSize.sm}px) {
    height: 147px;
  }
  width: 100%;
  position: relative;
`;

export const CardFooter = styled.div`
  @media screen and (min-width: ${defaultTheme.mediaSize.md}px) {
    padding: 3px 6%;
  }

  @media screen and (max-width: ${defaultTheme.mediaSize.md}px) {
    padding: 2px 6%;
  }

  @media screen and (max-width: ${defaultTheme.mediaSize.sm}px) {
    padding: 0 6%;
  }
  background-color: rgba(29, 29, 29, 0.4);
  position: absolute;
  bottom: 0px;
  width: 100%;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const LiveWrapper = styled.div`
  background-color: #fa3737;
  width: 39px;
  height: 19px;
  text-align: center;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

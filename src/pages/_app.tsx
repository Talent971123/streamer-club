// import next
import type { AppProps } from "next/app";
import { Router } from "next/router";
// import React
import React, { useEffect } from "react";
// import layout
import AppLayout from "layouts/app-layout";
import NProgress from "nprogress";
// import context providers
import { ThemeProvider } from "styled-components";

// import CSS
import "react-multi-carousel/lib/styles.css";
import { defaultTheme } from "theme";
import { GlobalStyle } from "theme/global.state";

NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function Streamer({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default Streamer;

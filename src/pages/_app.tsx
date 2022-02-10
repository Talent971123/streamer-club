// import next
import type { AppProps } from "next/app";
import { Router } from "next/router";
import NProgress from "nprogress";
// import React
import React, { useEffect, useState } from "react";
// import layout
import AppLayout from "layouts/app-layout";
// import context providers
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/client";
// apollo setting
import { useApollo } from "api/apollo";
//  Redux
import { wrapper } from "redux/store";
import { ToastContainer } from "react-toastify";
//auth0
import { UserProvider } from "@auth0/nextjs-auth0";
import { defaultTheme } from "theme";
// import CSS
import "./style.css";
import "antd/dist/antd.css";
import "react-toggle/style.css";
import "@mux/videojs-kit/dist/index.css";
import "react-phone-input-2/lib/style.css";
import "react-multi-carousel/lib/styles.css";
import "bitmovin-player/bitmovinplayer-ui.css";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "theme/global.state";

NProgress.configure({ showSpinner: false });

function Streamer({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });
  Router.events.on("routeChangeError", () => NProgress.done());

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={defaultTheme}>
        <UserProvider>
          <AppLayout>
            <Component {...pageProps} />
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              theme="dark"
              pauseOnHover
            />
          </AppLayout>
        </UserProvider>
        <GlobalStyle />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default wrapper.withRedux(Streamer);

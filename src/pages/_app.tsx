// import next
import type { AppProps } from "next/app";
import { Router } from "next/router";
import NProgress from "nprogress";
// import React
import React, { useEffect, useState } from "react";
// import layout
import AppLayout from "layouts/app-layout";
// import component
import Loading from "components/Loading";
// import context providers
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/client";
// apollo setting
import { useApollo } from "api/apollo";
// Redux
import { wrapper } from "redux/store";
// import CSS
import { defaultTheme } from "theme";
import { GlobalStyle } from "theme/global.state";
import "react-multi-carousel/lib/styles.css";
import "react-toggle/style.css";
import "@mux/videojs-kit/dist/index.css";
import "antd/dist/antd.css";

NProgress.configure({ showSpinner: false });

function Streamer({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", () => {
    setLoading(true);
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
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
        <AppLayout>
          {/* {!loading ? <Component {...pageProps} /> : <Loading />} */}
          <Component {...pageProps} />
        </AppLayout>
        <GlobalStyle />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default wrapper.withRedux(Streamer);

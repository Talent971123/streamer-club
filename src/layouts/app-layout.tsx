import React from "react";
// component
import { ScrollTop } from "components/Button";
// layout
import { Header, Footer } from "layouts/app-layout/index";
// styled component
import { AppLayoutWrapper } from "./app-layout.style";

// -----------------------------------------------------------

const Layout = ({ children }) => {
  return (
    <AppLayoutWrapper>
      <Header />
      {children}
      <Footer />
      <ScrollTop />
    </AppLayoutWrapper>
  );
};

export default Layout;

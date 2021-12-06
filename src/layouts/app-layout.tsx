import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// component
import { ScrollTop } from "components/Button";
// layout
import { Header, Footer } from "layouts/app-layout/index";
import { TeamHeader } from "layouts/Club/Team";
// styled component
import { AppLayoutWrapper } from "./app-layout.style";
import router from "next/router";
// -----------------------------------------------------------

const Layout = ({ children }) => {
  const router = useRouter();
  const [mode, setMode] = useState<string>("");
  useEffect(() => {
    const type = "/";
    setMode(router.route.split(type)[2]);
  }, [router]);

  return (
    <AppLayoutWrapper>
      <Header />
      {mode === "team" ? <TeamHeader /> : null}
      {children}
      <Footer />
      <ScrollTop />
    </AppLayoutWrapper>
  );
};

export default Layout;

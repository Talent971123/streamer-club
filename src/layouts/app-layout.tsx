import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// component
import { ScrollTop } from "components/Button";
// layout
import { Header, Footer } from "layouts/app-layout/index";
import { TeamHeader } from "layouts/club/team";
import { WithContainer } from "components/Container";
// styled component
import { AppLayoutWrapper } from "./app-layout.style";
// -----------------------------------------------------------

const Layout = ({ children }) => {
  const router = useRouter();
  const [mode, setMode] = useState<string>("");
  useEffect(() => {
    const type = "/";
    console.log(router.route.split(type));
    if (router.route.split(type)[3] !== "all") {
      setMode(router.route.split(type)[2]);
    } else {
      setMode("");
    }
  }, [router]);

  return (
    <AppLayoutWrapper>
      <WithContainer SectionView={Header} mode="wrapper" />
      {mode === "team" ? (
        <WithContainer SectionView={TeamHeader} mode="wrapper" />
      ) : null}
      {children}
      <Footer />
      <ScrollTop />
    </AppLayoutWrapper>
  );
};

export default Layout;

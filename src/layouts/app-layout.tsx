import React, { useEffect, useState } from "react";
import { useRouter } from "hooks";
// component
import { ScrollTop } from "components/Button";
// layout
import { Header, Footer } from "layouts/app-layout/index";
import { TeamHeader } from "layouts/clubv/team";
import { WithContainer } from "components/Container";
import { useUser } from "@auth0/nextjs-auth0";
// styled component
import {
  AppLayoutWrapper,
  MenuItemList,
  MenuItemBody,
} from "./app-layout.style";
import _ from "lodash";
// -----------------------------------------------------------
const MenuItems = (club_slug: string, user: any) => {
  const menus = [
    { title: "Home", path: `/club/${club_slug}`, public: true },
    { title: "Live & Upcoming", path: `/club/${club_slug}/live`, public: true },
    { title: "Replays", path: `/club/${club_slug}/replays`, public: true },
    { title: "Teams", path: `/club/${club_slug}/teams`, public: true },
    { title: "Players", path: `/club/${club_slug}/players`, public: true },
    { title: "Admin", path: `/club/${club_slug}/admin`, public: false },
  ];

  return user ? menus : _.filter(menus, ["public", true]);
};

const Layout = ({ children }) => {
  const router = useRouter();
  const [mode, setMode] = useState<string>("");

  const { move, path, param, asPath }: any = useRouter();
  const [flag, setFlag] = useState<string>("/");
  const [bannerFlag, setBanner] = useState(false);

  useEffect(() => {
    setFlag(path.split("/")[3]);
  }, [path]);

  const { user } = useUser();

  const setBannerFlag = () => {
    setBanner(!bannerFlag);
  };

  const menu = MenuItems(param ? param.club_slug : "", user);
  // const menu = MenuItems('param.club_slug', user);

  const handleMenuClick = (to: any) => {
    setBannerFlag();
    move(to);
  };

  return (
    <AppLayoutWrapper>
      <WithContainer
        SectionView={Header}
        sectionProps={{ bannerFlag: setBannerFlag }}
        mode="wrapper"
      />
      {mode === "team" ? (
        <WithContainer
          SectionView={TeamHeader}
          sectionProps={{ bannerFlag: setBannerFlag }}
          mode="wrapper"
        />
      ) : null}
      <MenuItemBody>
        {bannerFlag &&
          menu.map((item: any, index: number) => {
            return (
              <MenuItemList
                mode={flag === item.path.split("/")[3] ? "true" : "false"}
                onClick={() => handleMenuClick(item.path)}
                key={index}
              >
                {item.title}
              </MenuItemList>
            );
          })}
      </MenuItemBody>
      {children}
      <Footer />
      <ScrollTop />
    </AppLayoutWrapper>
  );
};

export default Layout;

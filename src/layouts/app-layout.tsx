import React from "react";
import { useRouter } from "hooks";
// component
import { ScrollTop } from "components/Button";
// layout
import { Header, Footer } from "layouts/app-layout/index";
import { WithContainer } from "components/Container";
import { useUser } from "@auth0/nextjs-auth0";
// styled component
import { AppLayoutWrapper } from "./app-layout.style";
import _ from "lodash";
// redux
import { setPlayerList } from "redux/actions/players";
import { setTeamList } from "redux/actions/teams";
import { setClubInfo } from "redux/actions/club";
import { connect } from "react-redux";

import { HomeQL } from "graphql/club";
import { useSubscription } from "@apollo/client";
// -----------------------------------------------------------
const MenuItems = (club_slug: string, path: string, user: any) => {
  let menus: any = [];
  if (path === "/" || path.split("/")[1] === "main") {
    menus = [
      { title: "Home", path: `/`, public: true },
      {
        title: "Live & Upcoming",
        path: `/main/live`,
        public: true,
      },
      { title: "Replays", path: `/main/replays`, public: true },
      { title: "Clips", path: `/main/clips`, public: true },
      { title: "Clubs", path: `/main/clubs`, public: true },
      { title: "My Profile", path: `/main/profile`, public: true },
    ];
  } else {
    menus = [
      { title: "Home", path: `/club/${club_slug}`, public: true },
      {
        title: "Live & Upcoming",
        path: `/club/${club_slug}/live`,
        public: true,
      },
      { title: "Replays", path: `/club/${club_slug}/replays`, public: true },
      { title: "Teams", path: `/club/${club_slug}/teams`, public: true },
      { title: "Players", path: `/club/${club_slug}/players`, public: true },
      { title: "Admin", path: `/club/${club_slug}/admin`, public: false },
    ];
  }

  return user ? menus : _.filter(menus, ["public", true]);
};

const Layout = (props) => {
  const { setTeamList, setClubInfo, setPlayerList, children } = props;
  const { param, asPath }: any = useRouter();
  const { user } = useUser();
  const menu = MenuItems(param ? param.club_slug : "", asPath, user);

  useSubscription(HomeQL.SUB_CLUB, {
    variables: {
      club_slug: param.club_slug,
    },
    onSubscriptionData({ subscriptionData: { data } }) {
      if (data) {
        setClubInfo(data.clubs[0]);
        setPlayerList(data.clubs[0].players);
        setTeamList(data.clubs[0].teams);
      }
    },
  });

  return (
    <AppLayoutWrapper>
      <WithContainer
        SectionView={Header}
        mode="wrapper"
        sectionProps={{ menu }}
      />

      {children}
      <Footer />
      <ScrollTop />
    </AppLayoutWrapper>
  );
};

const mapStateToProps = (state) => ({
  clubInfo: state.club.info,
});

const mapDispatchToProps = {
  setClubInfo: setClubInfo,
  setPlayerList: setPlayerList,
  setTeamList: setTeamList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

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
import { connect } from "react-redux";
import { useSubscription, useQuery } from "@apollo/client";

import { SITEQL } from "graphql/club";
import { HomeQL } from "graphql/club";
import { setSiteSettings, setSiteClubs, setSiteEvents } from "redux/actions/site";
import { setPlayerList } from "redux/actions/players";
import { setTeamList } from "redux/actions/teams";
import { setClubInfo } from "redux/actions/club";

import { siteSettings } from "hooks";
import { USER_ROLE } from "utils/constData";

import { mutate, query } from "graphql/stream";

/** List of no Club subpages */
const HomePages = ['/']

// -----------------------------------------------------------
const MenuItems = (club_slug: string, path: string, user: any) => {
  let menus: any = [];
  if (
    HomePages.includes(path) ||
    path.includes("/profile") ||
    path.includes("/main")
  ) {
    menus = [
      {
        title: "Home",
        path: `/`,
        public: true,
        display: siteSettings("header_menu.home"),
      },
    ];
  } else {
    menus = [
      {
        title: "Home",
        path: `/club/${club_slug}`,
        public: true,
        display: siteSettings("header_menu.home"),
      },
      {
        title: "Live & Upcoming",
        path: `/club/${club_slug}/live`,
        public: true,
        display: siteSettings("header_menu.live"),
      },
      {
        title: "Replays",
        path: `/club/${club_slug}/replays`,
        public: true,
        display: siteSettings("header_menu.replays"),
      },
      {
        title: "Teams",
        path: `/club/${club_slug}/teams`,
        public: true,
        display: siteSettings("header_menu.teams"),
      },
      {
        title: "Players",
        path: `/club/${club_slug}/players`,
        public: true,
        display: siteSettings("header_menu.players"),
      },
      {
        title: "Admin",
        path: `/club/${club_slug}/admin`,
        public: false,
        display: siteSettings("header_menu.admin"),
      },
    ];
  }

  if (user?.user_role_id !== USER_ROLE.ADMIN) {
    _.remove(menus, ["title", "Admin"]);
  }

  menus = _.filter(menus, ["display", true]);

  return user ? menus : _.filter(menus, ["public", true]);
};

const Layout = (props) => {
  const {
    setSettings,
    setClubInfo,
    setPlayerList,
    setTeamList,
    setSiteClubs,
    setSiteEvents,
    children,
  } = props;
  const { param, asPath }: any = useRouter();
  const { user } = useUser();
  const menu = MenuItems(param ? param.club_slug : "", asPath, user);
  /** 
   * TODO: Refactor to query
   * TODO: Fix hooks error see source
  useSubscription(SITEQL.SUB_SITE_SETTINGS, {
    variables: { where: { name: { _eq: "main" } } },
    onSubscriptionData({ subscriptionData: { data } }) {
      setSettings(data.site_settings[0].values);
    },
  });
  */

  /** hydrate redux */
  useSubscription(HomeQL.SUB_CLUB, {
    variables: {
      club_slug: param.club_slug,
    },
    onSubscriptionData({ subscriptionData: { data } }) {

      if (data) {
        setClubInfo(data.clubs[0] ?? []);
        setPlayerList(data.clubs[0]?.players ?? []);
        setTeamList(data.clubs[0]?.teams ?? []);
      }
    },
  });

  const { data } = useQuery(SITEQL.GET_SITE_CLUBS, {
    onCompleted() {
      setSiteClubs(data?.clubs);
    },
  });

  useQuery(query.GET_EVENT_COLLECTIONS, {
    onCompleted(data) {
      data && setSiteEvents(data?.event_collections)
    }
  });

  return (
    <AppLayoutWrapper>
      <WithContainer
        SectionView={Header}
        sectionProps={{ menu }}
        mode="wrapper"
      />
      {children}
      <Footer />
      <ScrollTop />
    </AppLayoutWrapper>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  setSettings: setSiteSettings,
  setClubInfo: setClubInfo,
  setPlayerList: setPlayerList,
  setTeamList: setTeamList,
  setSiteClubs: setSiteClubs,
  setSiteEvents: setSiteEvents
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

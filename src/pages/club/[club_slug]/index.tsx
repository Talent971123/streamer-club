import React, { createContext, useState } from "react";
import type { NextPage } from "next";
import { connect } from "react-redux";
// import react
import { initializeApollo } from "api/apollo";
import { WithContainer } from "components/Container";
import { HomeQL } from "graphql/club";
import { setClubInfo } from "redux/actions/club";
import { setPlayerList } from "redux/actions/players";
import { Page } from "components/Page";
// import views
import {
  BannerView,
  ClipView,
  GameDayView,
  NewsView,
  PlayerView,
  SupportView,
  TeamsView,
  ReplyView,
} from "sections/club/home";

import { ClubCtx } from "types/common/club";
import { siteSettings } from "hooks";
import _ from "lodash";
import { ClubHeadView } from "sections/club/home/Head";

export const ClubContext = createContext<Partial<ClubCtx>>({});

const HomePage: NextPage = (props: any) => {
  const { club } = props;
  const [banner, setBanner] = useState<any>(club.banner_image);
  const fallback = `https://via.placeholder.com/900x600.png/000/fff?text=${encodeURI(
    club.name || ""
  )}`;

  if (_.isUndefined(club.banner_image)) {
    setBanner(fallback);
  }

  return (
    <Page description={club.name} image={banner}>
      <ClubContext.Provider value={club}>
        {siteSettings("club_page.banner") && (
          <WithContainer
            mode="wrapper"
            SectionView={BannerView}
            sectionProps={{ banner }}
          />
        )}

        <WithContainer mode="wrapper" SectionView={ClubHeadView} />

        {siteSettings("club_page.gameday") && (
          <WithContainer mode="container" SectionView={GameDayView} />
        )}
        {siteSettings("club_page.replays") && (
          <WithContainer mode="container" SectionView={ReplyView} />
        )}
        {siteSettings("club_page.clips") && (
          <WithContainer mode="container" SectionView={ClipView} sectionProps={{ clubId: club.id }} />
        )}
        {siteSettings("club_page.teams") && (
          <WithContainer mode="container" SectionView={TeamsView} />
        )}
        {siteSettings("club_page.players") && (
          <WithContainer mode="container" SectionView={PlayerView} />
        )}
        {siteSettings("club_page.news") && (
          <WithContainer mode="container" SectionView={NewsView} />
        )}
        {siteSettings("club_page.sponsors") && (
          <WithContainer mode="container" SectionView={SupportView} />
        )}
      </ClubContext.Provider>
    </Page>
  );
};

export const getServerSideProps = async (context: any) => {
  const apolloClient = initializeApollo();
  const { club_slug } = context.query;

  const { data } = await apolloClient.query({
    query: HomeQL.GET_CLUB,
    variables: {
      club_slug,
    },
  });

  return {
    props: {
      club: data.clubs[0],
    },
  };
};

const mapStateToProps = (state: any) => ({
  clubInfo: state.club.info,
});

const mapDispatchToProps = {
  setClubInfo: setClubInfo,
  setPlayerList: setPlayerList,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

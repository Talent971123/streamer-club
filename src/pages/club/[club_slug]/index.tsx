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
  HeadView,
  NewsView,
  PlayerView,
  SupportView,
  TeamsView,
  ReplyView,
} from "sections/club/home";
import { ClubCtx } from "types/common/club";
import _ from "lodash";

export const ClubContext = createContext<Partial<ClubCtx>>({});

const HomePage: NextPage = (props: any) => {
  const { club, setClubInfo, setPlayerList } = props;
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
        <WithContainer
          mode="wrapper"
          SectionView={BannerView}
          sectionProps={{ banner }}
        />
        <WithContainer mode="wrapper" SectionView={HeadView} />
        <WithContainer mode="container" SectionView={GameDayView} />
        <WithContainer mode="container" SectionView={ReplyView} />
        <WithContainer mode="container" SectionView={ClipView} />
        <WithContainer mode="container" SectionView={TeamsView} />
        <WithContainer mode="container" SectionView={PlayerView} />
        <WithContainer mode="container" SectionView={NewsView} />
        <WithContainer mode="container" SectionView={SupportView} />
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

// import react
import { initializeApollo } from "api/apollo";
import { WithContainer } from "components/Container";
import { HomeQL } from "graphql/club";
import React, { createContext, useEffect } from "react";
import { connect } from 'react-redux';
import { setClubInfo } from "redux/actions/club";
// import views
import {
  BannerView, ClipView, GameDayView, HeadView, NewsView, PlayerView, SupportView, TeamsView
} from "sections/club/home";
import ReplayView from "sections/common/Replay";
import { ClubCtx } from "types/common/club";

export const ClubContext = createContext<Partial<ClubCtx>>({});

const HomePage: React.FC = (props: any) => {

  const { club, setClubInfo, clubInfo } = props

  useEffect(() => {
    setClubInfo(club)
  }, [club])

  return (
    <>
      <ClubContext.Provider value={club}> { /* TODO: user redux instead of context } */}
        <WithContainer mode="wrapper" SectionView={BannerView} />
        <WithContainer mode="wrapper" SectionView={HeadView} />
        <WithContainer mode="container" SectionView={GameDayView} />
        <WithContainer mode="container" SectionView={ReplayView} />
        <WithContainer mode="container" SectionView={ClipView} />
        <WithContainer mode="container" SectionView={TeamsView} />
        <WithContainer mode="container" SectionView={PlayerView} />
        <WithContainer mode="container" SectionView={NewsView} />
        <WithContainer mode="container" SectionView={SupportView} />
      </ClubContext.Provider>
    </>
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


const mapStateToProps = state => ({
  clubInfo: state.club.info
})

const mapDispatchToProps = {
  setClubInfo: setClubInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

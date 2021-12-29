// import react
import React, { createContext } from "react";
import { WithContainer } from "components/Container";
// import views
// import {
//   BannerSection,
//   TrendSection,
//   FollowSection,
//   JuniorSection,
// } from "sections/club/team";

import {
  HeadView,
  GameDayView,
  ReplyView /** TODO: Correct typo Reply to Replay */,
  ClipView,
  TeamsView,
  PlayerView,
  BannerView,
} from "sections/club/home";
import { initializeApollo } from "api/apollo";
import { ClubCtx } from "types/common/club";
import { HomeQL } from "graphql/club";

export const ClubContext = createContext<Partial<ClubCtx>>({});

const TeamPage: React.FC = ({ club }: any) => {
  return (
    <>
      {/* <WithContainer mode="wrapper" SectionView={BannerSection} />
      <WithContainer mode="container" SectionView={TrendSection} />
      <WithContainer mode="container" SectionView={FollowSection} />
      <WithContainer mode="container" SectionView={JuniorSection} /> */}

      {/* fix interface */}
      <ClubContext.Provider value={club}>
        <WithContainer mode="wrapper" SectionView={BannerView} />
        <WithContainer mode="wrapper" SectionView={HeadView} />
        <WithContainer mode="container" SectionView={GameDayView} />
        <WithContainer mode="container" SectionView={ReplyView} />
        <WithContainer mode="container" SectionView={ClipView} />
        <WithContainer mode="container" SectionView={PlayerView} />
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
  // console.log(data);

  return {
    props: {
      club: data.clubs[0],
    },
  };
};

export default TeamPage;

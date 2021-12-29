// import react
import React, { createContext } from "react";
import { WithContainer } from "components/Container";
// import views
import {
  HeadView,
  GameDayView,
  ReplyView /** TODO: Correct typo Reply to Replay */,
  ClipView,
  TeamsView,
  PlayerView,
  BannerView,
  NewsView,
  SupportView,
} from "sections/club/home";
import { initializeApollo } from "api/apollo";
import { ClubCtx } from "types/common/club";
import { HomeQL } from "graphql/club";

export const ClubContext = createContext<Partial<ClubCtx>>({});

const HomePage: React.FC = ({ club }: any) => {
  return (
    <>
      <ClubContext.Provider value={club}>
        <WithContainer mode="wrapper" SectionView={BannerView} />
        <WithContainer mode="wrapper" SectionView={HeadView} />
        <WithContainer mode="container" SectionView={GameDayView} />
        <WithContainer mode="container" SectionView={ReplyView} />
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
  // console.log(data);

  return {
    props: {
      club: data.clubs[0],
    },
  };
};

export default HomePage;

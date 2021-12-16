// import react
import React, { createContext } from "react";
import { WithContainer } from "components/Container";
// import views
import {
  HeadView,
  GameDayView,
  ReplyView,
  ClipView,
  TeamsView,
  PlayerView,
  BannerView,
  NewsView,
  SupportView,
} from "sections/club/home";
import { gql } from "@apollo/client";
import { initializeApollo } from "api/apollo";
import { ClubCtx } from "types/common/club";

export const ClubContext = createContext<Partial<ClubCtx>>({})

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


const GET_CLUB = gql`query ClubQuery($club_slug: String!) {
  clubs(where: {slug: {_eq: $club_slug}}) {
    name
    banner_image
    logo
    id
    slug
    teams {
      id
      image
      name
      slug
      division
    }
    players {
      id
      first_name
      last_name
      image
      slug,
      team {
        name
      }
    }
  }
}`

export const getServerSideProps = async (context) => {
  const apolloClient = initializeApollo();
  const { club_slug } = context.query

  const { data } = await apolloClient.query({
    query: GET_CLUB,
    variables: {
      club_slug
    }
  })

  return {
    props: {
      club: data.clubs[0]
    }
  }
}

export default HomePage;

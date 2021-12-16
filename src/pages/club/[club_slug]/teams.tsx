import React, { createContext } from "react";
import { WithContainer } from "components/Container";
import { AllSection } from "sections/club/team";
import { initializeApollo, } from "api/apollo";
import { gql } from "@apollo/client";

export const TeamsContext = createContext({})

const TeamAllPage: React.FC = ({ teams, club_slug }: any) => {

  return (
    <>
      <TeamsContext.Provider value={{ teams, club_slug }}>
        <WithContainer mode="container" SectionView={AllSection} />
      </TeamsContext.Provider>
    </>
  );
};

const GET_TEAMS = gql`query TeamsQuery($club_slug: String!) {
  teams(where: {club: {slug: {_eq: $club_slug}}}) {
    id
    image
    name
    slug
    division
  }
}`

export const getServerSideProps = async (context) => {
  const apolloClient = initializeApollo();
  const { club_slug } = context.query

  const { data } = await apolloClient.query({
    query: GET_TEAMS,
    variables: {
      club_slug
    }
  })

  return {
    props: {
      teams: data.teams,
      club_slug
    }
  }
}

export default TeamAllPage;

import { gql } from "@apollo/client";
import { initializeApollo } from "api/apollo";
import { WithContainer } from "components/Container";
import React, { createContext } from "react";
import { AllSection } from "sections/club/player";

export const PlayersContext = createContext({})

const PlayerAllPage: React.FC = ({ players, club_slug }: any) => {

  return (
    <>
      <PlayersContext.Provider value={{ players, club_slug }}>
        <WithContainer mode="container" SectionView={AllSection} />
      </PlayersContext.Provider>
    </>
  );

};


const GET_PLAYERS = gql`query PlayersQuery($club_slug: String!) {
  players_details(where: {club: {slug: {_eq: $club_slug}}}) {
    id
    first_name
    last_name
    image
    slug,
    team {
      name
    }
  }
}`

export const getServerSideProps = async (context) => {
  const apolloClient = initializeApollo();
  const { club_slug } = context.query

  const { data } = await apolloClient.query({
    query: GET_PLAYERS,
    variables: {
      club_slug
    }
  })

  return {
    props: {
      players: data.players_details,
      club_slug
    }
  }
}

export default PlayerAllPage;
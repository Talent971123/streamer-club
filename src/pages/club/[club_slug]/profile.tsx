import { initializeApollo } from "api/apollo";
import { WithContainer } from "components/Container";
import React, { createContext, useState } from "react";
import { HomeQL, PLAYERQL, TEAMQL } from "graphql/club";
import { BioDetailsView, ProfilePage } from "sections/club/profile";
import { useSubscription } from "@apollo/client";

export const ProfileContext = createContext<any>({});

const ProfileView: React.FC = ({ teams, players, club_slug, club }: any) => {
  const [matches, setMatches] = useState([]);

  useSubscription(HomeQL.SUB_CLUB_REPLAYS, {
    variables: {
      club_slug,
    },
    onSubscriptionData({ subscriptionData: { data } }) {
      data && setMatches(data.matches);
    },
  });
  return (
    <>
      <ProfileContext.Provider
        value={{ teams, matches, players, club_slug, club }}
      >
        <WithContainer mode="container" SectionView={BioDetailsView} />
        <WithContainer mode="container" SectionView={ProfilePage} />
      </ProfileContext.Provider>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const apolloClient = initializeApollo();

  const { club_slug } = context.query;

  const { data: playersData } = await apolloClient.query({
    query: PLAYERQL.GET_PLAYERS,
    variables: {
      where: { club: { slug: { _eq: club_slug } } },
    },
  });

  const { data: teamsData } = await apolloClient.query({
    query: TEAMQL.GET_TEAMS,
    variables: {
      club_slug,
    },
  });

  const { data: clubData } = await apolloClient.query({
    query: HomeQL.GET_CLUB,
    variables: {
      club_slug,
    },
  });

  return {
    props: {
      club: clubData.clubs[0],
      players: playersData.players_details,
      teams: teamsData.teams,
      club_slug,
    },
  };
};

export default ProfileView;

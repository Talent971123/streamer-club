// import react
import React, { createContext, useEffect, useState } from "react";
import { WithContainer } from "components/Container";
// import views
import { DisplayView, ToolbarView } from "sections/club/stream";
import { StreamPageCtx } from "types/common/club";
import { initializeApollo } from "api/apollo";
import { query } from "graphql/stream";

export const StreamPageContext = createContext<Partial<StreamPageCtx>>({});

const StreamPage: React.FC<{ streamInfo: StreamPageCtx }> = ({ streamInfo }) => {

  return (
    <StreamPageContext.Provider value={streamInfo}>
      <WithContainer mode="wrapper" SectionView={DisplayView} />
      <WithContainer mode="wrapper" SectionView={ToolbarView} />
    </StreamPageContext.Provider>
  );

};

export const getServerSideProps = async (context: any) => {
  const { club_slug, asset_id } = context.query;
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: query.GET_MATCH,
    variables: { asset_id }
  });

  const match = data.matches[0]

  return {
    props: {
      streamInfo: {
        playback_id: asset_id,
        home_name: match.home_team.club.name,
        home_logo: match.home_team.club.logo,
        away_name: match.away_team.club.name,
        away_logo: match.away_team.club.logo
      }
    },
  };
};

export default StreamPage;

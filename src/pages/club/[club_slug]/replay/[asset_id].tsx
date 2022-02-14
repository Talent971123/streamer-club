// import react
import React from "react";
// import views
import {
  DisplayView,
  ToolbarView,
  TabContainerView,
} from "sections/club/stream";
import { query } from "graphql/stream";
import { initializeApollo } from "api/apollo";
import { StreamPageCtx } from "types/common/club";
import { WithContainer } from "components/Container";
import { StreamPageContext } from "hooks/context/StreamPageContext";
import { Page } from "components/Page";

const StreamPage: React.FC<{ streamInfo: StreamPageCtx }> = ({
  streamInfo,
}) => {
  // TODO: use redux instead of context api
  return (
    <Page
      description={streamInfo.home_name + " vs " + streamInfo.away_name}
      image={`https://image.mux.com/${streamInfo.playback_id}/thumbnail.png`}
    >
      <StreamPageContext.Provider value={streamInfo}>
        <WithContainer mode="wrapper" SectionView={DisplayView} />
        <WithContainer mode="wrapper" SectionView={ToolbarView} />
        <WithContainer mode="wrapper" SectionView={TabContainerView} />
      </StreamPageContext.Provider>
    </Page>
  );
};

export const getServerSideProps = async (context: any) => {
  const { asset_id } = context.query;
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: query.GET_MATCH,
    variables: { asset_id },
  });

  const match = data.matches[0];

  return {
    props: {
      streamInfo: {
        playback_id: asset_id,
        home_name: match.home_team.club.name,
        home_logo: match.home_team.club.logo,
        away_name: match.away_team.club.name,
        away_logo: match.away_team.club.logo,
        home_players: match.home_team.players,
        away_players: match.away_team.players,
      },
    },
  };
};

export default StreamPage;

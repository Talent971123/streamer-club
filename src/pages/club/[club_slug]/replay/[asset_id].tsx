// import react
import React from "react";
import { WithContainer } from "components/Container";
// import views
import {
  DisplayView,
  ToolbarView,
  TabContainerView,
} from "sections/club/stream";
import { StreamPageCtx } from "types/common/club";
import { initializeApollo } from "api/apollo";
import { query } from "graphql/stream";
import { StreamPageContext } from "hooks/context/StreamPageContext";

const StreamPage: React.FC<{ streamInfo: StreamPageCtx }> = ({
  streamInfo,
}) => {
  // TODO: use redux instead of context api
  return (
    <StreamPageContext.Provider value={streamInfo}>
      <WithContainer mode="wrapper" SectionView={DisplayView} />
      <WithContainer mode="wrapper" SectionView={ToolbarView} />
      <WithContainer mode="wrapper" SectionView={TabContainerView} />
    </StreamPageContext.Provider>
  );
};

export const getServerSideProps = async (context: any) => {
  const { club_slug, asset_id } = context.query;
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
      },
    },
  };
};

export default StreamPage;

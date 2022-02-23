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
import { Page } from "components/Page";

import { StreamPageContext } from "hooks/context/StreamPageContext";

import { siteSettings } from "hooks";

const MatchStreamPage: React.FC<{ streamInfo: StreamPageCtx }> = ({
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
        {siteSettings("game_day_page.toolbar") && (
          <WithContainer mode="wrapper" SectionView={ToolbarView} />
        )}
        {siteSettings("game_day_page.commentary") && (
          <WithContainer mode="wrapper" SectionView={TabContainerView} />
        )}
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
        match_id: match.id,
        playback_id: match.video_asset_id,
        start_datetime: match.start_datetime,
        home_name: match.home_team.club.name,
        home_logo: match.home_team.club.logo,
        away_name: match.away_team.club.name,
        away_logo: match.away_team.club.logo,
        home_players: match.home_team.players,
        away_players: match.away_team.players,
        video_asset_id: match.video_asset_id
      },
    },
  };
};

export default MatchStreamPage;

// import react
import React, { useState, useEffect } from "react";
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
import { siteSettings } from "hooks";

const StreamPage: React.FC<{ streamInfo: StreamPageCtx }> = ({
  streamInfo,
}) => {

  const [newObject, setObject] = useState({});

  return (
    <Page
      description={streamInfo.home_name + " vs " + streamInfo.away_name}
      image={`https://image.mux.com/${streamInfo.playback_id}/thumbnail.png`}
    >
      <StreamPageContext.Provider value={{ ...streamInfo, setObject: setObject, newObject }}>
        <WithContainer mode="wrapper" SectionView={DisplayView} />
        {siteSettings("replays_page.toolbar") && (
          <WithContainer mode="wrapper" SectionView={ToolbarView} />
        )}
        {siteSettings("replays_page.commentary") && (
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
    variables: {
      where: {
        id: { _eq: asset_id }
      }
    }
  });

  const match = data.matches[0];

  return {
    props: {
      streamInfo: {
        playback_id: match.video_asset_id,
        home_id: match.home_team.id,
        home_name: match.home_team.club.name,
        home_display_name: match.home_team.club.display_name,
        home_logo: match.home_team.club.logo,
        away_id: match.away_team.id,
        away_name: match.away_team.club.name,
        away_display_name: match.away_team.club.display_name,
        away_logo: match.away_team.club.logo,
        home_players: match.home_team.players,
        away_players: match.away_team.players,
        match_id: match.id,
        round_name: match.round_name,
        asset_id: asset_id,
        away_slug: match.away_team.club.slug,
        home_slug: match.home_team.club.slug
      },
    },
  };
};

export default StreamPage;

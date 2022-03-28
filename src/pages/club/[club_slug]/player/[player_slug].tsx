// import react
import { initializeApollo } from "api/apollo";
// import { initializeApollo } from "api/apollo";
import d_photo from "assets/images/player/default-player-image.png";
import { WithContainer } from "components/Container";
import { Page } from "components/Page";
import { PLAYERQL } from "graphql/club";
import React, { createContext } from "react";
// import views
import {
  ClipSection, IntroSection, PlayerProfileLive, RecentGames
} from "sections/club/player";

export const PlayerContext = createContext<any>(null);

const PlayerPage: React.FC = (props: any) => {
  const { player } = props
  return (
    <Page
      description={player?.user?.first_name ?? "" + player?.user?.last_name ?? ""}
      image={player?.user?.photo ?? d_photo}
    >
      <PlayerContext.Provider value={{ player }}>
        <WithContainer mode="container" SectionView={IntroSection} />
        <WithContainer mode="container" SectionView={ClipSection} sectionProps={{ clubId: player.club.id, playerDetailId: player.id }} />
        <WithContainer mode="container" SectionView={RecentGames} sectionProps={{ playerDetailId: player.id }} />
        <WithContainer mode="container" SectionView={PlayerProfileLive} />
      </PlayerContext.Provider>
    </Page>
  );
};

export const getServerSideProps = async (context) => {
  const apolloClient = initializeApollo();
  const { club_slug, player_slug } = context.query;

  const { data } = await apolloClient.query({
    query: PLAYERQL.GET_PLAYER,
    variables: {
      where: {
        slug: { _eq: player_slug },
        club: { slug: { _eq: club_slug } }
      }
    },
  });

  return {
    props: {
      player: data.players_details[0]
    },
  };
};

export default PlayerPage

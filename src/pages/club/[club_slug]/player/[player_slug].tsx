// import react
import React, { createContext } from "react";
import { WithContainer } from "components/Container";
// import views
import {
  GallerySection,
  GamesSection,
  ClipSection,
  ClubSection,
  IntroSection,
} from "sections/club/player";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { PLAYERQL } from "graphql/club";

export const PlayerContext = createContext({});

const PlayerPage: React.FC = (props) => {
  const router = useRouter();
  const { club_slug, player_slug } = router.query;

  const { data, loading } = useQuery(PLAYERQL.GET_PLAYER, {
    variables: {
      club_slug,
      player_slug,
    },
  });

  if (loading) {
    return <></>;
  }

  console.log(data.players_details[0]);

  return (
    <>
      <PlayerContext.Provider value={{ player: data.players_details[0] }}>
        <WithContainer mode="container" SectionView={IntroSection} />
        <WithContainer mode="container" SectionView={ClubSection} />
        <WithContainer mode="container" SectionView={ClipSection} />
        <WithContainer mode="container" SectionView={GamesSection} />
        <WithContainer mode="container" SectionView={GallerySection} />
      </PlayerContext.Provider>
    </>
  );
};

export default PlayerPage;

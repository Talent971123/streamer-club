// import react
import React, { createContext, useState } from "react";
import { WithContainer } from "components/Container";
// import views
import {
  GallerySection,
  GamesSection,
  ClipSection,
  IntroSection,
} from "sections/club/player";
import { useRouter } from "next/router";
import { useSubscription } from "@apollo/client";
import { PLAYERQL } from "graphql/club";
import _ from "lodash";

export const PlayerContext = createContext<any>(null);

const PlayerPage: React.FC = (props) => {
  const router = useRouter();
  const { club_slug, player_slug } = router.query;

  const [player, setPlayer] = useState<any>(null);

  useSubscription(PLAYERQL.SUB_PLAYER, {
    variables: {
      club_slug,
      player_slug,
    },
    onSubscriptionData({ subscriptionData: { data } }) {
      data && setPlayer(data.players_details[0]);
    },
  });

  if (!player) {
    return <></>;
  }

  return (
    <>
      <PlayerContext.Provider value={player}>
        <WithContainer mode="container" SectionView={IntroSection} />
        <WithContainer mode="container" SectionView={ClipSection} />
        <WithContainer mode="container" SectionView={GamesSection} />
        <WithContainer mode="container" SectionView={GallerySection} />
      </PlayerContext.Provider>
    </>
  );
};

export default PlayerPage;

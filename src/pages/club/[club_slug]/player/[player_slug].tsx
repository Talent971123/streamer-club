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
import { Row } from "components/Layout";
import { Text } from "components/Text";
import { AiOutlineWarning } from "react-icons/ai";
import { useSubscription } from "@apollo/client";
import { PLAYERQL, TEAMQL } from "graphql/club";
import { initializeApollo } from "api/apollo";
import _ from "lodash";

export const PlayerContext = createContext<any>(null);

const PlayerPage: React.FC = ({ club_slug, player_slug, teams }: any) => {
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
    return (
      <>
        <Row
          flexDirection="column"
          padding="50px 0"
          justifyContent="center"
          alignItems="center"
        >
          <AiOutlineWarning size={100} />
          <Text fSize={17}>{"No Data"}</Text>
        </Row>
      </>
    );
  }

  return (
    <>
      <PlayerContext.Provider value={{ player, teams }}>
        <WithContainer mode="container" SectionView={IntroSection} />
        <WithContainer mode="container" SectionView={ClipSection} />
        <WithContainer mode="container" SectionView={GamesSection} />
        <WithContainer mode="container" SectionView={GallerySection} />
      </PlayerContext.Provider>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const apolloClient = initializeApollo();
  const { club_slug, player_slug } = context.query;

  const { data } = await apolloClient.query({
    query: TEAMQL.GET_TEAMS,
    variables: {
      club_slug,
    },
  });

  return {
    props: {
      teams: data.teams,
      club_slug,
      player_slug,
    },
  };
};

export default PlayerPage;

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
import { Page } from "components/Page";
import { Row } from "components/Layout";
import { Text } from "components/Text";
import { AiOutlineWarning } from "react-icons/ai";
import { useSubscription } from "@apollo/client";
import { PLAYERQL } from "graphql/club";
// import { initializeApollo } from "api/apollo";
import d_photo from "assets/images/player/default-player-image.png";

export const PlayerContext = createContext<any>(null);

const PlayerPage: React.FC = ({ club_slug, player_slug }: any) => {
  const [player, setPlayer] = useState<any>(null);

  useSubscription(PLAYERQL.SUB_PLAYER, {
    variables: {
      where: {
        club: { slug: { _eq: club_slug } },
        slug: { _eq: player_slug },
      },
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
          <Text fSize={1.0625}>{"No Data"}</Text>
        </Row>
      </>
    );
  }

  return (
    <Page
      description={
        player?.user?.first_name ?? "" + player?.user?.last_name ?? ""
      }
      image={player?.user?.photo ?? d_photo}
    >
      <PlayerContext.Provider value={{ player }}>
        <WithContainer mode="container" SectionView={IntroSection} />
        <WithContainer mode="container" SectionView={ClipSection} />
        <WithContainer mode="container" SectionView={GamesSection} />
        <WithContainer mode="container" SectionView={GallerySection} />
      </PlayerContext.Provider>
    </Page>
  );
};

export const getServerSideProps = async (context) => {
  // const apolloClient = initializeApollo();
  const { club_slug, player_slug } = context.query;

  return {
    props: {
      club_slug,
      player_slug,
    },
  };
};

export default PlayerPage;

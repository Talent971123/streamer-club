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
import { useRouter } from 'next/router'
import { gql, useQuery } from "@apollo/client";

/** gql 
 * TODO: transfer to common query file 
 * */

const GET_PLAYERS = gql`query MyPlayerQuery($club_slug: String!, $player_slug: String!) {
  players_details(where: {club: {slug: {_eq: $club_slug}}, slug: {_eq: $player_slug}}) {
    active
    bio
    club_id
    debut_date
    email
    first_name
    id
    image
    is_professional
    is_upgraded
    last_name
    mobile
    prev_club
    slug
    positions
    club {
      name
    }
    teams {
      name
    }
  }
}`

export const PlayerContext = createContext({})

const PlayerPage: React.FC = (props) => {

  const router = useRouter();
  const { club_slug, player_slug } = router.query;

  const { data, loading } = useQuery(GET_PLAYERS, {
    variables: {
      club_slug,
      player_slug
    }
  })

  if (loading) {
    return <></>
  }

  console.log(data.players_details[0])

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

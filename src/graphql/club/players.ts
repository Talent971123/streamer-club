// apollo
import { gql } from "@apollo/client";
// ---------------------------------------------------
/** gql
 * TODO: transfer to common query file
 * */
const GET_PLAYERS = gql`
  query PlayersQuery($club_slug: String!) {
    players_details(where: { club: { slug: { _eq: $club_slug } } }) {
      id
      first_name
      last_name
      image
      slug
      team {
        name
      }
    }
  }
`;
/** gql
 * TODO: transfer to common query file
 * */
const GET_PLAYER = gql`
  query MyPlayerQuery($club_slug: String!, $player_slug: String!) {
    players_details(
      where: {
        club: { slug: { _eq: $club_slug } }
        slug: { _eq: $player_slug }
      }
    ) {
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
  }
`;

const GET_PLAYER_BY_ID = gql`
  query MyPlayerQuery($id: Int!) {
    players_details(where: { id: { _eq: $id } }) {
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
  }
`;

// ---------
export default {
  GET_PLAYERS: GET_PLAYERS,
  GET_PLAYER_BY_ID: GET_PLAYER_BY_ID,
  GET_PLAYER: GET_PLAYER,
};

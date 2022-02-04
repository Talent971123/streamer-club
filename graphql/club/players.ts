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
    image
    slug
    team {
      name
    }
    user{
      first_name
      last_name
    }
  }
}
`;
/** gql
 * TODO: transfer to common query file
 * */
const SUB_PLAYER = gql`
  subscription MyPlayerQuery($club_slug: String!, $player_slug: String!) {
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
        id
        name
      }
      updated_at
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
      debut_date
      club {
        name
      }
      teams {
        name
      }
    }
  }
`;

const UPDATE_PLAER_BY_ID = gql`
  mutation EditPlayer($id: Int!, $object: players_details_set_input = {}) {
    update_players_details_by_pk(pk_columns: { id: $id }, _set: $object) {
      updated_at
    }
  }
`;

// ---------
export default {
  GET_PLAYERS,
  GET_PLAYER_BY_ID,
  SUB_PLAYER,
  UPDATE_PLAER_BY_ID,
};

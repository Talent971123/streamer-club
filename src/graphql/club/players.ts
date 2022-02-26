// apollo
import { gql } from "@apollo/client";
// ---------------------------------------------------
/** gql
 * TODO: transfer to common query file
 * */
const GET_PLAYERS = gql`
  query PlayersQuery($where: players_details_bool_exp = {}) {
    players_details(where: $where) {
      id
      image
      slug
      team {
        name
      }
      user {
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
  subscription MyPlayerQuery($where: players_details_bool_exp = {}) {
    players_details(where: $where) {
      active
      bio
      club_id
      debut_date
      id
      image
      is_professional
      is_upgraded
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
      user {
        id
        email
        photo
        first_name
        last_name
        auth_id
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
  mutation MyMutation(
    $id: Int!
    $data: users_insert_input = {}
    $debut_date: date!
    $positions: jsonb!
    $bio: String!
    $team_id: Int!
    $prev_club: String!
  ) {
    insert_players_details(
      on_conflict: {
        where: { id: { _eq: $id } }
        constraint: players_details_pkey
      }
      objects: {
        user: { data: $data, on_conflict: { constraint: users_pkey } }
        debut_date: $debut_date
        positions: $positions
        bio: $bio
        team_id: $team_id
        prev_club: $prev_club
      }
    ) {
      affected_rows
    }
  }
`;

export const UPDATE_USER_PLAYERS = gql`
  mutation UpdatePlayerUser(
    $pid: Int!
    $po_object: players_details_set_input!
    $uid: Int!
    $user_object: users_set_input!
  ) {
    update_players_details(where: { id: { _eq: $pid } }, _set: $po_object) {
      affected_rows
    }
    update_users(where: { id: { _eq: $uid } }, _set: $user_object) {
      affected_rows
    }
  }
`;

const GET_PLAYER_FEATURED_CLIPS = gql`
  {
    player_featured_clips {
      video_asset_id
      created_at
    }
  }
`;

const INSERT_PLAYER_FEATURED_CLIP = gql`
  mutation InsertPlayerFeaturedClipMutation(
    $objects: [player_featured_clips_insert_input!] = {}
  ) {
    insert_player_featured_clips(objects: $objects) {
      affected_rows
    }
  }
`;

// ---------
export default {
  GET_PLAYERS,
  GET_PLAYER_BY_ID,
  SUB_PLAYER,
  UPDATE_PLAER_BY_ID,
  UPDATE_USER_PLAYERS,
  GET_PLAYER_FEATURED_CLIPS,
  INSERT_PLAYER_FEATURED_CLIP,
};

// apollo
import { gql } from "@apollo/client";
// ---------------------------------------------------

const ADD_TEAM = gql`
  mutation AddTeams($objects: [teams_insert_input!]!) {
    insert_teams(objects: $objects) {
      affected_rows
    }
  }
`;

const ADD_PLAYER = gql`
  mutation AddPlayers($objects: [players_details_insert_input!]!) {
    insert_players_details(objects: $objects) {
      affected_rows
    }
  }
`;

const ADD_USER_PLAYER = gql`
  mutation InsertUserPlayer($objects: [players_details_insert_input!] = {}) {
    insert_players_details(objects: $objects) {
      affected_rows
    }
  }
`;

const SUB_ALL_CLUBS = gql`
  subscription SubAllClubs {
    clubs {
      name
      banner_image
      logo
      id
      slug
    }
  }
`;

/** gql
 * TODO: transfer to common query file
 * */
const SUB_CLUB = gql`
  subscription MyClubSubscription($club_slug: String!) {
    clubs(where: { slug: { _eq: $club_slug } }) {
      name
      banner_image
      logo
      id
      slug
      address_1
      address_2
      city
      created_at
      postcode
      sport_id
      state
      teams {
        id
        image
        name
        slug
        division
        league_id
        players {
          id
          user {
            first_name
            last_name
          }
        }
      }
      players {
        id
        image
        user {
          first_name
          last_name
        }
        positions
        team_id
        club_id
        slug
        is_professional
        team {
          name
        }
      }
    }
  }
`;

const SUB_ALL_TEAMS = gql`
  subscription SubAllTeams($where: teams_bool_exp = {}) {
    teams(where: $where) {
      id
      image
      name
      slug
      division
    }
  }
`;

const SUB_ALL_LEAGUES = gql`
  subscription SubAllLeagues {
    leagues {
      id
      logo
      name
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

const UPDATE_TEAM_BY_ID = gql`
  mutation UpdateTeamById($id: Int!, $_set: teams_set_input = {}) {
    update_teams_by_pk(pk_columns: { id: $id }, _set: $_set) {
      updated_at
    }
  }
`;

const UPDATE_CLUB_BY_ID = gql`
  mutation UpdateClubById($id: Int!, $_set: clubs_set_input = {}) {
    update_clubs_by_pk(pk_columns: { id: $id }, _set: $_set) {
      updated_at
    }
  }
`;
// ---------
export default {
  ADD_TEAM,
  ADD_PLAYER,
  ADD_USER_PLAYER,

  SUB_CLUB,
  SUB_ALL_CLUBS,
  SUB_ALL_TEAMS,
  SUB_ALL_LEAGUES,

  UPDATE_PLAER_BY_ID,
  UPDATE_TEAM_BY_ID,
  UPDATE_CLUB_BY_ID,
};

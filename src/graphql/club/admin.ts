// apollo
import { gql } from "@apollo/client";
// ---------------------------------------------------
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
      teams {
        id
        image
        name
        slug
        division
        players {
          id
          last_name
          first_name
        }
      }
      players {
        id
        first_name
        last_name
        image
        mobile
        email
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

// ---------
export default {
  SUB_CLUB,
  ADD_TEAM,
  ADD_PLAYER,
  SUB_ALL_CLUBS,
  SUB_ALL_TEAMS,
  SUB_ALL_LEAGUES,
  UPDATE_PLAER_BY_ID,
};

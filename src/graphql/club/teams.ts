// apollo
import { gql } from "@apollo/client";
// ---------------------------------------------------
/** gql
 * TODO: transfer to common query file
 * */
const GET_TEAMS = gql`
  query GET_TEAMS($club_slug: String!) {
    teams(where: { club: { slug: { _eq: $club_slug } } }) {
      id
      image
      name
      slug
      division
    }
  }
`;

const SUB_TEAMS = gql`
  subscription SUB_TEAMS($where: teams_bool_exp = {}) {
    teams(where: $where) {
      id
      image
      name
      slug
      division
    }
  }
`;

const SUB_LEAGUES = gql`
  subscription MyClubSubscription {
    leagues {
      id
      logo
      name
    }
  }
`;

const SUB_CLUB_FILTER = gql`
  subscription SUB_CLUB_FILTER($limit: Int = 7) {
    clubs(limit: $limit) {
      logo
      id
      display_name
      name
      slug
    }
  }
`;

// ---------
export default {
  GET_TEAMS,
  SUB_TEAMS,
  SUB_LEAGUES,
  SUB_CLUB_FILTER,
};

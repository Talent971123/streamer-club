// apollo
import { gql } from "@apollo/client";
// ---------------------------------------------------
/** gql
 * TODO: transfer to common query file
 * */
const GET_TEAMS = gql`
  query TeamsQuery($club_slug: String!) {
    teams(where: { club: { slug: { _eq: $club_slug } } }) {
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
      slug
    }
  }
`;

// ---------
export default {
  GET_TEAMS,
  SUB_LEAGUES,
  SUB_CLUB_FILTER,
};

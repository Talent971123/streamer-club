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

// ---------
export default {
  GET_TEAMS: GET_TEAMS,
};

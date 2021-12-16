// apollo
import { gql } from "@apollo/client";
// ---------------------------------------------------
/** gql
 * TODO: transfer to common query file
 * */
const GET_CLUB = gql`
  query ClubQuery($club_slug: String!) {
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
      }
      players {
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
  }
`;

// ---------
export default {
  GET_CLUB: GET_CLUB,
};

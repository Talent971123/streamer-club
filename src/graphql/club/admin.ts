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
        slug
        is_professional
        team {
          name
        }
      }
    }
  }
`;

// ---------
export default {
  SUB_CLUB: SUB_CLUB,
};

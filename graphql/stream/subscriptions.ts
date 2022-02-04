import { gql } from "@apollo/client";

const SUB_SAMP = gql`
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
  SUB_SAMP
};
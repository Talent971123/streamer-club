import { gql } from "@apollo/client";

const SUB_ALL_LEAGUES = gql`
  subscription SubAllLeagues {
    leagues(order_by: {name: asc}) {
      id
      logo
      name
      slug
    }
  }
`;

export default {
    SUB_ALL_LEAGUES,
};
import { gql } from "@apollo/client";

const GET_SAVED_MATCHES = gql`
  query GET_SAVED_MATCHES($id: Int!) {
    saved_matches(where: { user_id: { _eq: $id } }) {
      match_id
      id
    }
  }
`;

// ---------
export default {
  GET_SAVED_MATCHES,
};

import { gql } from "@apollo/client";

const GET_SAVED_MATCHES = gql`
  query GET_SAVED_MATCHES($id: Int!) {
    saved_matches(where: { user_id: { _eq: $id } }) {
      match_id
      id
    }
  }
`;

const GET_MATCH_BY_PK = gql`
  query MyQuery($id: Int!) {
    matches_by_pk(id: $id) {
      video_asset_id
    }
  }
`;

// ---------
export default {
  GET_SAVED_MATCHES,
  GET_MATCH_BY_PK,
};

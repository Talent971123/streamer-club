import { gql } from "@apollo/client";

const INSERT_MATCH = gql`
  mutation InsertMatchesMutation($objects: [matches_insert_input!]!) {
    insert_matches(objects: $objects) {
      affected_rows
    }
  }
`;

const INSERT_SAVED_MATCHES_ONE = gql`mutation INSERT_SAVED_MATCHES_ONE($object: saved_matches_insert_input = {}) {
  insert_saved_matches_one(object: $object, on_conflict: {constraint: saved_matches_user_id_match_id_key, update_columns: []}) {
    created_at
  }
}`;

// // ---------
export default {
  INSERT_MATCH,
  INSERT_SAVED_MATCHES_ONE,
};

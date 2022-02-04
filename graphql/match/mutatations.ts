import { gql } from "@apollo/client";

const INSERT_MATCH = gql`mutation InsertMatchesMutation($objects: [matches_insert_input!]!) {
    insert_matches(objects: $objects) {
      affected_rows
    }
}`;

// // ---------
export default {
    INSERT_MATCH
}
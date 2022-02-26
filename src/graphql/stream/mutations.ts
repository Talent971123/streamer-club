import { gql } from "@apollo/client";

// const UPDATE_SAMP = gql``;

// // ---------
const ADD_COMMENTARY = gql`
  mutation addCommentary($objects: [events_insert_input!]!) {
    insert_events(objects: $objects) {
      affected_rows
    }
  }
`;

const ADD_SCORE = gql`
mutation AddScore($objects: [score_insert_input!]!) {
  insert_score(objects: $objects) {
    affected_rows
  }
}
`;

export default {
  ADD_COMMENTARY,
  ADD_SCORE,
}
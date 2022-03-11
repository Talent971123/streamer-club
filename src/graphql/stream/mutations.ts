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
}`;

const UPSERT_SCORE = gql`mutation AddUpdateScore(
  $objects: [score_insert_input!]!, 
  $update_columns: [score_update_column!] = []
) {
  insert_score(
    objects: $objects, 
    on_conflict: {
      constraint: score_pkey, 
      update_columns: $update_columns
    }
  ) { affected_rows }
}`;


const UPSERT_COMMENTARY = gql`mutation UpSertCommentary(
  $objects: [events_insert_input!]!, 
  $update_columns: [events_update_column!] = []) {
  insert_events(
    objects: $objects, 
    on_conflict: {
      constraint: events_pkey, 
      update_columns: $update_columns
    }
  ) { affected_rows }
}`;

export const DELETE_COMMENTARY = gql`mutation DeleteCommentary($where: events_bool_exp = {}) {
  delete_events(where: $where) {
    affected_rows
  }
}`

export default {
  ADD_COMMENTARY,
  ADD_SCORE,
  UPSERT_SCORE,
  UPSERT_COMMENTARY,
  DELETE_COMMENTARY
}
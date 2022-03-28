import { gql } from "@apollo/client";

const GET_MATCH = gql`
query GetMatch($where: matches_bool_exp = {}) {
  matches(where: $where) {
    id
    video_asset_id
    start_datetime
    round_name
    home_team {
      id
      name
      players {
        id
        user {
          first_name
          last_name
        }
      }
      club {
        name
        logo
        display_name
        slug
      }
    }
    away_team {
      id
      name
      players(where: {user_id: {_is_null: false}}) {
        id
        user {
          first_name
          last_name
        }
      }
      club {
        name
        logo
        display_name
        slug
      }
    }
  }
}`;

const GET_EVENT_COLLECTIONS = gql`
  query EventCollection {
    event_collections {
      id
      event_name
      sports_id
      scoring
    }
  }
`;

const GET_SCORE = gql`
  query GETSCORE($where: score_bool_exp = {}) {
    score(where: $where){
      id
      match_id
      h_score_1
      h_score_2
      h_score_final
      a_score_1
      a_score_2
      a_score_final
      video_time
    }
  }
`

// ---------
export default {
  GET_MATCH,
  GET_EVENT_COLLECTIONS,
  GET_SCORE,
};

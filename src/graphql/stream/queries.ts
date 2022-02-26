import { gql } from "@apollo/client";

const GET_MATCH = gql`
  query GetMatchByAssetId($where: matches_bool_exp = {}) {
    matches(where: $where) {
      id
      video_asset_id
      start_datetime
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
        }
      }
      away_team {
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
        }
      }
      scores {
        a_score_1
        a_score_2
        a_score_final
        h_score_1
        h_score_2
        h_score_final
        game_time_q_number
        game_time_q_prefix
        game_time_value
        is_final
        video_time
      }
    }
  }
`;

const GET_EVENT_COLLECTIONS = gql`
  query EventCollection {
    event_collections {
      id
      event_name
      sports_id
    }
  }
`;

// ---------
export default {
  GET_MATCH,
  GET_EVENT_COLLECTIONS,
};

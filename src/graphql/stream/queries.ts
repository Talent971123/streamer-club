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

// ---------
export default {
  GET_MATCH,
  GET_EVENT_COLLECTIONS,
};

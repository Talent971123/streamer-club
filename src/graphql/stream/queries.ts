import { gql } from "@apollo/client";

const GET_MATCH = gql`
  query GetMatchByAssetId($asset_id: Int!) {
    matches(where: { id: { _eq: $asset_id } }) {
      id
      video_asset_id
      start_datetime
      home_team {
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
    }
  }
`;

// ---------
export default {
  GET_MATCH,
};

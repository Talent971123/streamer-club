import { gql } from "@apollo/client";

const GET_MATCH = gql`
  query GetMatchByAssetId($asset_id: String!) {
    matches(where: { video_asset_id: { _eq: $asset_id } }) {
      id
      home_team {
        name
        club {
          name
          logo
        }
      }
      away_team {
        name
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

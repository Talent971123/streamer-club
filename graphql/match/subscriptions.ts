import { gql } from "@apollo/client";

const SUB_MATCHES = gql`subscription MySubscription($where: matches_bool_exp = {}) {
    matches(where: $where) {
      away_club_id
      away_club_name
      away_team_id
      away_team_name
      club_id
      created_at
      home_team_id
      home_team_name
      id
      is_historic
      league_id
      league_name
      name
      round
      round_name
      start_datetime
      status
      stream_id
      stream_key
      updated_at
      url
      video_asset_id
      away_team {
        id
        image
        name
        division
        club {
          logo
          name
        }
      }
      home_team {
        id
        image
        name
        division
        club {
          logo
          name
        }
      }
      league {
        logo
        name
      }
    }
  }
  `;

// // ---------
export default {
    SUB_MATCHES
}
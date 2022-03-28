// apollo
import { gql } from "@apollo/client";

const SUB_LEAGUES = gql`
  subscription LeagueSubscription($where: leagues_bool_exp) {
    leagues(where: $where) {
      id
      logo
      name
      slug
      clubs {
        id
        name
      }
    }
  }
`;

const SUB_LEAGUE_REPLAYS = gql`
  subscription MyReplaysSub($where: matches_bool_exp) {
    matches(where: $where, order_by: {start_datetime: desc}) {
      id
      is_historic
      name
      start_datetime
      status
      video_asset_id
      round
      start_datetime
      thumbnail_url
      league_id
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
        id
        logo
        name
      }
    }
  }
`;

export default {
  SUB_LEAGUES,
  SUB_LEAGUE_REPLAYS,
};

// apollo
import { gql } from "@apollo/client";
// ---------------------------------------------------
/** gql
 * TODO: transfer to common query file
 * */
const GET_CLUB = gql`
  query ClubQuery($club_slug: String!) {
    clubs(where: { slug: { _eq: $club_slug } }) {
      name
      banner_image
      logo
      id
      slug
      teams {
        id
        image
        name
        slug
        division
      }
      players(where: { user_id: { _is_null: false } }) {
        id
        image
        slug
        team {
          name
          slug
        }
        user {
          first_name
          last_name
          photo
          email
        }
      }
    }
  }
`;

const SUB_CLUB = gql`
  subscription ClubSubscription($club_slug: String!) {
    clubs(where: { slug: { _eq: $club_slug } }) {
      name
      banner_image
      logo
      id
      slug
      user_club_follows {
        id
        user_id
        club_id
      }
      teams {
        id
        image
        name
        slug
        division
        user_team_follows {
          id
          user_id
          team_id
        }
      }
      players(where: { user_id: { _is_null: false } }) {
        id
        image
        slug
        team {
          name
          slug
        }
        user {
          first_name
          last_name
          photo
          email
        }
      }
      club_partners {
        partner {
          id
          logo
          name
        }
      }
      club_sponsors {
        sponsor {
          id
          logo
          name
        }
      }
    }
  }
`;

const SUB_CLUB_REPLAYS = gql`
  subscription MyReplaySub($club_slug: String!) {
    matches(
      where: {
        _or: [
          { away_team: { club: { slug: { _eq: $club_slug } } } }
          { home_team: { club: { slug: { _eq: $club_slug } } } }
        ]
        status: { _eq: "completed" }
      }
      order_by: { start_datetime: desc }
    ) {
      id
      is_historic
      name
      start_datetime
      status
      video_asset_id
      round
      round_name
      thumbnail_url
      start_datetime
      away_team {
        id
        image
        name
        division
        club {
          display_name
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
          display_name
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

const SUB_TEAM_REPLAYS = gql`
  subscription MyReplaysSub($team_slug: String!) {
    matches(
      where: {
        _or: [
          { away_team: { slug: { _eq: $team_slug } } }
          { home_team: { slug: { _eq: $team_slug } } }
        ]
      }
      order_by: { start_datetime: desc }
    ) {
      id
      is_historic
      name
      start_datetime
      status
      video_asset_id
      round
      start_datetime
      thumbnail_url
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

const SUB_CLUB_TEAMS = gql`
  subscription ClubTeamsSubscription($club_slug: String!) {
    clubs(where: { slug: { _eq: $club_slug } }) {
      teams {
        division
        id
        image
        league_id
        name
      }
    }
  }
`;

// ---------
export default {
  GET_CLUB,
  SUB_CLUB,
  SUB_CLUB_REPLAYS,
  SUB_TEAM_REPLAYS,
  SUB_CLUB_TEAMS,
};

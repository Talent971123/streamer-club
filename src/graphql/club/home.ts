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
      players {
        id
        first_name
        last_name
        image
        slug
        team {
          name
        }
      }
    }
  }
`;

const SUB_CLUB_REPLAYS = gql`subscription MyReplaySub($club_slug: String!) {
  matches(where: {_or: [{away_team: {club: {slug: {_eq: $club_slug}}}}, {home_team: {club: {slug: {_eq: $club_slug}}}}]}) {
    id
    is_historic
    name
    start_datetime
    status
    video_asset_id
    round
    start_datetime
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

// ---------
export default {
  GET_CLUB,
  SUB_CLUB_REPLAYS,
};

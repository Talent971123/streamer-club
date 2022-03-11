import { gql } from "@apollo/client";

const SUB_SAMP = gql`
  query TeamsQuery($club_slug: String!) {
    teams(where: { club: { slug: { _eq: $club_slug } } }) {
      id
      image
      name
      slug
      division
    }
  }
`;

const SUB_COMMENTS = gql`subscription subComment($match_id: Int!) {
  events(where: {match_id: {_eq: $match_id}}, order_by: {video_time: desc}) {
    id
    event_id
    match_id
    player_id
    team_id
    video_time
    comment
    event_collection {
      id
      event_name
    }
    team {
      id
      name
      club{
        display_name
      }
    }
    players_detail {
      id
      user {
        id
        first_name
        last_name
      }
    }
  }
}`;

// ---------
export default {
  SUB_SAMP,
  SUB_COMMENTS,
};
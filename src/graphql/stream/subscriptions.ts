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

const GET_COMMENTS = gql`
  subscription GetComment($match_id: Int!) {
    events(where: {match_id: {_eq: $match_id}}, order_by: {video_time: desc}) {
      id
      comment
      video_time
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
  }
`;

// ---------
export default {
  SUB_SAMP,
  GET_COMMENTS,
};
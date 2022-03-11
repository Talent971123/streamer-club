import { gql } from "@apollo/client";

const GET_CLIP_ASSETS_BY_CLUB_ID = gql`
  query GetClipAssetsByClubId($club_id: Int!) {
    clip_asset_user_club(where: { club_id: { _eq: $club_id }, show_on_club: {_eq: true} }) {
      club_id
      clip_asset {
        name
        playback_id
        id
        asset_id
      }
    }
  }
`;

const SUB_FEATURE_CLIPS = gql`subscription MySubscription(
  $where: clip_asset_user_club_bool_exp = {}
  $limit: Int
) {
  clip_asset_user_club(where: $where, limit: $limit, order_by: {created_at: desc}) {
    club_id
    clip_asset {
      name
      playback_id
      id
      asset_id
      match{
        round_name
        home_team{
          club{
            display_name
          }
        }
        away_team{
          club{
            display_name
          }
        }
      }
    }
  }
}`;

const INSERT_CLIP_ASSET_USER_CLUB = gql`
  mutation InsertClipAssetUserClubMutation($objects: [clip_asset_user_club_insert_input!] = {}) {
    insert_clip_asset_user_club(objects: $objects) {
      affected_rows
      returning {
        id
        clip_asset_id
      }
    }
  }
`;

export default {
  GET_CLIP_ASSETS_BY_CLUB_ID,
  SUB_FEATURE_CLIPS,
  INSERT_CLIP_ASSET_USER_CLUB
};

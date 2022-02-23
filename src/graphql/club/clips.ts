import { gql } from "@apollo/client";

const GET_CLIP_ASSETS_BY_CLUB_ID = gql`
    query GetClipAssetsByClubId($club_id: Int!) {
        clip_asset_user_club(where: {club_id: {_eq: $club_id}}) {
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

const SUB_FEATURE_CLIPS = gql`subscription MySubscription($where: clip_asset_user_club_bool_exp = {}) {
    clip_asset_user_club(where: $where) {
      club_id
      clip_asset {
        name
        playback_id
        id
        asset_id
      }
    }
  }`;

export default {
    GET_CLIP_ASSETS_BY_CLUB_ID,
    SUB_FEATURE_CLIPS
};

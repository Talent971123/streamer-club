import { gql } from "@apollo/client";

const USER_FOLLOW_CLUB = gql`mutation UserClubFollowInsert($objects: [user_club_follows_insert_input!]!) {
    insert_user_club_follows(objects: $objects, on_conflict: {constraint: user_club_follows_user_id_club_id_key, update_columns: []}) {
        affected_rows
      }
  }`;

const USER_UNFOLLOW_CLUB = gql`mutation UserClubUnFollowDelete($where: user_club_follows_bool_exp = {}) {
    delete_user_club_follows(where: $where) {
      affected_rows
    }
  }`;

const USER_FOLLOW_TEAM = gql`mutation UserTeamFollowInsert($team_objects: [user_team_follows_insert_input!] = {}, $club_objects: [user_club_follows_insert_input!] = {}) {
    
    insert_user_club_follows(objects: $club_objects, on_conflict: {constraint: user_club_follows_user_id_club_id_key, update_columns: []}) {
      affected_rows
    }

    insert_user_team_follows(objects: $team_objects, on_conflict: {constraint: user_team_follows_user_id_team_id_key, update_columns: []}) {
      affected_rows
    }
  }`

const USER_UNFOLLOW_TEAM = gql`mutation UserTeamUnFollowDelete($where: user_team_follows_bool_exp = {}) {
    delete_user_team_follows(where: $where) {
      affected_rows
    }
  }`

const USER_UPDATE = gql`mutation UserMutation($where: users_bool_exp = {}, $object: users_set_input = {}) {
  update_users(where: $where, _set: $object) {
    affected_rows
  }
}`

export default {
  USER_FOLLOW_CLUB,
  USER_UNFOLLOW_CLUB,
  USER_FOLLOW_TEAM,
  USER_UNFOLLOW_TEAM,
  USER_UPDATE
}
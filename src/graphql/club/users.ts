// apollo
import { gql } from "@apollo/client";
// ---------------------------------------------------

export const UPDATE_USERS = gql`mutation UpdateUser(
  $uid: Int!, 
  $object: users_set_input!
  ) {
  update_users(where: {id: {_eq: $uid}}, _set: $object) {
    affected_rows
  }
}`

export const CLUB_USER_FOLLOWS = gql`subscription ClubUserFollows($where: user_club_follows_bool_exp = {}) {
  user_club_follows(where: $where) {
    id
    club {
      id
      logo
      name
      slug
    }
  }
}`

export const TEAMS_USER_FOLLOWS = gql`subscription TeamUserFollows($where: user_team_follows_bool_exp = {}) {
  user_team_follows(where: $where) {
    id
    team {
      id
      image
      name
      slug
      club{
        slug
      }
    }
  }
}`

// ---------
export default {
  UPDATE_USERS,
  CLUB_USER_FOLLOWS,
  TEAMS_USER_FOLLOWS
};
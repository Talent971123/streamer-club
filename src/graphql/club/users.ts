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

// ---------
export default {
  UPDATE_USERS
};
import { gql } from "@apollo/client";

const USER_INFO = gql`subscription UserSub($where: users_bool_exp = {}) {
    users(where: $where) {
      id
      first_name
      last_name
      email
      photo
    }
  }`;

// // ---------
export default {
    USER_INFO
}
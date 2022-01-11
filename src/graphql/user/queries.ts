import { gql } from "@apollo/client";

const GET_USER = gql`query UserQuery($auth_id: String!) {
  users(where: {auth_id: {_eq: $auth_id}}) {
    id
    active
    auth_id
    detail_id
    email
    first_name
    last_name
    photo
    user_role_id
    role {
      name
      id
      user_permissions {
        id
        name
        type
      }
    }
  }
}`;

// ---------
export default {
  GET_USER
};
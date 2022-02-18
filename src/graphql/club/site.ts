import { gql } from "@apollo/client";

const SUB_SITE_SETTINGS = gql`
  subscription MySiteSettings($where: site_settings_bool_exp = {}) {
    site_settings(where: $where) {
      name
      values
    }
  }
`;

const GET_SITE_CLUBS = gql`
  query MySiteClubQuery($where: clubs_bool_exp = {}) {
    clubs(where: $where) {
      id
      slug
      name
      display_name
    }
  }`;

export default {
  SUB_SITE_SETTINGS,
  GET_SITE_CLUBS
};

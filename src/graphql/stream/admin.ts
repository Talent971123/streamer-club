import { gql } from "@apollo/client";
const UPDATE_THUMBNAIL_IMAGE_URL = gql`
mutation updateThumbnailUrl($thumbnail_url: String!, $id: Int!) {
    update_matches(where: {id: {_eq: $id}}, _set: {thumbnail_url: $thumbnail_url}) {
      affected_rows
    }
  }

`;
export default { UPDATE_THUMBNAIL_IMAGE_URL };
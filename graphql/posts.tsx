import { gql } from "@apollo/client";

const FIND_POSTS = gql`
  query MyQuery {
    posts(last: 3) {
      author {
        name
        picture {
          url
        }
      }
      coverImage {
        url
      }
      slug
      tags
      title
      content {
        html
      }
      date
      id
    }
  }
`;

export { FIND_POSTS };

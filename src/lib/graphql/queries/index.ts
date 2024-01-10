// queries/getDataQuery.js
import { gql } from "@apollo/client";

export const GET_HEADER = gql`
  query Headers {
    header: headers {
      id
      title
      subTitle
      images {
        url
      }
    }
    content: categoryHeaders {
      title
      shortDesc
      slug
      images {
        url
      }
      posts {
        title
        slug
        shortDesc
        content {
          html
        }
        headerImage {
          url
        }
        createdBy {
          name
        }
      }
    }
    logo: logoHeaders {
      images {
        url
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  query {
    categories {
      name
      id
    }
  }
`;

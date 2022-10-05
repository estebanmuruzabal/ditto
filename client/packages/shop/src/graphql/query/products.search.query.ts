import gql from 'graphql-tag';

export const GET_PRODUCTS_SEARCH = gql`
query GetProducts(
  $type: String
  $category: String
  $searchText: String
  $offset: Int,
  $limit: Int
) {
  products(
    type: $type
    category: $category
    searchText: $searchText
    offset: $offset,
    limit: $limit
  ) {
    items {
      type {
        slug
      }
      name
      slug
    }
  }

}

`;

import gql from 'graphql-tag';

export const GET_PRODUCTS = gql`
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
      id
      type {
        id
        slug
      }
      categories {
        id
        slug
      }
      name
      slug
      description
      packagePrice
      images
      unit
      price
      sale_price
      discount_in_percent
      product_quantity
      is_featured
      is_online
      meta_title
      meta_keyword
      meta_description
    }
    totalCount
    hasMore
  }

}

`;

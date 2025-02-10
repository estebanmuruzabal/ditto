import gql from 'graphql-tag';

export const GET_CATEGORIES = gql`
query GetCategories {
  categories(limit: 0) {
    items {
      id
      parent_id
      name
      slug
      banner
      icon
      children {
        id
        name
        slug
        banner
        icon
      }
    }
    totalCount
    hasMore
  }
}
`;
 


// $type: String
// ){
// 	categories(
//     type: $type
//   ) {
//     items {
//         id
//         parent_id
//         name
//         slug
//         banner
//         icon
//         children {
//           id
//           name
//           slug
//           banner
//           icon
//         }
//       }
//       totalCount
//       hasMore
//     }
//   }
// `;

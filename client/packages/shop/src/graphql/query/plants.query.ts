import gql from 'graphql-tag';

export const ADD_PLANT = gql`
mutation AddPlant($id: ID!, $name: String!, $plantId: Int!) {
  addPlant(
    id: $id,
    name: $name,
    plantId: $plantId
  ) {
    message
    status
  }
}
`;

export const UPDATE_SETTING = gql`
    mutation updateSetting($id: ID!, $plantId: Int!, $input: InputSettings!) {
      updateSetting(id: $id, plantId: $plantId, input: $input) {
        message
        status
      }
    }
`;

// export const GET_PLANTS = gql`
// mutation GetUserPlants($id: ID!, $name: String!, $humedad: Int, $tempeture: Int, $mapeoTierra: Int, $mapeoLuz: Int) {
//   getUserPlants(
//     id: $id,
//   ) {
//     id
//   }
// }
// `;
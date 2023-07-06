import gql from 'graphql-tag';

export const ADD_PLANT = gql`
mutation AddPlant($id: ID!, $name: String!, $controllerId: Int!) {
  addPlant(
    id: $id,
    name: $name,
    controllerId: $controllerId
  ) {
    message
    status
  }
}
`;

export const UPDATE_SETTING = gql`
    mutation updateSetting($id: ID!, $controllerId: Int!, $input: InputSettings!) {
      updateSetting(id: $id, controllerId: $controllerId, input: $input) {
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
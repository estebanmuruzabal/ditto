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

export const UPDATE_LIGHT_SETTINGS = gql`
    mutation UpdateLightSettings($id: ID!, $controllerId: Int!, $input: InputLightSettings!) {
      updateLightSettings(id: $id, controllerId: $controllerId, input: $input) {
        message
        status
      }
    }
`;

export const UPDATE_HUMIDITY_1_SETTINGS = gql`
    mutation UpdateSoilHumiditySettings1($id: ID!, $controllerId: Int!, $input: InputHumiditySettings!) {
      updateSoilHumiditySettings1(id: $id, controllerId: $controllerId, input: $input) {
        message
        status
      }
    }
`;

export const UPDATE_HUMIDITY_2_SETTINGS = gql`
    mutation UpdateSoilHumiditySettings2($id: ID!, $controllerId: Int!, $input: InputHumiditySettings!) {
      updateSoilHumiditySettings2(id: $id, controllerId: $controllerId, input: $input) {
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
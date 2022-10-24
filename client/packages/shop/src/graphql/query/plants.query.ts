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

export const UPDATE_PLANT = gql`
mutation UpdatePlant($id: ID!, $controllerId: Int!, $humedad: Int, $temperatura: Int, $mapeoTierra: Int, $mapeoLuz: Int) {
  updatePlant(
    id: $id,
    controllerId: $controllerId,
    humedad: $humedad,
    temperatura: $temperatura,
    mapeoTierra: $mapeoTierra,
    mapeoLuz: $mapeoLuz
  ) {
    message
    status
  }
}
`;

export const GET_PLANTS = gql`
mutation GetUserPlants($id: ID!, $name: String!, $humedad: Int, $temperatura: Int, $mapeoTierra: Int, $mapeoLuz: Int) {
  getUserPlants(
    id: $id,
  ) {
    id
  }
}
`;
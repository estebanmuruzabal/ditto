import gql from 'graphql-tag';

export const ADD_PLANT = gql`
mutation AddPlant($id: ID!, $name: String!, $humedad: Int, $temperatura: Int, $mapeoTierra: Int, $mapeoLuz: Int) {
  addPlant(
    id: $id,
    name: $number,
    humedad: $humedad,
    temperatura: $temperatura,
    mapeoTierra: $mapeoTierra,
    mapeoLuz: $mapeoLuz
  ) {
    id
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
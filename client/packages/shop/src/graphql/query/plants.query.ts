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

export const UPDATE_HUMIDITY_SETTINGS_1 = gql`
    mutation UpdateSoilHumiditySettings1($id: ID!, $controllerId: Int!,  $maxWarning: String, $minWarning: String, $mode: String, $relayOneAutomatedTimeToRun: String, $relayOneAutomatedStartedTime: String, $relayTwoAutomatedStartedTime: String, $relayOneIdRelated: String, $relayOneWorking: Boolean, $relayTwoAutomatedTimeToRun: String, $relayTwoIdRelated: String, $relayTwoWorking: Boolean, $name: String, $sendWhatsappWarnings: Boolean) {
      updateSoilHumiditySettings1(
        id: $id,
        name: $name,
        sendWhatsappWarnings: $sendWhatsappWarnings,
        controllerId: $controllerId,
        maxWarning: $maxWarning,
        minWarning: $minWarning,
        mode: $mode,
        relayOneAutomatedTimeToRun: $relayOneAutomatedTimeToRun,
        relayOneAutomatedStartedTime: $relayOneAutomatedStartedTime,
        relayTwoAutomatedStartedTime: $relayTwoAutomatedStartedTime,
        relayOneIdRelated: $relayOneIdRelated,
        relayOneWorking: $relayOneWorking,
        relayTwoAutomatedTimeToRun: $relayTwoAutomatedTimeToRun,
        relayTwoIdRelated: $relayTwoIdRelated,
        relayTwoWorking: $relayTwoWorking
    ) {
        message
        status
    }
    }
`;

export const UPDATE_HUMIDITY_SETTINGS_2 = gql`
    mutation UpdateSoilHumiditySettings2($id: ID!, $controllerId: Int!,  $maxWarning: String, $minWarning: String, $mode: String, $relayOneAutomatedTimeToRun: String, $relayOneAutomatedStartedTime: String, $relayTwoAutomatedStartedTime: String, $relayOneIdRelated: String, $relayOneWorking: Boolean, $relayTwoAutomatedTimeToRun: String, $relayTwoIdRelated: String, $relayTwoWorking: Boolean, $name: String, $sendWhatsappWarnings: Boolean) {
      updateSoilHumiditySettings2(
        id: $id,
        name: $name,
        sendWhatsappWarnings: $sendWhatsappWarnings,
        controllerId: $controllerId,
        maxWarning: $maxWarning,
        minWarning: $minWarning,
        mode: $mode,
        relayOneAutomatedTimeToRun: $relayOneAutomatedTimeToRun,
        relayOneAutomatedStartedTime: $relayOneAutomatedStartedTime,
        relayTwoAutomatedStartedTime: $relayTwoAutomatedStartedTime,
        relayOneIdRelated: $relayOneIdRelated,
        relayOneWorking: $relayOneWorking,
        relayTwoAutomatedTimeToRun: $relayTwoAutomatedTimeToRun,
        relayTwoIdRelated: $relayTwoIdRelated,
        relayTwoWorking: $relayTwoWorking
    ) {
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
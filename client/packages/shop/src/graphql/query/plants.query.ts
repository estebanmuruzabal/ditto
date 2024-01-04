import gql from 'graphql-tag';

export const CREATE_UPDATE_PLANT = gql`
mutation AddPlant($id: ID!, $name: String!, $plantId: Int!, $timeZone: String) {
  addPlant(
    id: $id,
    name: $name,
    plantId: $plantId,
    timeZone: $timeZone
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

export const DELETE_SETTING = gql`
    mutation DeleteSetting($id: ID!, $plantId: Int!, $settingName: String!) {
      deleteSetting(id: $id, plantId: $plantId, settingName: $settingName) {
        message
        status
      }
    }
`;


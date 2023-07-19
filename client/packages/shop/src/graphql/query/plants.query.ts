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

export const DELETE_SETTING = gql`
    mutation DeleteSetting($id: ID!, $plantId: Int!, $settingName: String!) {
      deleteSetting(id: $id, plantId: $plantId, settingName: $settingName) {
        message
        status
      }
    }
`;


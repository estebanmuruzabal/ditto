import gql from 'graphql-tag';

export const ADD_ADDRESS = gql`
mutation AddDeliveryAddress(
  $id: ID!, 
  $title: String!,
  $address: String!,
  $location: String,
  $instructions: String,
) {
  addDeliveryAddress(
    id: $id, 
    title: $title, 
    address: $address, 
    location: $location,
    instructions: $instructions
  ) {
    id
    title
    address
    location
    instructions
    is_primary
  }
}
`;


export const UPDATE_ADDRESS = gql`
  mutation UpdateDeliveryAddress (
      $id: ID!, 
      $addressId: String!
      $title: String!,
      $address: String!,
      $location: String,
      $instructions: String
     ){
      updateDeliveryAddress (
        id: $id, 
        addressId: $addressId,
        title: $title, 
        address: $address, 
        location: $location,
        instructions: $instructions
    ){
      id
      title
      address
      location
      instructions
      is_primary
    }
  }
`;

export const SETPRIMARY_ADDRESS = gql`
  mutation SetDeliveryAddressPrimary (
      $id: ID!, 
      $addressId: String!
     ){
      setDeliveryAddressPrimary (
        id: $id, 
        addressId: $addressId
    ){
      message
      status
    }
  }
`;


export const DELETE_ADDRESS = gql`
  mutation DeleteDeliveryAddress( 
    $id: ID!, 
    $addressId: String!
    ) {
    deleteDeliveryAddress(
      id: $id,
      addressId: $addressId,
    ) {
     status
      message
    }
  }
`;

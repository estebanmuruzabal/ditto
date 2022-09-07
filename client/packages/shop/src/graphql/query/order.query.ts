
import gql from 'graphql-tag';

export const GET_ORDERS = gql`
  query GetUserOrders {
    getUserOrders {
      id
      order_code
      customer_id
      contact_number
      datetime
      delivery_address
      payment_method
      payment_status
      status
      discount_amount
      sub_total
      total
      delivery_date
      delivery_method {
        name
        isPickUp
        pickUpAddress
        details
      }
      order_tracking {
        status
        ordering
        is_current
        step_competed
      }
      order_products {
        product_id
        image
        quantity
        unit
        price
      }
    }
  }
`;
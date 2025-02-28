
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
      delivery_method_id
      status
      discount_amount
      sub_total
      total
      delivery_pickup_date
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
        recicledQuantity
        unit
        name
        price
      }
    }
  }
`;

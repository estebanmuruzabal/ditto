import React, { useState, useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { useQuery } from '@apollo/react-hooks';
import { GET_ORDERS } from 'graphql/query/order.query';
import ErrorMessage from 'components/error-message/error-message';
import {
  DesktopView,
  MobileView,
  OrderBox,
  OrderListWrapper,
  OrderList,
  OrderDetailsWrapper,
  Title,
  ImageWrapper,
  ItemWrapper,
  ItemDetails,
  ItemName,
  ItemSize,
  ItemSalePrice,
  ItemPrice,
  NoOrderFound,
} from './order.style';

import OrderDetails from './order-details/order-details';
import OrderCard from './order-card/order-card';
import OrderCardMobile from './order-card/order-card-mobile';
import useComponentSize from 'utils/useComponentSize';
import { FormattedMessage, useIntl } from 'react-intl';
import {SHOP_IMAGE_HOST} from "../../../utils/images-path";
import { DELIVERY_METHOD } from 'graphql/query/delivery';

const progressData = ['Recibido', 'EnTransito ', 'Entregado'];


export const orderTableColumns = [
  {
    title: <FormattedMessage id="cartItems" defaultMessage="Items" />,
    dataIndex: '',
    key: 'items',
    width: 250,
    ellipsis: true,
    render: (text, record) => {
      return (
        <ItemWrapper>
          <ImageWrapper>
            <img src={SHOP_IMAGE_HOST+record.image} alt={record.name} />
          </ImageWrapper>

          <ItemDetails>
            <ItemName>{record.name}</ItemName>
            {/* <ItemSize>{record.unit}</ItemSize> */}
            {record.sale_price ? <ItemSalePrice>${record.sale_price}</ItemSalePrice> : <ItemPrice>${record.price}</ItemPrice> }
          </ItemDetails>
        </ItemWrapper>
      );
    },
  },
  {
    title: (
      <FormattedMessage id="intlTableColTitle2" defaultMessage="Quantity" />
    ),
    dataIndex: 'quantity',
    key: 'quantity',
    align: 'center',
    width: 100,
  },
  {
    title: (
      <FormattedMessage id="intlTableColTitle4" defaultMessage="Quantity" />
    ),
    dataIndex: 'recicledQuantity',
    key: 'recicledQuantity',
    align: 'center',
    width: 100,
  },
  {
    title: <FormattedMessage id="intlOrderCardTotalText" defaultMessage="Total Price" />,
    dataIndex: '',
    key: 'price',
    align: 'right',
    width: 100,
    render: (text, record) => {
      return <p>${record.price * record.quantity}</p>;
    },
  },
];

const OrdersContent: React.FC<{}> = () => {

  const [order, setOrder] = useState(null);
  const [active, setActive] = useState('');
  const [targetRef, size] = useComponentSize();
  const orderListHeight = size.height - 79;
  const {data: deliverData} = useQuery(DELIVERY_METHOD)
  const intl = useIntl();
  const { data, error, loading } = useQuery(GET_ORDERS);
    useEffect( () => {
      if (data && data.getUserOrders.length !== 0) {
        setOrder(data.getUserOrders[0]);
        setActive(data.getUserOrders[0].id);
      }
    }, [data]);

    if (loading) {
      return <ErrorMessage message={intl.formatMessage({ id: 'loading', defaultMessage: 'Cargando...' })} />
    };

    if (error) {
      return (
        <ErrorMessage message={error.message} />
      );
    };


  const myOrder = data.getUserOrders;

  const handleClick = (order: any) => {
    setOrder(order);
    setActive(order.id);
  };

  // const pickedUpOptionIds = deliverData.deliveryMethods.map(deliveryMethod => {
  //   return deliveryMethod.isPickUp ? deliveryMethod.id : null;
  // });
  // // const deliveryOptionIds = deliveryMethods.map(deliveryMethod => {
  // //   return !deliveryMethod.isPickUp ? deliveryMethod.id : null;
  // // });
  // const pickUpOptionSelected = pickedUpOptionIds.includes(order.delivery_method_id)

  return (
    <OrderBox>
      <DesktopView>
        <OrderListWrapper style={{ height: size.height }}>
          <Title style={{ padding: '0 20px' }}>
            <FormattedMessage
              id="intlOrderPageTitle"
              defaultMessage="My Order"
            />
          </Title>

          <Scrollbars
            universal
            autoHide
            autoHeight
            autoHeightMin={420}
            autoHeightMax={isNaN(orderListHeight) ? 500 : orderListHeight}
          >
            <OrderList>
              {myOrder.length !== 0 ? (
                myOrder.map((current: any, index: any) => (
                  <OrderCard
                    key={index}
                    orderId={current.order_code}
                    className={current.id === active ? 'active' : ''}
                    status={current.status}
                    date={current.datetime.split('2020').shift()}
                    amount={current.total}
                    onClick={() => {
                      handleClick(current);
                    }}
                  />
                ))
              ) : (
                <NoOrderFound>
                  <FormattedMessage
                    id="intlNoOrderFound"
                    defaultMessage="No order found"
                  />
                </NoOrderFound>
              )}
            </OrderList>
          </Scrollbars>
        </OrderListWrapper>

        <OrderDetailsWrapper ref={targetRef}>
          <Title style={{ padding: '0 20px' }}>
            <FormattedMessage
              id="orderDetailsText"
              defaultMessage="Order Details"
            />
          </Title>
          {order ? (
            <OrderDetails
              id={order.id}
              progressStatus={order.status}
              progressData={order.order_tracking}
              number={order.contact_number}
              address={order.delivery_address}
              deliveryDate={order.delivery_date}
              subtotal={order.sub_total}
              discount={order.discount_amount}
              grandTotal={order.total}
              tableData={order.order_products}
              columns={orderTableColumns}
              deliveryMethod={order.delivery_method}
            />
          ) : (
            <NoOrderFound>
              <FormattedMessage
                id="intlNoOrderFound"
                defaultMessage="No order found"
              />
            </NoOrderFound>
          )}
        </OrderDetailsWrapper>
      </DesktopView>

      {order ? (
        <MobileView>
            <OrderList>
            <OrderCardMobile
              orders={myOrder}
              className={order && order.id === active ? 'active' : ''}
              progressData={progressData}
              columns={orderTableColumns}
              onClick={() => {
                handleClick(order);
              }}
            />
          </OrderList>
        </MobileView>
      ) : (
        <NoOrderFound>
          <FormattedMessage
            id="intlNoOrderFound"
            defaultMessage="No order found"
          />
        </NoOrderFound>
      )}
    </OrderBox>
  );
};

export default OrdersContent;

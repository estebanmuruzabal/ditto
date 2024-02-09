import React,  { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import moment from 'moment';
import { useQuery } from '@apollo/react-hooks';
import { GET_ORDERS } from 'graphql/query/order.query';
import { CURRENCY } from 'utils/constant';
import ErrorMessage from 'components/error-message/error-message';
import OrderReceivedWrapper, {
  OrderReceivedContainer,
  OrderInfo,
  OrderDetails,
  TotalAmount,
  BlockTitle,
  Text,
  InfoBlockWrapper,
  InfoBlock,
  ListItem,
  ListTitle,
  ListDes,
  LinkPickUp,
  OrderTable
} from './order-received.style';
import { FormattedMessage, useIntl } from 'react-intl';
import { DELIVERY_METHOD } from 'graphql/query/delivery';
import { getDeliverySchedule, capitalizeFirstLetter, getDeliveryFee } from 'utils/shop-helper';

type OrderReceivedProps = {
  data?: any;
  index?: Number;
  Router?: any;
};

const OrderReceived: React.FunctionComponent<OrderReceivedProps> = (props) => {
  const router = useRouter();
  const intl = useIntl();
  const { data, error, loading } = useQuery(GET_ORDERS);
  const { data: deliverData, error: deliveryError, loading: deliveryLoading, refetch: deliveryRefetch } = useQuery(DELIVERY_METHOD)
  
  if (loading) {
    return <ErrorMessage message={intl.formatMessage({ id: 'loading', defaultMessage: 'Cargando...' })} />
  };

  const components = {
    table: OrderTable,
  };
  if (error) {
    return (
      <ErrorMessage message={error.message} />
    );
  };
  const ids = data.getUserOrders.map(el => el.id);

  const index = ids.indexOf(router.query.itemId);
  // if we dont get an itemId we suppose that the latest order is the one to show!
  const myOrder = data.getUserOrders[index >= 0 ? index : 0];

  const printHandler = () =>{
    if (typeof window !== 'undefined') {
      window.print()
    }
  }


  const dateAndTime = `${moment(myOrder?.datetime).format('MM/DD/YY')}, ${moment(myOrder?.datetime).format('hh:mm A')}`;

  const deliveryMethods = deliverData?.deliveryMethods?.items;
  const orderDeliveryMethod = deliveryMethods?.filter(method => method.id === myOrder?.delivery_method_id)[0];
  const deliveryDateAndTime = `${myOrder?.delivery_pickup_date} ${getDeliverySchedule(orderDeliveryMethod?.details, intl.locale)}`;

  return (
    <OrderReceivedWrapper>
      <OrderReceivedContainer>
        <Link href="/profile">
          <a className="home-btn">
            <FormattedMessage id="backProfileBtn" defaultMessage="Back to Profile" />
          </a>
        </Link>
        <span onClick={printHandler} className="print-btn">
          <FormattedMessage id="printInvoiceBtn" defaultMessage="Print Invoice" />
        </span>

        <OrderInfo>
          <BlockTitle>
            <FormattedMessage
              id="orderReceivedSuccess"
              defaultMessage="Order"
            />
          </BlockTitle>
          <InfoBlockWrapper>
            <InfoBlock>
              <Text bold className="title">
                <FormattedMessage
                  id="orderNumberText"
                  defaultMessage="Order Number"
                />
              </Text>
              <Text>{myOrder?.order_code}</Text>
            </InfoBlock>

            <InfoBlock>
              <Text bold className="title">
                <FormattedMessage id="orderDateText" defaultMessage="Date" />
              </Text>
              <Text>{dateAndTime}</Text>
            </InfoBlock>

            <InfoBlock>
              <Text bold className="title">
                <FormattedMessage id="totalText" defaultMessage="Total" />
              </Text>
              <Text>{CURRENCY}{myOrder?.total}</Text>
            </InfoBlock>

            <InfoBlock>
              <Text bold className="title">
                <FormattedMessage
                  id="paymenMethodText"
                  defaultMessage="Payment Method"
                />
              </Text>
              <Text>{myOrder?.payment_method}</Text>
            </InfoBlock>
          </InfoBlockWrapper>
        </OrderInfo>

        <OrderDetails>
          <BlockTitle>
            <FormattedMessage
              id={orderDeliveryMethod?.isPickUp ? "pickupDetailsText" :  "deliveryDetailsText"}
              defaultMessage="Order Details"
            />
          </BlockTitle>
          <ListItem>
              <ListTitle>
                <Text>
                  <FormattedMessage
                    id="deliveryMethodTitle"
                    defaultMessage="Order Method"
                  />
                </Text>
              </ListTitle>
              <ListDes>
            <Text bold>{orderDeliveryMethod?.name}</Text>
              </ListDes>
            </ListItem>
          
          {/* <ListItem>
            <ListTitle>
              <Text bold>
                <FormattedMessage
                  id="orderMethodDetailText"
                  defaultMessage="Order Method Details"
                />
              </Text>
            </ListTitle>
            <ListDes>
           <Text>{orderDeliveryMethod.details}</Text>
            </ListDes>
          </ListItem> */}
          { orderDeliveryMethod?.isPickUp ? (
            <>
              <ListItem>
                <ListTitle>
                  <Text>
                    <FormattedMessage
                      id="deliveryTime"
                      defaultMessage="Delivery Time"
                    />
                  </Text>
                </ListTitle>
                <ListDes>
                <Text bold>{capitalizeFirstLetter(deliveryDateAndTime)}</Text>
                </ListDes>
              </ListItem>

              { orderDeliveryMethod?.pickUpAddress.includes('http') && (
                <ListItem>
                  <ListTitle>
                    <Text bold>
                      <FormattedMessage
                        id="deliveryLocationText"
                        defaultMessage="Delivery Location"
                      />
                    </Text>
                  </ListTitle>
                  <ListDes>
                    <LinkPickUp href={orderDeliveryMethod?.pickUpAddress} target="_blank" rel="noopener noreferrer">Click/toque aquí</LinkPickUp>      
                  </ListDes>
                </ListItem>
                )}
           </>
          ) : (
            <>
              <ListItem>
                <ListTitle>
                  <Text bold>
                    <FormattedMessage
                      id="deliveryDateTitle"
                      defaultMessage="Delivery Date"
                    />
                  </Text>
                </ListTitle>
                <ListDes>
                  <Text>
                  <Text>{capitalizeFirstLetter(deliveryDateAndTime)}</Text>
                  </Text>
                </ListDes>
              </ListItem>
              <ListItem>
                <ListTitle>
                  <Text bold>
                    <FormattedMessage
                      id="deliveryAddress"
                      defaultMessage="Delivery Address"
                    />
                  </Text>
                </ListTitle>
                <ListDes>
                  <Text>
                    {myOrder?.delivery_address}
                  </Text>
                </ListDes>
              </ListItem>
            </>
          )}
        </OrderDetails>

        <TotalAmount>
          <BlockTitle>
            <FormattedMessage
              id="totalAmountText"
              defaultMessage="Total Amount"
            />
          </BlockTitle>

          <ListItem>
            <ListTitle>
              <Text bold>
                <FormattedMessage
                  id="paymenMethodText"
                  defaultMessage="Payment Method"
                />
              </Text>
            </ListTitle>
            <ListDes>
              <Text>{myOrder?.payment_method}</Text>
            </ListDes>
          </ListItem>

          <ListItem>
            <ListTitle>
              <Text bold>
                <FormattedMessage id="subTotal" defaultMessage="Sub total" />
              </Text>
            </ListTitle>
            <ListDes>
              <Text>{CURRENCY}{myOrder?.sub_total}</Text>
            </ListDes>
          </ListItem>

          { !orderDeliveryMethod?.isPickUp && (
            <ListItem>
              <ListTitle>
                <Text bold>
                  <FormattedMessage id="deliveryFee" defaultMessage="Delivery Fee" />
                </Text>
              </ListTitle>
              <ListDes>
                <Text>{CURRENCY}{getDeliveryFee(orderDeliveryMethod.name)}</Text>
              </ListDes>
            </ListItem>
          )}

          {/* <OrderTableWrapper>
            <Table
              columns={orderTableColumns}
              data={myOrder?.order_products}
              rowKey={(record) => record.id}
              components={components}
              className="orderDetailsTable"
              // scroll={{ y: 350 }}
            />
        </OrderTableWrapper> */}
          <ListItem>
            <ListTitle>
              <Text bold>
                <FormattedMessage id="totalText" defaultMessage="Total" />
              </Text>
            </ListTitle>
            <ListDes>
              <Text>{CURRENCY}{myOrder?.total}</Text>
            </ListDes>
          </ListItem>
        </TotalAmount>
      </OrderReceivedContainer>
    </OrderReceivedWrapper>
  );
};

export default OrderReceived;

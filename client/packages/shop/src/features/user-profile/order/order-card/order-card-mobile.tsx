import React from 'react';
import Table from 'rc-table';
import Collapse, { Panel } from 'rc-collapse';
import ReactToPrint from "react-to-print";
import Progress from 'components/progress-box/progress-box';

import { FormattedMessage, useIntl } from 'react-intl';

import {
  OrderListHeader,
  TrackID,
  Status,
  OrderMeta,
  Meta,
  CardWrapper,
  OrderDetail,
  DeliveryInfo,
  DeliveryAddress,
  Address,
  Contact,
  CostCalculation,
  PriceRow,
  Price,
  ProgressWrapper,
  Text,
  OrderTable,
  LinkPickUp,
  OrderTableMobile,
} from './order-card.style';

import { CURRENCY } from 'utils/constant';
import moment from 'moment';
import { date } from 'yup';
import { useQuery } from '@apollo/react-hooks';
import { DELIVERY_METHOD } from 'graphql/query/delivery';

type MobileOrderCardProps = {
  orderId?: any;
  onClick?: (e: any) => void;
  className?: any;
  status?: any;
  date?: any;
  deliveryTime?: any;
  amount?: number;
  tableData?: any;
  columns?: any;
  progressData?: any;
  progressStatus?: any;
  address?: string;
  subtotal?: number;
  discount?: number;
  deliveryMethod?: any;
  deliveryFee?: number;
  grandTotal?: number;
  orders?: any;
};

const components = {
  table: OrderTable,
};

const OrderCard: React.FC<MobileOrderCardProps> = ({
  onClick,
  className,
  columns,
  progressData,
  orders,
}) => {
  //   const displayDetail = className === 'active' ? '100%' : '0';
  const addAllClasses: string[] = ['accordion'];
  const { data: deliverData, error: deliveryError, loading: deliveryLoading, refetch: deliveryRefetch } = useQuery(DELIVERY_METHOD)
  
  const intl = useIntl();

  if (className) {
    addAllClasses.push(className);
  }
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const getDeliverySchedule = (details) => {
    if (!details) return '';
    const word = 'Horario: ';

    const index = details.indexOf(word);   // 8
    const length = word.length;			// 7

    return details.slice(index + length);
  }
  console.log(orders)
  const deliveryMethods = deliverData?.deliveryMethods?.items;

  return (
    <>
      <Collapse
        accordion={true}
        className={addAllClasses.join(' ')}
        defaultActiveKey="active"
        expandIcon={() => { }}
      >
        {orders.map((order: any) => {
          const orderDeliveryMethod = deliveryMethods?.filter(method => method.id === order?.delivery_method_id)[0];
          const deliveryDateAndTime = `${order?.delivery_date} ${getDeliverySchedule(orderDeliveryMethod?.details)}`;
          return (
            <Panel
              header={
                <CardWrapper onClick={onClick}>
                  <OrderListHeader>
                    <TrackID>
                      {intl.formatMessage({ id: 'order', defaultMessage: 'Order' })} <span>  #{order?.id.slice(order?.id.length - 4, order?.id.length)}</span>
                    </TrackID>
                    <Status>{order.status}</Status>
                  </OrderListHeader>

                  <OrderMeta>
                    <Meta>{intl.formatMessage({ id: 'deliveryMethodTitle', defaultMessage: 'Delivery Method:' })} <span>{orderDeliveryMethod?.name}</span></Meta>
                    {orderDeliveryMethod?.isPickUp ? (
                      <>
                        <Meta>{intl.formatMessage({ id: 'deliveryTime', defaultMessage: 'Delivery Time' })}<span>{capitalizeFirstLetter(deliveryDateAndTime)}</span></Meta>
                        <Meta>{intl.formatMessage({ id: 'deliveryLocationText', defaultMessage: 'Delivery Location:' })}
                          <span>
                            { orderDeliveryMethod?.pickUpAddress.includes('http')
                              ? (<LinkPickUp href={orderDeliveryMethod?.pickUpAddress} target="_blank" rel="noopener noreferrer">Click/toque aquí</LinkPickUp>) 
                              : (<Text>{orderDeliveryMethod?.pickUpAddress}</Text>)
                            }
                          </span>
                        </Meta>
                      </>
                    ) : (
                        <>
                        <Meta>{intl.formatMessage({ id: 'deliveryDateTitle', defaultMessage: 'Delivery Date:' })}<span>{capitalizeFirstLetter(deliveryDateAndTime)}</span></Meta>
                        <Meta>{intl.formatMessage({ id: 'deliveryAddress', defaultMessage: 'Delivery Address:' })} <span>{order?.delivery_address}</span></Meta>
                      </>
                    )}

                    <Meta className="price">
                      {intl.formatMessage({ id: 'totalPrice', defaultMessage: 'Total Price:' })}
                      <span>
                        {CURRENCY}
                        {order.total}
                      </span>
                    </Meta>
                  </OrderMeta>
                </CardWrapper>
              }
              headerClass="accordion-title"
              key={order.id}
            >
              <OrderDetail>
                <DeliveryInfo>
                  <DeliveryAddress>
                    <h3>{intl.formatMessage({ id: 'productInfoDetailed', defaultMessage: 'Purchased products details can be checked on a Desktop browser' })}</h3>
                  </DeliveryAddress>
                  <DeliveryAddress>
                    <h3>{intl.formatMessage({ id: 'contactNumber', defaultMessage: 'Contact Number' })}</h3>
                    <Contact>{order.contact_number}</Contact>
                  </DeliveryAddress>
                  <DeliveryAddress>
                    <h3>{intl.formatMessage({ id: 'deliveryAddress', defaultMessage: 'Delivery Address' })}</h3>
                    <Address>{order.delivery_address}</Address>
                  </DeliveryAddress>
                  <CostCalculation>
                    <PriceRow>
                      Subtotal
                      <Price>
                        {CURRENCY}
                        {order.sub_total}
                      </Price>
                    </PriceRow>
                    <PriceRow>
                      {intl.formatMessage({ id: 'discount', defaultMessage: 'Discount' })}
                      <Price>
                        {CURRENCY}
                        {order.discount || '0'}
                      </Price>
                    </PriceRow>
                    <PriceRow className="grandTotal">
                      Total
                      <Price>
                        {CURRENCY}
                        {order.total}
                      </Price>
                    </PriceRow>
                  </CostCalculation>
                </DeliveryInfo>

                {/*<ProgressWrapper>
                  <Progress data={progressData} status={order.status} />
                </ProgressWrapper>

                <OrderTableMobile>
                  <Table
                    columns={columns}
                    data={order.products}
                    rowKey={(record) => record.id}
                    components={components}
                    scroll={{ x: 450 }}
                    // scroll={{ y: 250 }}
                  />
                </OrderTableMobile>*/}
              </OrderDetail>
            </Panel>
          )}
        )}
      </Collapse>
    </>
  );
};

export default OrderCard;

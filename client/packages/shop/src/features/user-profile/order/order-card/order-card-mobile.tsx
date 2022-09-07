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
  OrderTable,
  OrderTableMobile,
} from './order-card.style';

import { CURRENCY } from 'utils/constant';
import moment from 'moment';
import { date } from 'yup';

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
  const getDeliverySchedule = (details) => {
    const word = 'Horario';

    const index = details.indexOf(word);   // 8
    const length = word.length;			// 7

    return details.slice(index + length);
  }
  const intl = useIntl();
  if (className) {
    addAllClasses.push(className);
  }
  console.log("orderrs:L", orders)

  return (
    <>
      <Collapse
        accordion={true}
        className={addAllClasses.join(' ')}
        defaultActiveKey="active"
        expandIcon={() => {}}
      >
        {orders.map((order: any) => (
          <Panel
            header={
              <CardWrapper onClick={onClick}>
                <OrderListHeader>
                  <TrackID>
                  {intl.formatMessage({ id: 'order', defaultMessage: 'Order' })} <span>#{order.id}</span>
                  </TrackID>
                  <Status>{progressData[order.status - 1]}</Status>
                </OrderListHeader>

        
                <OrderMeta>
                  <Meta>{intl.formatMessage({ id: 'deliveryMethodTitle', defaultMessage: 'Delivery Method' })} <span>{order?.delivery_method?.name}</span></Meta>
                  {/* <Meta>{intl.formatMessage({ id: 'deliveryTime', defaultMessage: 'Delivery Time:' })}<span>18hs a 21hs {order.delivery_date}</span></Meta> */}
                  { order?.delivery_method?.isPickUp ? (
                    <>
                      <Meta>{intl.formatMessage({ id: 'pickUpDateTitle', defaultMessage: 'Pickup Date:' })}<span>{order.delivery_date}</span></Meta>
                      <Meta>{intl.formatMessage({ id: 'deliveryAddressTitle', defaultMessage: 'Delivery Address:' })} <span>{order?.delivery_address}</span></Meta>
                    </>
                  ) : (
                    <>
                      <Meta>{intl.formatMessage({ id: 'deliveryDateTitle', defaultMessage: 'Delivery Date:' })}<span>{`${getDeliverySchedule(order?.delivery_method?.details)} - ${moment(order?.deliveryDate).format('DD MMM')}` || '-'}</span></Meta>
                      <Meta>{intl.formatMessage({ id: 'deliveryAddressTitle', defaultMessage: 'Delivery Address:' })} <span>{order?.delivery_address}</span></Meta>
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
        ))}
      </Collapse>
    </>
  );
};

export default OrderCard;

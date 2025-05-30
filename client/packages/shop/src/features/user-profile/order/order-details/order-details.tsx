import React from 'react';
import Table from 'rc-table';
import Link from 'next/link';
import Router from 'next/router';
import {
  DeliveryInfo,
  DeliveryAddress,
  Address,
  CostCalculation,
  PriceRow,
  Price,
  Contact,
  ProgressWrapper,
  OrderTableWrapper,
  OrderTable,
  StyledLink
} from './order-details.style';
import Progress from 'components/progress-box/progress-box';
import { CURRENCY } from 'utils/constant';
import { FormattedMessage, useIntl } from 'react-intl';
import {Title} from "../order.style";
import moment from 'moment';
import { calculateDeliveryCharge, getDeliverySchedule } from 'utils/shop-helper';

type OrderDetailsProps = {
  id?: any;
  tableData?: any;
  columns?: any;
  progressData?: any;
  progressStatus?: any;
  address?: string;
  number?: string;
  deliveryDate?: string;
  subtotal?: number;
  discount?: number;
  grandTotal?: number;
  ref?: any;
  deliveryMethod?: any;
};

const components = {
  table: OrderTable,
};

const OrderDetails: React.FC<OrderDetailsProps> = ({
  tableData,
  columns,
  address,
  number,
  id,
  progressStatus,
  deliveryDate,
  progressData,
  subtotal,
  discount,
  grandTotal,
  deliveryMethod,
  ref
}) => {
  const intl = useIntl();
  const handleInvocie = () => {
    Router.push({
      pathname: '/order-received',
      query: { itemId: id }
    })
    return false
  }

  const deliveryDateAndTime = `${getDeliverySchedule(deliveryMethod?.details, intl.locale)} - ${moment(deliveryDate).format('DD MMM')}`

  return (
    <>
      <DeliveryInfo>
        <DeliveryAddress>
          <h3>
            <FormattedMessage
              id="deliveryMethodTitle"
              defaultMessage="Delivery Method"
            />
          </h3>
          <Contact>{deliveryMethod?.name}</Contact>
          <h3>
            <FormattedMessage
              id="contactNumberTitle"
              defaultMessage="Contact Number"
            />
          </h3>
          <Contact>{number}</Contact>
          {deliveryMethod?.isPickUp ? (
            <>
              <h3>
                <FormattedMessage
                  id="pickUpDateTitle"
                  defaultMessage="Pickup Date"
                />
              </h3>
              <Contact>{deliveryDateAndTime || '-'}</Contact>
              <h3>
                <FormattedMessage
                  id="deliveryAddressTitle"
                  defaultMessage="Delivery Address"
                />
              </h3>
              <Address>{address}</Address>
            </>
          ) : (
            <>
              <h3>
                <FormattedMessage
                  id="deliveryDateTitle"
                  defaultMessage="Delivery Date"
                />
              </h3>
              <Contact>{deliveryDateAndTime || '-'}</Contact>
              <h3>
                <FormattedMessage
                  id="deliveryAddressTitle"
                  defaultMessage="Delivery Address"
                />
              </h3>
              <Address>{address}</Address>
            </>
          )}
        </DeliveryAddress>

        <CostCalculation>
          <PriceRow>
            <FormattedMessage id="subTotal" defaultMessage="Sub total" />
            <Price>
              {CURRENCY}
              {subtotal}
            </Price>
          </PriceRow>
          <PriceRow>
            <FormattedMessage
              id="intlOrderDetailsDiscount"
              defaultMessage="Discount"
            />
            <Price>
              {CURRENCY}
              {discount !== null ? discount : 0}
            </Price>
          </PriceRow>
          <PriceRow>
            <FormattedMessage
              id="deliveryChargeText"
              defaultMessage="Delivery charge"
            />
            <Price>
              {CURRENCY}
              {calculateDeliveryCharge(deliveryMethod?.name)}
            </Price>
          </PriceRow>
          <PriceRow className="grandTotal">
            <FormattedMessage id="totalText" defaultMessage="Total" />
            <Price>
              {CURRENCY}
              {grandTotal}
            </Price>
          </PriceRow>
        </CostCalculation>
      </DeliveryInfo>
      <Title style={{ padding: '0 20px' }}>
        <FormattedMessage
            id="orderTrackingText"
            defaultMessage="Order Tracking"
        />
      </Title>
      <ProgressWrapper>
        <Progress data={progressData} status={progressStatus} />
      </ProgressWrapper>

      <OrderTableWrapper>
        <Table
          columns={columns}
          data={tableData}
          rowKey={(record) => record.id}
          components={components}
          className="orderDetailsTable"
          // scroll={{ y: 350 }}
        />
     </OrderTableWrapper>
      <StyledLink onClick={handleInvocie}>
        {intl.formatMessage({ id: 'getInvoiceId', defaultMessage: 'Get invoice' })}
      </StyledLink>
     </>
  );
};

export default OrderDetails;

import React, { useState } from 'react';
import Link from 'next/link';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import {
  CartPopupBody,
  PopupHeader,
  PopupItemCount,
  CloseButton,
  PromoCode,
  CheckoutButtonWrapper,
  CheckoutButton,
  Title,
  TitleDisabled,
  PriceBox,
  NoProductMsg,
  NoProductImg,
  ItemWrapper,
  CouponBoxWrapper,
  ProductQuantityExceededMsg,
  CouponCode,
  ErrorMsg,
  CheckoutTitle,
  MinOrderText,
} from './cart.style';
import { CloseIcon } from 'assets/icons/CloseIcon';
import { ShoppingBagLarge } from 'assets/icons/ShoppingBagLarge';
import { NoCartBag } from 'assets/icons/NoCartBag';
import { CURRENCY } from 'utils/constant';
import { FormattedMessage } from 'react-intl';
import { useLocale } from 'contexts/language/language.provider';
import CouponBox from 'components/coupon-box/coupon-box';

import { Scrollbars } from 'react-custom-scrollbars';
import { useCart } from 'contexts/cart/use-cart';
import { CartItem } from 'components/cart-item/cart-item';

type CartPropsType = {
  style?: any;
  className?: string;
  scrollbarHeight?: string;
  onCloseBtnClick?: (e: any) => void;
};

const Cart: React.FC<CartPropsType> = ({
  style,
  className,
  onCloseBtnClick,
  scrollbarHeight,
}) => {
  const {
    items,
    coupon,
    addItem,
    removeItem,
    removeItemFromCart,
    cartItemsCount,
    calculatePrice,
    applyCoupon,
  } = useCart();
  const [couponText, setCoupon] = useState('');
  const [displayCoupon, showCoupon] = useState(false);
  const [showProductQuantityExceededMsg, setShowProductQuantityExceededMsg] = useState(false);
  
  const [error, setError] = useState('');
  const { isRtl } = useLocale();
  const totalPrice = calculatePrice();
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setCoupon(e.currentTarget.value);
  };

  const showProductQuantityExceededMsgFor5Sec = () => {
    setShowProductQuantityExceededMsg(true);
    setTimeout(() => {
      setShowProductQuantityExceededMsg(false);
    }, 1500)
  };

  const addOneMore = (item) => {
    item.quantity < item.product_quantity ? addItem(item) : showProductQuantityExceededMsgFor5Sec()
  };

  const toggleCoupon = () => {
    showCoupon(true);
  };

  return (
    <CartPopupBody className={className} style={style}>
      <PopupHeader>
        <PopupItemCount>
          <ShoppingBagLarge width='19px' height='24px' />
          <span>
            {cartItemsCount}
            &nbsp;
            {cartItemsCount > 1 ? (
              <FormattedMessage id='cartItems' defaultMessage='items' />
            ) : (
              <FormattedMessage id='cartItem' defaultMessage='item' />
            )}
          </span>
        </PopupItemCount>

        <CloseButton onClick={onCloseBtnClick}>
          <CloseIcon />
        </CloseButton>
      </PopupHeader>

      <Scrollbars
        universal
        autoHide
        autoHeight
        autoHeightMax={scrollbarHeight}
        renderView={(props) => (
          <div
            {...props}
            style={{
              ...props.style,
              marginLeft: isRtl ? props.style.marginRight : 0,
              marginRight: isRtl ? 0 : props.style.marginRight,
            }}
          />
        )}
      >
        <ItemWrapper className='items-wrapper'>
          { showProductQuantityExceededMsg && (
            <ProductQuantityExceededMsg>
              <FormattedMessage
                id='productStockLimit'
                defaultMessage='There is no more availability of this product'
              />
            </ProductQuantityExceededMsg>
          )}
          {!!cartItemsCount ? (
            items.map((item) => {
            return (
              <CartItem
                key={`cartItem-${item.id}`}
                onIncrement={() => addItem(item)}
                onDecrement={() => item.quantity === 1 ? removeItemFromCart(item) : removeItem(item)}
                onRemove={() => removeItemFromCart(item)}
                data={item}
              />
            )
            }
            )
          ) : (
            <>
              <NoProductImg>
                <NoCartBag />
              </NoProductImg>
              <NoProductMsg>
                <FormattedMessage
                  id='noProductFound'
                  defaultMessage='No products found'
                />
              </NoProductMsg>
            </>
          )}
        </ItemWrapper>
      </Scrollbars>

      <CheckoutButtonWrapper>

        {cartItemsCount !== 0 ? (
          <>
          { totalPrice > 10 ? (
               <Link href='/checkout'>
                <CheckoutButton onClick={onCloseBtnClick}>
                  <>
                    <Title>
                      <FormattedMessage
                        id='navlinkCheckout'
                        defaultMessage='Checkout'
                      />
                    </Title>
                    <PriceBox>
                      {CURRENCY}
                      {totalPrice}
                    </PriceBox>
                  </>
                </CheckoutButton>
              </Link>
          ) : (
            <>
            <MinOrderText>{`Add at least $${Number(10 - totalPrice).toFixed(2)} to reach the order minimum of $10.00`}</MinOrderText>
              <CheckoutButton onClick={onCloseBtnClick}>
                <>
                  <Title>
                    <FormattedMessage
                      id='navlinkChecko'
                      defaultMessage='Continue shopping'
                    />
                  </Title>
                  <PriceBox>
                    {CURRENCY}
                    {totalPrice}
                  </PriceBox>
                </>
              </CheckoutButton>
            </>
          )}
          </>
        ) : (
          <CheckoutButton>
            <>
              <TitleDisabled>
                <FormattedMessage
                  id='navlinkCheckout'
                  defaultMessage='Checkout'
                />
              </TitleDisabled>
              <PriceBox>
                {CURRENCY}
                {totalPrice}
              </PriceBox>
            </>
          </CheckoutButton>
        )}
      </CheckoutButtonWrapper>
    </CartPopupBody>
  );
};

export default Cart;

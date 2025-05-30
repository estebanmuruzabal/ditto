import React from 'react';
import {
  CartPopupButtonStyled,
  ButtonImgBox,
  ItemCount,
  PriceBox,
  CartPopupBoxButton,
  CartPopupBoxButtonV2,
  PriceBoxAlt,
  TotalItems,
} from './cart-popup.style';
import { ShoppingBag } from 'assets/icons/ShoppingBag';
import { useIntl } from 'react-intl';

type CartButtonProps = {
  style?: React.CSSProperties;
  itemCount?: number;
  itemPostfix?: any;
  price?: number;
  pricePrefix?: string;
  className?: string;
  onClick?: (e: any) => void;
  btnText: string;
};

const CartPopupButton: React.FC<CartButtonProps> = ({
  itemCount,
  itemPostfix = 'items',
  price,
  pricePrefix = '$',
  style,
  onClick,
  className,
}) => (
  <CartPopupButtonStyled style={style} onClick={onClick} className={className}>
    <ButtonImgBox>
      <ShoppingBag />
    </ButtonImgBox>
    <ItemCount>
      {itemCount} {itemPostfix}
    </ItemCount>
    <PriceBox>
      {useIntl().formatMessage({ id: 'payStaticCard', defaultMessage: 'Pay: ' })}
      {pricePrefix}
      {parseFloat(`${price}`).toFixed(2)}
    </PriceBox>
  </CartPopupButtonStyled>
);

export const BoxedCartButton: React.FC<CartButtonProps> = ({
  itemCount,
  itemPostfix = 'items',
  price,
  pricePrefix = '$',
  style,
  onClick,
  className,
}) => (
  <CartPopupBoxButton style={style} onClick={onClick} className={className}>
    <TotalItems>
      <ShoppingBag />
      {itemCount} {itemPostfix}
    </TotalItems>
    <PriceBoxAlt>
      {useIntl().formatMessage({ id: 'payStaticCard', defaultMessage: 'Pay: ' })}
      {pricePrefix}
      {parseFloat(`${price}`).toFixed(2)}
    </PriceBoxAlt>
  </CartPopupBoxButton>
);

export const BoxedCartButtonV2: React.FC<CartButtonProps> = ({
  itemCount,
  itemPostfix = 'items',
  price,
  pricePrefix = '$',
  style,
  onClick,
  className,
  btnText
}) => (
  <CartPopupBoxButtonV2 style={style} onClick={onClick} className={className}>
      {btnText}
  </CartPopupBoxButtonV2>
);

export default CartPopupButton;

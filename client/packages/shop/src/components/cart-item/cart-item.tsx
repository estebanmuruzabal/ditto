import React from 'react';
import { Counter } from 'components/counter/counter';
import { CloseIcon } from 'assets/icons/CloseIcon';
import { CURRENCY } from 'utils/constant';
import { SHOP_IMAGE_HOST } from 'utils/images-path';
import {
  ItemBox,
  Image,
  Information,
  Name,
  Price,
  Weight,
  Total,
  RemoveButton,
} from './cart-item.style';

interface Props {
  data: any;
  onDecrement: () => void;
  onIncrement: () => void;
  onRemove: () => void;
}

export const CartItem: React.FC<Props> = ({
  data,
  onDecrement,
  onIncrement,
  onRemove,
}) => {
  const { name, images, price, salePrice, unit, quantity = 0, recicledQuantity = 0, packagePrice } = data;
  const recicledPrice = price - packagePrice;
  const totalQuantity = quantity + recicledQuantity;
  const displayPrice = salePrice || price;
  const nonRecicledTotalPrice = displayPrice * quantity;
  const recicledTotalPrice = recicledPrice * recicledQuantity || 0;
  const totalPrice = nonRecicledTotalPrice + recicledTotalPrice
  
  return (
    <ItemBox>
      { recicledQuantity < 1 && (
        <Counter
          value={totalQuantity}
          onDecrement={onDecrement}
          onIncrement={onIncrement}
          variant="lightVertical"
        />
      )}
      <Image src={SHOP_IMAGE_HOST+images[0]} />
      <Information>
        <Name>{name}</Name>
        {/* <Price>
          {CURRENCY}
          {displayPrice}
        </Price> */}
        { recicledQuantity > 0 && (
          <Weight>
            {recicledQuantity} X {CURRENCY}{recicledPrice}
          </Weight>
        )}
        { quantity > 0 && (
          <Weight>
            {quantity} X {CURRENCY}{price}
          </Weight>
        )}
      </Information>
      <Total>
        {CURRENCY}
        {(totalPrice).toFixed(2)}
      </Total>
      <RemoveButton onClick={onRemove}>
        <CloseIcon />
      </RemoveButton>
    </ItemBox>
  );
};

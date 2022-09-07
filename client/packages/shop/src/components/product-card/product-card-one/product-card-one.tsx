// product card for general
import React, { useState } from 'react';
import Image from 'components/image/image';
import { Button } from 'components/button/button';
import {
  ProductCardWrapper,
  ProductImageWrapper,
  ProductInfo,
  DiscountPercent,
  OutOfStock,
  ButtonText,
} from '../product-card.style';
import { useCart } from 'contexts/cart/use-cart';
import { Counter } from 'components/counter/counter';
import { cartAnimation } from 'utils/cart-animation';
import { FormattedMessage, useIntl } from 'react-intl';
import { CartIcon } from 'assets/icons/CartIcon';
import { ProductQuantityExceededMsg } from '../product-card.style';

type ProductCardProps = {
  title: string;
  image: any;
  weight: string;
  currency: string;
  description: string;
  price: number;
  salePrice?: number;
  discountInPercent?: number;
  data: any;
  onClick?: (e: any) => void;
  onChange?: (e: any) => void;
  increment?: (e: any) => void;
  decrement?: (e: any) => void;
  cartProducts?: any;
  addToCart?: any;
  updateCart?: any;
  value?: any;
  deviceType?: any;
};

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  image,
  weight,
  price,
  salePrice,
  discountInPercent,
  cartProducts,
  addToCart,
  updateCart,
  value,
  currency,
  onChange,
  increment,
  decrement,
  data,
  deviceType,
  onClick,
  ...props
}) => {
  const { addItem, removeItem, getItem, isInCart, items } = useCart();
  const [showProductQuantityExceededMsg, setShowProductQuantityExceededMsg] = useState(false);

  const intl = useIntl();

  const handleAddClick = (e) => {
    const currentQuantity = getItem(data.id)?.quantity;
    const stock = data.product_quantity;
    if (stock <= currentQuantity) {
      e.stopPropagation();
      showProductQuantityExceededMsgFor5Sec()
    } else {
      e.stopPropagation();
      addItem(data);
      if (!isInCart(data.id)) {
        cartAnimation(e);
      }
    }
  };

  const handleRemoveClick = (e) => {
    e.stopPropagation();
    removeItem(data);
  };

  const showProductQuantityExceededMsgFor5Sec = () => {
    setShowProductQuantityExceededMsg(true);
    setTimeout(() => {
      setShowProductQuantityExceededMsg(false);
    }, 1500)
  };
  
  return (
    <ProductCardWrapper onClick={onClick} className="product-card">
      <ProductImageWrapper>
        <Image
          url={image}
          className="product-image"
          style={{ position: 'relative' }}
          alt={title}
        />
        {discountInPercent ? (
          <>
            <DiscountPercent>{discountInPercent}%</DiscountPercent>
          </>
        ) : (
          ''
        )}
        {data.product_quantity == 0 ? (
          <>
            <OutOfStock>{intl.formatMessage({ id: 'outOfStock', defaultMessage: 'Out of stock' })}</OutOfStock>
          </>
        ) : (
          ''
        )}
      </ProductImageWrapper>
      <ProductInfo>
        <h3 className="product-title">{title}</h3>
        <span className="product-weight">{weight}</span>
        <div className="product-meta">
          <div className="productPriceWrapper">
            {discountInPercent ? (
              <span className="discountedPrice">
                {currency}
                {price}
              </span>
            ) : (
              ''
            )}

            <span className="product-price">
              {currency}
              {salePrice ? salePrice : price}
            </span>
          </div>

          { data.product_quantity != 0 ? (!isInCart(data.id) ? (
                <Button
                    className="cart-button"
                    variant="secondary"
                    borderRadius={100}
                    onClick={handleAddClick}
                >
                  <CartIcon/>
                  <ButtonText>
                    <FormattedMessage id="addCartButton" defaultMessage="Cart"/>
                  </ButtonText>
                </Button>
            ) : (
                <Counter
                    value={getItem(data.id).quantity}
                    onDecrement={handleRemoveClick}
                    onIncrement={handleAddClick}
                />
            )
          ) : (
            <Button
              className="cart-button"
              variant="secondary"
              borderRadius={100}
              onClick={(e) => {
                e.preventDefault();
              }}
              disabled
            >
                <CartIcon/>
              <ButtonText>
                <FormattedMessage id="addCartButton" defaultMessage="Cart"/>
              </ButtonText>
            </Button>
            )
          }
        </div>
        { showProductQuantityExceededMsg && (
          <ProductQuantityExceededMsg>
            <FormattedMessage
              id='productStockLimit'
              defaultMessage='There is no more availability of this product'
            />
          </ProductQuantityExceededMsg>
        )}
      </ProductInfo>
    </ProductCardWrapper>
  );
};

export default ProductCard;

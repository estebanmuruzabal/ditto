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
  PriceContainer,
  PriceContainerRow,
  ProductCartBtn,
  ProductCartWrapper,
  ProductPrice,
  ProductPriceWrapper,
  SalePrice,
} from '../product-card.style';
import { useCart } from 'contexts/cart/use-cart';
import { Counter } from 'components/counter/counter';
import { cartAnimation } from 'utils/cart-animation';
import { FormattedMessage, useIntl } from 'react-intl';
import { CartIcon } from 'assets/icons/CartIcon';
import { ProductQuantityExceededMsg } from '../product-card.style';
import CartPopUp from 'features/carts/cart-popup-two';
import { CURRENCY } from 'utils/constant';

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
  const { addItem, removeItem, getItem, isInCart, items, removeRecicledItemHandler, addRecicledItemHandler, removeItemFromCart } = useCart();
  const [showProductQuantityExceededMsg, setShowProductQuantityExceededMsg] = useState(false);
  const hasEcoButton = data.packagePrice > 0;
  const intl = useIntl();

  const handleAddClick = (e) => {
    const currentQuantity = (getItem(data.id)?.quantity || 0) + (getItem(data.id)?.recicledQuantity || 0);
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

  const handleRecicledAddClick = (e) => {
    const currentQuantity = (getItem(data.id)?.quantity || 0) + (getItem(data.id)?.recicledQuantity || 0);
    const stock = data.product_quantity;
    if (stock <= currentQuantity) {
      e.stopPropagation();
      showProductQuantityExceededMsgFor5Sec()
    } else {
      e.stopPropagation();
      addRecicledItemHandler(data);
    }
  };
  const handleRecicledRemoveClick = (e) => {
    const recicledQuantity = getItem(data.id)?.recicledQuantity || 0;
    const quantity = getItem(data.id)?.quantity || 0;
    e.stopPropagation();
    quantity === 0 && recicledQuantity === 1 ? removeItemFromCart(data) : removeRecicledItemHandler(data);
  };

  const handleRemoveClick = (e) => {
    const recicledQuantity = getItem(data.id)?.recicledQuantity || 0;
    const quantity = getItem(data.id)?.quantity || 0;
    e.stopPropagation();
    quantity === 1 && recicledQuantity === 0 ? removeItemFromCart(data) : removeItem(data);
  };

  const showProductQuantityExceededMsgFor5Sec = () => {
    setShowProductQuantityExceededMsg(true);
    setTimeout(() => {
      setShowProductQuantityExceededMsg(false);
    }, 1500)
  };
  
  const PriceContent = () => (
    <>
      {data.product_quantity != 0 ? (<ProductCartWrapper>
        <ProductCartBtn style={{ display: 'flex' }}>
            <PriceContainer>
              <PriceContainerRow>
                <ProductPriceWrapper>
                  {data.discountInPercent ? (<SalePrice>{CURRENCY} {data.sale_price}</SalePrice>) : null}
                  <ProductPrice>
                    {CURRENCY}
                    {finalPrice}
                  </ProductPrice>
                </ProductPriceWrapper>
                { noRecicledQuantityInCart ? (
                  <>
                    <Counter
                        value={getItem(data.id).quantity}
                        onDecrement={handleRemoveClick}
                        onIncrement={handleAddClick}
                    />
                  </>
                ) : (
                  <Button className="cart-button" variant="secondary" borderradius={100} onClick={handleAddClick}>
                    <ButtonText>
                      <FormattedMessage id={"addToCartButton"} defaultMessage="Cart" />
                    </ButtonText>
                  </Button>
                )}
              </PriceContainerRow>
              { hasEcoButton ? (
                <PriceContainerRow>
                  <ProductPriceWrapper>
                    <ProductPrice> {CURRENCY} {Number(finalPrice - data.packagePrice)}</ProductPrice>
                  </ProductPriceWrapper>
                  { reclicledQuantityInCart ? (
                  <>
                    <Counter
                        value={reclicledQuantityInCart}
                        onDecrement={handleRecicledRemoveClick}
                        onIncrement={handleRecicledAddClick}
                    />
                  </>
                ) : (
                  <Button className="cart-button" variant="secondary" borderRadius={100} onClick={handleRecicledAddClick}>
                    <ButtonText>
                      <FormattedMessage id="addEcoToCartButton" defaultMessage="Cart" />
                    </ButtonText>
                  </Button>
                )}
                </PriceContainerRow>
                ) : (null)
              }
            </PriceContainer>
        </ProductCartBtn>
        {/* 
        I TOOK THIS OFF BECAUSE A UI BUG THAT SHOWS ON DESKTOP 3 CARTS POPSUP, DONT KNOW WHY, DONTCARE
        { (noRecicledQuantityInCart || reclicledQuantityInCart) ? (<CartPopUp deviceType={deviceType}/>) : null} */}
      </ProductCartWrapper>
      )
      : (<ProductCartWrapper>
        <ProductPriceWrapper>
            {data.discountInPercent ? (<SalePrice>{CURRENCY} {data.sale_price}</SalePrice>) : null}
            <ProductPrice>
              {CURRENCY}
              {finalPrice}
            </ProductPrice>
          </ProductPriceWrapper>
            {/* <p style={{color: '#ff5e5e'}}>{intl.formatMessage({ id: 'outOfStock', defaultMessage: 'Out of stock' })}</p> */}
        </ProductCartWrapper>)
      }
      { showProductQuantityExceededMsg && (
        <ProductQuantityExceededMsg>
          <FormattedMessage id='productStockLimit' defaultMessage='There is no more availability of this product' />
        </ProductQuantityExceededMsg>
      )}
      { hasEcoButton && data.product_quantity != 0 && (
        <span style={{ display: 'flex', flexDirection: 'row', margin: '0px -10px'}}>
          *<p className="eco-detail">
            <FormattedMessage
              id='ecoDescription'
              defaultMessage="Eco purchase: you pay ${packageDiscount} if you have a package from us to returned."
              values={{ packageDiscount: data.packagePrice }}
            />
          </p>
        </span>
      )}
    </>
  )
  const finalPrice = salePrice ? salePrice : price;
  const noRecicledQuantityInCart = getItem(data.id)?.quantity;
  const reclicledQuantityInCart = getItem(data.id)?.recicledQuantity;
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
          <PriceContent />
      </ProductInfo>
    </ProductCardWrapper>
  );
};

export default ProductCard;

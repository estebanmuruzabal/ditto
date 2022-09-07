import React, { useState } from 'react';
import Image from 'components/image/image';
import { PlusOutline } from 'assets/icons/PlusOutline';
import {
  CardWrapper,
  ImageWrapper,
  InfoWrapper,
  Title,
  Price,
  Unit,
  CartButton,
  Counter,
} from './product-card-five.style';
import { useCart } from 'contexts/cart/use-cart';
import { ProductQuantityExceededMsg } from 'features/carts/cart.style';
import { FormattedMessage } from 'react-intl';

type ProductCardProps = {
  title: string;
  image: any;
  weight: string;
  currency?: string;
  description?: string;
  price: number;
  salePrice?: number;
  discountInPercent?: number;
  data?: any;
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
  const { addItem, removeItem, getItem, isInCart } = useCart();
  const [showProductQuantityExceededMsg, setShowProductQuantityExceededMsg] = useState(false);

  const showProductQuantityExceededMsgFor5Sec = () => {
    setShowProductQuantityExceededMsg(true);
    setTimeout(() => {
      setShowProductQuantityExceededMsg(false);
    }, 1500)
  };

  const handleAddClick = (e) => {
    if (data.quantity < data.product_quantity) {
      e.stopPropagation();
      addItem(data)
    } else {
      showProductQuantityExceededMsgFor5Sec()
    }
  };

  const handleRemoveClick = (e) => {
    e.stopPropagation();
    removeItem(data);
  };

  return (
    <CardWrapper onClick={onClick} className="medicine-card">
      <ImageWrapper className={isInCart(data?.id) && 'overlay'}>
        <Image
          url={image}
          className="product-image"
          style={{ position: 'relative' }}
          alt={title}
        />

        {!isInCart(data?.id) ? (
          <CartButton className="cart-button" onClick={handleAddClick}>
            <PlusOutline />
          </CartButton>
        ) : (
          <Counter
            value={getItem(data?.id).quantity}
            onDecrement={handleRemoveClick}
            onIncrement={handleAddClick}
          />
        )}
      </ImageWrapper>
      { showProductQuantityExceededMsg && (
        <ProductQuantityExceededMsg>
          <FormattedMessage
            id='productStockLimit'
            defaultMessage='There is no more availability of this product'
          />
        </ProductQuantityExceededMsg>
      )}
      <InfoWrapper>
        <Price>
          {currency}
          {price}
        </Price>

        <Title>{title}</Title>
        <Unit>{weight}</Unit>
      </InfoWrapper>
    </CardWrapper>
  );
};

export default ProductCard;

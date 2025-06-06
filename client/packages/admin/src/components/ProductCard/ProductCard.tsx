import React from 'react';
import {
  ProductCardWrapper,
  ProductImageWrapper,
  ProductInfo,
  SaleTag,
  DiscountPercent,
  Image,
  ProductTitle,
  ProductWeight,
  ProductMeta,
  OrderID,
  ProductPriceWrapper,
  ProductPrice,
  DiscountedPrice,
} from './ProductCard.style';
import { useDrawerDispatch } from '../../context/DrawerContext';
import {ActionStyle, IconWrapper} from "../../containers/Types/Types.style";
import {AllIcons} from "../../assets/icons/all-icons";
import ActionWrapper from "../../containers/ProductForm/ActionWrapper";

type ProductCardProps = {
  title: string;
  image: any;
  weight?: string;
  currency?: string;
  description?: string;
  price: number;
  salePrice?: number;
  orderId?: number;
  discountInPercent?: number;
  itemsOffset?: number;
  quantity?: number;
  isOnline?: boolean;
  data: any;
};
const Icon = ({icon, width = '18px', height = '18px'}) => {
  let Component = AllIcons.hasOwnProperty(icon) ? AllIcons[icon] : 'span';
  return <Component width={width} height={height}/>;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  image,
  weight,
  price,
  salePrice,
  discountInPercent,
  currency,
 itemsOffset,
  data,
  orderId,
  quantity,
  isOnline,
  ...props
}) => {
  const dispatch = useDrawerDispatch();

  const openDrawer = React.useCallback(
    () =>
      dispatch({
        type: 'OPEN_DRAWER',
        drawerComponent: 'PRODUCT_UPDATE_FORM',
        data: data,
      }),
    [dispatch, data]
  );
  return (
    <ProductCardWrapper
      {...props}
      className="product-card"
      onClick={openDrawer} style={{marginRight: '10px', cursor: 'pointer'}}
    >
      <ProductImageWrapper>
        <Image url={image} className="product-image" />
        {discountInPercent && discountInPercent !== 0 ? (
          <>
            <SaleTag>Sale</SaleTag>
            <DiscountPercent>{discountInPercent}% Off</DiscountPercent>
          </>
        ) : null}
      </ProductImageWrapper>
      <ProductInfo>
        <ProductTitle>{title}</ProductTitle>
        {/* <ProductWeight>{weight}</ProductWeight> */}
        <ProductMeta>
          <ProductWeight>Stock: {quantity}</ProductWeight>
          <ProductWeight>Visibilidad: {isOnline ? 'Online' : 'Offline'}</ProductWeight>
          <ProductPriceWrapper>
            <ProductWeight>Precio: </ProductWeight>
            <ProductPrice>
              {currency}
              {salePrice && salePrice !== 0 ? salePrice : price}
            </ProductPrice>

            {discountInPercent && discountInPercent !== 0 ? (
              <DiscountedPrice>
                {currency}
                {price}
              </DiscountedPrice>
            ) : null}
          </ProductPriceWrapper>

          <OrderID>{orderId}</OrderID>
        </ProductMeta>

        <div style={{ textAlign: "right", marginTop: "15px"}}>
          <ActionStyle>
            <IconWrapper onClick={openDrawer} style={{marginRight: '10px', cursor: 'pointer'}}>
              <Icon icon="ArrowNext"/>
            </IconWrapper>
          </ActionStyle>

          <ActionWrapper itemsOffset={itemsOffset} itemData={data}/>
        </div>
      </ProductInfo>
    </ProductCardWrapper>
  );
};

export default ProductCard;

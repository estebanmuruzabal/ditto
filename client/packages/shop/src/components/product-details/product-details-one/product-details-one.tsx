import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { Button } from 'components/button/button';
import LogoImage from 'assets/images/logo.svg';
import {
  ProductDetailsWrapper,
  ProductPreview,
  ProductInfo,
  ProductTitlePriceWrapper,
  ProductTitle,
  BackButton,
  ProductWeight,
  ProductDescription,
  ButtonText,
  ProductMeta,
  ProductCartWrapper,
  ProductPriceWrapper,
  PriceContainerRow,
  PriceContainer,
  ProductPrice,
  SalePrice,
  ProductCartBtn,
  MetaSingle,
  MetaItem,
  RelatedItems,
} from './product-details-one.style';
import { LongArrowLeft } from 'assets/icons/LongArrowLeft';
import { CartIcon } from 'assets/icons/CartIcon';
import ReadMore from 'components/truncate/truncate';
import CarouselWithCustomDots from 'components/multi-carousel/multi-carouselV2';
import Products from 'components/product-grid/product-list/product-list';
import { CURRENCY } from 'utils/constant';
import { FormattedMessage, useIntl } from 'react-intl';
import { useLocale } from 'contexts/language/language.provider';
import { useCart } from 'contexts/cart/use-cart';
import { Counter } from 'components/counter/counter';
import { flex } from 'styled-system';
import Footer from 'components/footer';
import { ProductQuantityExceededMsg } from 'components/product-card/product-card.style';
import { HOME_PAGE } from 'site-settings/site-navigation';

const CartPopUp = dynamic(() => import('features/carts/cart-popup-two'), {
  ssr: false,
});


type ProductDetailsProps = {
  product: any;
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const ProductDetails: React.FunctionComponent<ProductDetailsProps> = ({
  product,
  deviceType,
}) => {
  const { isRtl } = useLocale();
  const { addItem, removeItem, removeRecicledItemHandler, addRecicledItemHandler, isInCart, getItem} = useCart();
  const [showProductQuantityExceededMsg, setShowProductQuantityExceededMsg] = useState(false);
  const data = product;
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

  const showProductQuantityExceededMsgFor5Sec = () => {
    setShowProductQuantityExceededMsg(true);
    setTimeout(() => {
      setShowProductQuantityExceededMsg(false);
    }, 1500)
  };
  
  const checkoutStatus = React.useRef(null);
  const handleRemoveClick = (e) => {
    e.stopPropagation();
    removeItem(data);
  };
  const handleRecicledRemoveClick = (e) => {
    e.stopPropagation();
    removeRecicledItemHandler(data);
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }, []);
  const finalPrice = product.sale_price ? product.sale_price : product.price;
  const noRecicledQuantityInCart = getItem(data.id)?.quantity;
  const reclicledQuantityInCart = getItem(data.id)?.recicledQuantity;
  const hasEcoButton = data.packagePrice > 0;
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
                  <Button className="cart-button" variant="secondary" borderRadius={100} onClick={handleAddClick}>
                    <ButtonText>
                      <FormattedMessage id={"addCartButton"} defaultMessage="Cart" />
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
        { (noRecicledQuantityInCart || reclicledQuantityInCart) ? (<CartPopUp deviceType={deviceType}/>) : null}
      </ProductCartWrapper>
      )
      : (<ProductCartWrapper>
            <p style={{color: '#ff5e5e', fontWeight: 'bold'}}>{intl.formatMessage({ id: 'outOfStock', defaultMessage: 'Out of stock' })}</p>
        </ProductCartWrapper>)
      }
      { showProductQuantityExceededMsg && (
        <ProductQuantityExceededMsg style={{textAlign: 'left'}}>
          <FormattedMessage id='productStockLimit' defaultMessage='There is no more availability of this product' />
        </ProductQuantityExceededMsg>
      )}
      { hasEcoButton && data.product_quantity != 0 && (
        <span style={{ display: 'flex', flexDirection: 'row', margin: '0px 10px'}}>
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
  const hasBackRoute = Object.keys(Router.router?.sdc).length !== 0;
  console.log(hasBackRoute)
  return (
    <>
      <ProductDetailsWrapper className="product-card" dir="ltr">
        {!isRtl && (
          <ProductPreview>
            <BackButton>
              <Button
                type="button"
                size="small"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #f1f1f1',
                  color: '#77798c',
                }}
                onClick={() => hasBackRoute ? Router.back() : Router.push(HOME_PAGE)}
              >
                <span style={{ marginRight: "5px" }}>
                <LongArrowLeft />
                </span>
                <FormattedMessage id="backBtn" defaultMessage="Back" />
              </Button>
            </BackButton>

            <CarouselWithCustomDots
              items={product.images}
              deviceType={deviceType}
            />
          </ProductPreview>
        )}

        <ProductInfo dir={isRtl ? 'rtl' : 'ltr'}>
          <ProductTitlePriceWrapper>
            <ProductTitle>{product.name}</ProductTitle>
            <PriceContent />
          </ProductTitlePriceWrapper>

          {/* <ProductWeight>{product.unit}</ProductWeight> */}
          <ProductDescription>
            {product.description?.includes('<p') ? (
              <div
                className="html-content"
                dangerouslySetInnerHTML={{
                  __html: product.description,
                }}
              />
            ) : (
              <ReadMore character={600}>{product.description}</ReadMore>
            )}
          </ProductDescription>

          

          <ProductMeta>
            <MetaSingle>
              {product?.categories?.map((item: any) => (
                <Link
                  href={`/${product.type.slug.toLowerCase()}?category=${item.slug}`}
                  key={`link-${item.id}`}
                >
                  {
                    <a>
                      <MetaItem>{item.name}</MetaItem>
                    </a>
                  }
                </Link>
              ))}
            </MetaSingle>
          </ProductMeta>
        </ProductInfo>

        {isRtl && (
          <ProductPreview>
            <BackButton>
              <Button
                title="Back"
                intlButtonId="backBtn"
                iconPosition="left"
                size="small"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #f1f1f1',
                  color: '#77798c',
                }}
                icon={<LongArrowLeft  />}
                onClick={Router.back}
              />
            </BackButton>

            <CarouselWithCustomDots
              items={product.images}
              deviceType={deviceType}
            />
          </ProductPreview>
        )}
      </ProductDetailsWrapper>

      <RelatedItems>
        <h2>
          <FormattedMessage
            id="intlReletedItems"
            defaultMessage="Related Items"
          />
        </h2>
        <Products
          /* type={product.type.toLowerCase()} */
          deviceType={deviceType}
          loadMore={false}
          fetchLimit={10}
        />
      </RelatedItems>

      {/* <Footer logo={LogoImage} /> */}
    </>
  );
};

export default ProductDetails;

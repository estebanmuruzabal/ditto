import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import css from '@styled-system/css';

const StyledBox = styled.div(
  css({
    py: [30, 50],
    px: ['1rem', 0],
  }),
  {
    width: '100%',
  }
);

export const ProductCardWrapper = styled.div(
  css({
    // height: '100%',
    width: '100%',
    backgroundColor: 'white',
    position: 'relative',
    fontFamily: 'inherit',
    borderRadius: 'base',
    cursor: 'pointer',
  })
);

export const ProductQuantityExceededMsg = styled.div`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: 15px;
  line-height: 13px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: #636579;
  display: block;
  width: 100%;
  padding-bottom: 10px;
  text-align: center;
`;

export const ProductImageWrapper = styled.div`
  height: 240px;
  padding: 5px;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100%;
    max-height: 100%;
    display: inline-block;
  }
  @media (max-width: 767px) {
    height: 145px;
  }
`;

export const SaleTag = styled.span`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.white', '#ffffff')};
  background-color: ${themeGet('colors.yellow.regular', '#FFAD5E')};
  padding: 0 10px;
  line-height: 24px;
  border-radius: ${themeGet('radii.medium', '12px')};
  display: inline-block;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const DiscountPercent = styled.span`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.white', '#ffffff')};
  line-height: 24px;
  background-color: ${themeGet('colors.yellow.regular', '#FFAD5E')};
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
  display: inline-block;
  position: absolute;
  top: 15px;
  right: 15px;
  border-radius: ${themeGet('radii.medium', '12px')};
  z-index: 2;
`;

export const OutOfStock = styled.span`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.white', '#ffffff')};
  line-height: 24px;
  background-color: #ff5e5e;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
  display: inline-block;
  position: absolute;
  top: 15px;
  left: 15px;
  border-radius: ${themeGet('radii.medium', '12px')};
  z-index: 2;
`;

export const ProductInfo = styled.div`
  padding: 10px 18px 20px;
  @media (max-width: 767px) {
    padding: 15px 20px;
    min-height: 123px;
  }
  .eco-detail {
    font-family: ${themeGet('fonts.body', 'sans-serif')};
    font-size: 12px;
    line-height: 13px;
    font-weight: ${themeGet('fontWeights.regular', '700')};
    color: #636579;
  }
  .product-title {
    font-family: ${themeGet('fonts.body', 'sans-serif')};
    font-size: ${themeGet('fontSizes.base', '15')}px;
    font-weight: ${themeGet('fontWeights.bold', '700')};
    color: ${themeGet('colors.text.bold', '#0D1136')};
    margin: 0 0 7px 0;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    // white-space: nowrap;
    min-height: 45px;
    @media (max-width: 767px) {
      font-size: 14px;
      min-height: 63px;
      margin-left: -12px;
      margin-right: -12px;
    }
  }
  .product-weight {
    font-family: ${themeGet('fonts.body', 'sans-serif')};
    font-size: ${themeGet('fontSizes.sm', '13')}px;
    font-weight: ${themeGet('fontWeights.regular', '400')};
    color: ${themeGet('colors.text.regular', '#77798c')};
    @media (max-width: 767px) {
      font-size: ${themeGet('fontSizes.xs', '12')}px;
    }
  }
  .product-meta {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 767px) {
      min-height: 32px;
    }
    .productPriceWrapper {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .product-price {
        font-family: ${themeGet('fonts.body', 'sans-serif')};
        font-size: ${themeGet('fontSizes.base', '15')}px;
        font-weight: ${themeGet('fontWeights.bold', '700')};
        color: ${themeGet('colors.primary.regular', '#009E7F')};
        @media (max-width: 767px) {
          font-size: calc(${themeGet('fontSizes.base', '15')}px - 1px);
        }
      }
      .discountedPrice {
        font-family: ${themeGet('fonts.body', 'sans-serif')};
        font-size: ${themeGet('fontSizes.sm', '13')}px;
        font-weight: ${themeGet('fontWeights.regular', '400')};
        color: ${themeGet('colors.yellow.hover', '#FBB979')};
        font-style: italic;
        padding: 0 5px;
        position: relative;
        overflow: hidden;
        position: absolute;
        top: -20px;
        left: -4px;
        &:before {
          content: '';
          width: 100%;
          height: 1px;
          display: inline-block;
          background-color: ${themeGet('colors.yellow.hover', '#FBB979')};
          position: absolute;
          top: 50%;
          left: 0;
        }
      }
    }
    .cart-button {
      border: 2px solid ${themeGet('colors.gray.200', '#f7f7f7')};
      border-radius: ${themeGet('radii.big', '18px')};
      height: 36px;
      padding-left: 17px;
      padding-right: 17px;
      font-size: ${themeGet('fontSizes.sm', '13')}px;
      font-weight: ${themeGet('fontWeights.bold', '700')};
      min-width: 140px;
      @media (max-width: 767px) {
        width: 36px;
        height: 36px;
        padding: 0;
        border-radius: 50%;
        min-width: 0px;
      }
      .btn-text {
        padding: 0 0 0 6px;
        @media (max-width: 767px) {
          display: none;
        }
      }
      &:hover {
        color: ${themeGet('colors.white', '#ffffff')};
        background-color: ${themeGet('colors.primary.regular', '#009e7f')};
        border-color: ${themeGet('colors.primary.regular', '#009e7f')};
      }
      svg {
        fill: currentColor;
        @media (max-width: 767px) {
          margin: 0;
        }
      }
    }
    @media (max-width: 767px) {
      .quantity {
        width: 32px;
        height: 90px;
        display: block;
        flex-shrink: 0;
        position: absolute;
        bottom: 15px;
        right: 15px;
        z-index: 1;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.16);
      }
      button {
        width: 100%;
        height: 27px;
      }
      .incBtn {
        top: 0;
        justify-content: center;
      }
      .decBtn {
        top: auto;
        bottom: 0;
        justify-content: center;
      }
      input[type='number'] {
        left: 0;
        font-size: calc(${themeGet('fontSizes.base', '15')}px - 1px);
        height: calc(100% - 54px);
        position: absolute;
        top: 27px;
        width: 100%;
        color: ${themeGet('colors.white', '#ffffff')};
      }
    }
  }
`;


export const BookImageWrapper = styled.div`
  height: 275px;
  padding: 0;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  img {
    max-width: 100%;
    max-height: 100%;
    display: inline-block;
  }
  @media (max-width: 767px) {
    height: 215px;
  }
  ${DiscountPercent} {
    top: 0;
    right: 0;
  }
`;

export const BookInfo = styled.div`
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 767px) {
    padding: 15px 0px 0px;
  }
`;

export const ProductName = styled.span`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  margin: 0 0 7px 0;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  display: block;
  &:only-child {
    margin: 0;
  }
  @media (max-width: 767px) {
    font-size: calc(${themeGet('fontSizes.base', '15')}px - 1px);
    margin: 0 0 5px 0;
  }
`;

export const AuthorInfo = styled.span`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.regular', '#77798c')};
  @media (max-width: 767px) {
    font-size: ${themeGet('fontSizes.sm', '13')}px;
  }
`;

// export const AddCartBox = styled.div`
//   width: calc(100% - 40px);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: 20px;
//   border-radius: 6px;
//   background-color: #ffffff;
//   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.16);
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   opacity: 0;
//   transition: all 0.3s;

//   .cart-button {
//     border-radius: 18px;
//     height: 36px;
//     padding-left: 17px;
//     padding-right: 17px;
//     font-size: ${themeGet('fontSizes.1', '13')} px;
//     font-weight: ${themeGet('fontWeights.bold', '700')};
//     @media (max-width: 767px) {
//       width: 32px;
//       height: 32px;
//       padding: 0;
//       border-radius: 50%;
//     }
//     .btn-text {
//       padding: 0 0 0 6px;
//       @media (max-width: 767px) {
//         display: none;
//       }
//     }
//     &:hover {
//       color: #fff;
//       background-color: ${themeGet('colors.primary.regular', '#009e7f')};
//       border-color: #009e7f;
//     }
//     svg {
//       fill: currentColor;
//     }
//   }
// `;

export const PriceWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.primary.regular', '#009E7F')};
  @media (max-width: 767px) {
    font-size: calc(${themeGet('fontSizes.base', '15')}px - 1px);
  }
`;

export const DiscountedPrice = styled.span`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.sm', '13')} px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.yellow.regular', '#FFAD5E')};
  font-style: italic;
  padding: 0 5px;
  position: relative;
  overflow: hidden;
  margin-bottom: 5px;
  margin-left: -4px;
  z-index: 2;
  &:before {
    content: '';
    width: 100%;
    height: 1px;
    display: inline-block;
    background-color: ${themeGet('colors.yellow.regular', '#FFAD5E')};
    position: absolute;
    top: 50%;
    left: 0;
  }
`;

export const BookCardWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 30px;
  background-color: ${themeGet('colors.white', '#ffffff')};
  position: relative;
  font-family: ${themeGet('fonts.body', 'Lato')};
  border-radius: ${themeGet('radii.base', '6px')};
  cursor: pointer;
  @media (max-width: 767px) {
    padding: 15px;
  }
`;

export const FoodCardWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 0;
  background-color: ${themeGet('colors.white', '#ffffff')};
  position: relative;
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  border-radius: ${themeGet('radii.base', '6px')};
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;

export const FoodImageWrapper = styled.div`
  height: 230px;
  padding: 0;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    display: flex;
    background-color: rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  @media (max-width: 767px) {
    height: 145px;
  }
`;

export const ProductMeta = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DeliveryOpt = styled.span`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  white-space: nowrap;
`;

export const Category = styled.span`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.bold', '400')};
  color: ${themeGet('colors.text.regular', '#77798c')};
`;

export const Duration = styled.span`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.white', '#ffffff')};
  background-color: ${themeGet('colors.primary.regular', '#009E7F')};
  border-radius: ${themeGet('radii.big', '18px')};
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 20px;
  padding-right: 20px;
  height: 36px;
  width: auto;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;


///////
export const ProductDetailsWrapper = styled.div`
  background-color: ${themeGet('colors.white', '#ffffff')};
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
`;

export const ProductPreview = styled.div`
  width: 50%;
  padding: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    display: block;
    max-width: 100%;
    max-height: 450px;
    height: auto;
  }

  @media (max-width: 990px) {
    padding: 30px 40px 60px;
  }
  @media (max-width: 767px) {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 30px 25px 60px;
    order: 0;
  }
`;

export const BackButton = styled.div`
  position: absolute;
  top: 60px;
  left: 60px;
  z-index: 999;

  @media (max-width: 990px) {
    top: 20px;
    left: 25px;
  }
  .reusecore__button {
    font-family: ${themeGet('fonts.body', 'sans-serif')};
    font-size: ${themeGet('fontSizes.sm', '13')}px;
    font-weight: ${themeGet('fontWeights.bold', '700')};
    color: ${themeGet('colors.text.regular', '#77798C')};
    height: 30px;
    .btn-icon {
      margin-right: 5px;
    }
    .btn-text {
      padding: 0;
    }
  }
`;

export const ProductTitlePriceWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 10px;
  flex-direction: column;
`;

export const ProductTitle = styled.h1`
  font-family: ${themeGet('fonts.heading', 'sans-serif')};
  font-size: ${themeGet('fontSizes.lg', '21')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  line-height: 1.5;
  display: flex;

  @media (max-width: 767px) {
    word-break: break-word;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PriceContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  // min-width: 210px;
  justify-content: space-between;
  @media (max-width: 767px) {
    min-width: 0px;
    justify-content: left;
    margin-left: -12px;
    margin-right: -12px;
  }
`;

export const ProductPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  // margin-left: 25px;
  // margin-right: 15px;
  line-height: 31px;
  min-width: 45px;
  padding-left: 15px;
  @media (max-width: 767px) {
    // margin-left: 0px;
    min-width: 50px;
  }
`;

export const ProductPrice = styled.div`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: calc(${themeGet('fontSizes.base', '15')}px + 1px);
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.primary.regular', '#009E7F')};
`;

export const SalePrice = styled.span`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.yellow.regular', '#FFAD5E')};
  font-style: italic;
  padding: 0 5px;
  overflow: hidden;
  position: relative;
  margin-right: 10px;

  &:before {
    content: '';
    width: 100%;
    height: 1px;
    display: inline-block;
    background-color: ${themeGet('colors.yellow.regular', '#FFAD5E')};
    position: absolute;
    top: 50%;
    left: 0;
  }
`;

export const ProductWeight = styled.div`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.regular', '#77798C')};
`;

export const ProductDescription = styled.p`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.medium', '#424561')};
  line-height: 2;
  margin-top: 30px;
`;

export const ProductCartWrapper = styled.div`
  display: flex;
  // margin-top: 20px;
  // flex-direction: column,
  alignItems: 'center',
  flexDirection: 'row',
  @media (max-width: 767px) {
    margin-top: 40px;
  }
`;

export const ProductCartBtn = styled.div`
  .cart-button {
    border-radius: 20px;
    padding-left: 20px;
    padding-right: 20px;
    min-width: 140px;
    
    @media (max-width: 767px) {
      min-width: 0px;
      padding-left: 20px;
      padding-right: 20px;
    }

    .btn-icon {
      margin-right: 5px;

      svg {
        width: 14px;
        height: auto;
        @media (max-width: 990px) {
          width: 14px;
        }
      }
    }
  }
  .quantity {
    width: 115px;
    height: 38px;
  }
`;

export const ButtonText = styled.span`
  /* @media (max-width: 767px) {
    display: none;
  } */
`;

export const MetaSingle = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
`;

export const MetaItem = styled.span`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: ${themeGet('colors.gray.200', '#f7f7f7')};
  padding: 0 15px;
  border-radius: ${themeGet('radii.base', '6px')};
  cursor: pointer;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RelatedItems = styled.div`
  margin-top: 70px;
  margin-left: 55px;
  margin-right: 55px;

  @media (max-width: 990px) {
    margin-top: 50px;
    margin-left: 15px;
    margin-right: 15px;
  }
  > h2 {
    font-family: ${themeGet('fonts.heading', 'sans-serif')};
    font-size: ${themeGet('fontSizes.lg', '21')}px;
    font-weight: ${themeGet('fontWeights.bold', '700')};
    color: ${themeGet('colors.text.bold', '#0D1136')};
    line-height: 1.2;
    margin-bottom: 30px;
    @media (max-width: 767px) {
      margin-left: 0;
      margin-bottom: 25px;
    }
  }

  > div > div {
    flex: 0 0 20%;
    max-width: 20%;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 30px;

    @media (max-width: 1500px) {
      flex: 0 0 20%;
      max-width: 20%;
    }
    @media (max-width: 1400px) {
      flex: 0 0 25%;
      max-width: 25%;
    }
    @media (max-width: 1060px) {
      flex: 0 0 33.3333333%;
      max-width: 33.3333333%;
    }
    @media (max-width: 1199px) and (min-width: 991px) {
      padding-left: 10px;
      padding-right: 10px;
    }
    @media (max-width: 768px) {
      padding-left: 7.5px;
      padding-right: 7.5px;
      margin-bottom: 15px;
    }
    @media (max-width: 767px) {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
`;

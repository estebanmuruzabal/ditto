exports.ids = [28];
exports.modules = {

/***/ "5JaT":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAADwCAAAAADUNdWkAAADYklEQVR42u3Z7ZKiMBCF4b7/mw1EUfkwrmOtuzoiEKEbE97ze2qqfPS0TSsX8hCBAA444IADDjjggAMOOOCAAw444IADDjjgIHDAAQcccMABBxxwwAEHHHDAAQcccMABBxwEDjjggAMOOOCAAw444IADDjjggAMOOOCAg8ABBxxwwAEHHHDAAQcccMABBxxwwAEHHHAQOOCAA44v5WjbNsBxSzh59xN/CHBcmsLdUxw3z3Fwj9mHbXM8a1w9Ns3RuN85bpmjfOEownY5aveaw3Y59j0c5XY5XF8CHI9pt8oRFuBo+XQ8pCuqfDiKubMjXB936mw4qh4NH/MPdusNGwWOpofjFL3iF+dctlI/ayu9b3E+ZMLRvnBETILu3+ipMuF4WdMjXlgoVn3w07l31B8/sDwVrcmE49L+f1llzIt6/lYqukw4rh+Q6vax39dzWmY+TlV/WIh9c19n8C4njsici9UPJV/EEXzfdl9nyTFhCFS9z36249SIox1/aDm6/pjeWW04Qjm6UzXuXXx2HD9PZd3E3fw1VWYc7eib3D9G7cep2FRl7BFk5wbT5sRx/42yG/2LdzE7fohRVQbrUruxWG3rYlWVgboMjVHjcSpmVXlblzBBw+r4IWZVeVsX7yalyYEjlGPvcTVNw2ZbF8Oq9NaldlNjMU7FsCp9dWnd9OxS5wjlyEg8FxEcBscPMa3K77oE76JSJ83Rjj2gVnEa+uNUbKvyXJeji4328UOMq/JYl8bFxyfL0Y28pK74gEN5W1fk8MMLd+wYNRmnehxDg6EbP3Gsc/wQ86r8rcvhUw3V44fYV+VWl9p9HsVtXVaoyu0tnsGhOE5lharMzzExDq/LoXb8kFWqMjta27okWBXFcSopVkXv+CEpVkXv+CFJVkVtW5c0q6I1TiXRqigdPyTVqugcPyTVquhs65JsVVTGqaRbFY3jhyRcFYXjh6RcleW3dUm6KouPU0m6KosfPyTtqix9/FiUY6WcvvabJfXAAQcccMABBxxwwAEHHHDAAQcccMABBxxwEDjggAMOOOCAAw444IADDjjggAMOOOCAAw4CBxxwwAEHHHDAAQcccMABBxxwwAEHHHDAQeCAAw444IADDjjggAMOOOCAAw444IADDjgIHHDAAQcci+UPkso6r/spGNEAAAAASUVORK5CYII="

/***/ }),

/***/ "ZhUJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ProductCardWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ProductImageWrapper; });
/* unused harmony export SaleTag */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DiscountPercent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return OutOfStock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ProductInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ButtonText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BookImageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return BookInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return ProductName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorInfo; });
/* unused harmony export PriceWrapper */
/* unused harmony export Price */
/* unused harmony export DiscountedPrice */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BookCardWrapper; });
/* unused harmony export FoodCardWrapper */
/* unused harmony export FoodImageWrapper */
/* unused harmony export ProductMeta */
/* unused harmony export DeliveryOpt */
/* unused harmony export Category */
/* unused harmony export Duration */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/JeY");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ExBD");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_2__);



const StyledBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "product-cardstyle__StyledBox",
  componentId: "sc-1tgwaiw-0"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_2___default()({
  py: [30, 50],
  px: ['1rem', 0]
}), {
  width: '100%'
});
const ProductCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "product-cardstyle__ProductCardWrapper",
  componentId: "sc-1tgwaiw-1"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_2___default()({
  height: '100%',
  width: '100%',
  backgroundColor: 'white',
  position: 'relative',
  fontFamily: 'inherit',
  borderRadius: 'base',
  cursor: 'pointer'
}));
const ProductImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "product-cardstyle__ProductImageWrapper",
  componentId: "sc-1tgwaiw-2"
})(["height:240px;padding:5px;position:relative;text-align:center;display:flex;align-items:center;justify-content:center;img{max-width:100%;max-height:100%;display:inline-block;}@media (max-width:767px){height:145px;}"]);
const SaleTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "product-cardstyle__SaleTag",
  componentId: "sc-1tgwaiw-3"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";background-color:", ";padding:0 10px;line-height:24px;border-radius:", ";display:inline-block;position:absolute;top:10px;right:10px;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.yellow.regular', '#FFAD5E'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.medium', '12px'));
const DiscountPercent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "product-cardstyle__DiscountPercent",
  componentId: "sc-1tgwaiw-4"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:24px;background-color:", ";padding-left:10px;padding-right:10px;position:relative;display:inline-block;position:absolute;top:15px;right:15px;border-radius:", ";z-index:2;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.yellow.regular', '#FFAD5E'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.medium', '12px'));
const OutOfStock = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "product-cardstyle__OutOfStock",
  componentId: "sc-1tgwaiw-5"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:24px;background-color:#ff5e5e;padding-left:10px;padding-right:10px;position:relative;display:inline-block;position:absolute;top:15px;left:15px;border-radius:", ";z-index:2;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.medium', '12px'));
const ProductInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "product-cardstyle__ProductInfo",
  componentId: "sc-1tgwaiw-6"
})(["padding:20px 25px 30px;@media (max-width:767px){padding:15px 20px;min-height:123px;}.product-title{font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin:0 0 7px 0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;@media (max-width:767px){font-size:14px;margin:0 0 5px 0;}}.product-weight{font-family:", ";font-size:", "px;font-weight:", ";color:", ";@media (max-width:767px){font-size:", "px;}}.product-meta{margin-top:30px;display:flex;align-items:center;justify-content:space-between;@media (max-width:767px){min-height:32px;}.productPriceWrapper{position:relative;display:flex;flex-direction:column;align-items:flex-start;.product-price{font-family:", ";font-size:", "px;font-weight:", ";color:", ";@media (max-width:767px){font-size:calc(", "px - 1px);}}.discountedPrice{font-family:", ";font-size:", "px;font-weight:", ";color:", ";font-style:italic;padding:0 5px;position:relative;overflow:hidden;position:absolute;top:-20px;left:-4px;&:before{content:'';width:100%;height:1px;display:inline-block;background-color:", ";position:absolute;top:50%;left:0;}}}.cart-button{border:2px solid ", ";border-radius:", ";height:36px;padding-left:17px;padding-right:17px;font-size:", "px;font-weight:", ";@media (max-width:767px){width:36px;height:36px;padding:0;border-radius:50%;}.btn-text{padding:0 0 0 6px;@media (max-width:767px){display:none;}}&:hover{color:", ";background-color:", ";border-color:", ";}svg{fill:currentColor;@media (max-width:767px){margin:0;}}}@media (max-width:767px){.quantity{width:32px;height:90px;display:block;flex-shrink:0;position:absolute;bottom:15px;right:15px;z-index:1;box-shadow:0 10px 20px rgba(0,0,0,0.16);}button{width:100%;height:27px;}.incBtn{top:0;justify-content:center;}.decBtn{top:auto;bottom:0;justify-content:center;}input[type='number']{left:0;font-size:calc(", "px - 1px);height:calc(100% - 54px);position:absolute;top:27px;width:100%;color:", ";}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798c'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.xs', '12'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009E7F'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.yellow.hover', '#FBB979'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.yellow.hover', '#FBB979'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.200', '#f7f7f7'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.big', '18px'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'));
const ButtonText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "product-cardstyle__ButtonText",
  componentId: "sc-1tgwaiw-7"
})(["@media (max-width:767px){display:none;}"]);
const BookImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "product-cardstyle__BookImageWrapper",
  componentId: "sc-1tgwaiw-8"
})(["height:275px;padding:0;position:relative;text-align:center;display:flex;align-items:center;justify-content:center;margin-bottom:15px;img{max-width:100%;max-height:100%;display:inline-block;}@media (max-width:767px){height:215px;}", "{top:0;right:0;}"], DiscountPercent);
const BookInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "product-cardstyle__BookInfo",
  componentId: "sc-1tgwaiw-9"
})(["padding:0;width:100%;display:flex;flex-direction:column;align-items:center;@media (max-width:767px){padding:15px 0px 0px;}"]);
const ProductName = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "product-cardstyle__ProductName",
  componentId: "sc-1tgwaiw-10"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin:0 0 7px 0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:center;display:block;&:only-child{margin:0;}@media (max-width:767px){font-size:calc(", "px - 1px);margin:0 0 5px 0;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'));
const AuthorInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "product-cardstyle__AuthorInfo",
  componentId: "sc-1tgwaiw-11"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";@media (max-width:767px){font-size:", "px;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798c'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13')); // export const AddCartBox = styled.div`
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

const PriceWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "product-cardstyle__PriceWrapper",
  componentId: "sc-1tgwaiw-12"
})(["position:relative;display:flex;flex-direction:column;align-items:flex-start;margin-bottom:15px;"]);
const Price = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "product-cardstyle__Price",
  componentId: "sc-1tgwaiw-13"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";@media (max-width:767px){font-size:calc(", "px - 1px);}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009E7F'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'));
const DiscountedPrice = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "product-cardstyle__DiscountedPrice",
  componentId: "sc-1tgwaiw-14"
})(["font-family:", ";font-size:", " px;font-weight:", ";color:", ";font-style:italic;padding:0 5px;position:relative;overflow:hidden;margin-bottom:5px;margin-left:-4px;z-index:2;&:before{content:'';width:100%;height:1px;display:inline-block;background-color:", ";position:absolute;top:50%;left:0;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.yellow.regular', '#FFAD5E'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.yellow.regular', '#FFAD5E'));
const BookCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "product-cardstyle__BookCardWrapper",
  componentId: "sc-1tgwaiw-15"
})(["height:100%;width:100%;padding:30px;background-color:", ";position:relative;font-family:", ";border-radius:", ";cursor:pointer;@media (max-width:767px){padding:15px;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.base', '6px'));
const FoodCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "product-cardstyle__FoodCardWrapper",
  componentId: "sc-1tgwaiw-16"
})(["height:100%;width:100%;padding:0;background-color:", ";position:relative;font-family:", ";border-radius:", ";overflow:hidden;cursor:pointer;display:flex;flex-direction:column;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.base', '6px'));
const FoodImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "product-cardstyle__FoodImageWrapper",
  componentId: "sc-1tgwaiw-17"
})(["height:230px;padding:0;position:relative;text-align:center;display:flex;align-items:center;justify-content:center;flex-shrink:0;img{width:100%;height:100%;object-fit:cover;}&:after{content:'';width:100%;height:100%;display:flex;background-color:rgba(0,0,0,0.1);position:absolute;top:0;left:0;z-index:1;}@media (max-width:767px){height:145px;}"]);
const ProductMeta = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "product-cardstyle__ProductMeta",
  componentId: "sc-1tgwaiw-18"
})(["margin-top:20px;display:flex;align-items:center;justify-content:space-between;"]);
const DeliveryOpt = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "product-cardstyle__DeliveryOpt",
  componentId: "sc-1tgwaiw-19"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";white-space:nowrap;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'));
const Category = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "product-cardstyle__Category",
  componentId: "sc-1tgwaiw-20"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798c'));
const Duration = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "product-cardstyle__Duration",
  componentId: "sc-1tgwaiw-21"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";background-color:", ";border-radius:", ";padding-top:0;padding-bottom:0;padding-left:20px;padding-right:20px;height:36px;width:auto;border:0;display:flex;align-items:center;justify-content:center;white-space:nowrap;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009E7F'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.big', '18px'));

/***/ }),

/***/ "dFr0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Image; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bYH+");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _product_placeholder_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5JaT");
/* harmony import */ var _product_placeholder_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_product_placeholder_png__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Placeholder = () => __jsx("img", {
  src: _product_placeholder_png__WEBPACK_IMPORTED_MODULE_2___default.a,
  alt: "product img loader"
});

function Image({
  url,
  alt = 'placeholder',
  unloader,
  loader,
  className,
  style
}) {
  return __jsx(react_image__WEBPACK_IMPORTED_MODULE_1__["Img"], {
    draggable: false,
    style: style,
    src: url,
    alt: alt,
    loader: __jsx(Placeholder, null),
    unloader: __jsx(Placeholder, null),
    className: className
  });
}

/***/ }),

/***/ "qr0j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_image_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dFr0");
/* harmony import */ var _product_card_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ZhUJ");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// product card for furniture




const ProductCard = ({
  title,
  image,
  discountInPercent,
  onClick
}) => {
  return __jsx(_product_card_style__WEBPACK_IMPORTED_MODULE_2__[/* ProductCardWrapper */ "h"], {
    onClick: onClick,
    className: "furniture-card"
  }, __jsx(_product_card_style__WEBPACK_IMPORTED_MODULE_2__[/* ProductImageWrapper */ "i"], null, __jsx(components_image_image__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    url: image,
    className: "product-image",
    style: {
      position: 'relative'
    },
    alt: title
  }), discountInPercent ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_product_card_style__WEBPACK_IMPORTED_MODULE_2__[/* DiscountPercent */ "f"], null, discountInPercent, "%")) : ''), __jsx(_product_card_style__WEBPACK_IMPORTED_MODULE_2__[/* ProductInfo */ "j"], null, __jsx(_product_card_style__WEBPACK_IMPORTED_MODULE_2__[/* ProductName */ "k"], null, title)));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductCard);

/***/ })

};;
// export const cartItemsTotalPrice = (items, { discountInPercent = 0 } = {}) => {


function getDiscountAmount(totalPrice, coupon) {
  let discount = (totalPrice * Number(coupon.percentage)) / 100;
  discount = discount >= coupon?.maximum_discount_amount ? coupon?.maximum_discount_amount : discount;
  return discount;
}

function getTotalItemPrice(items) {


  const tot = items.reduce((total, item) => {
    const { price, salePrice, quantity = 0, recicledQuantity = 0, packagePrice } = item;

    const recicledPrice = price - packagePrice;
    const displayPrice = salePrice || price;
    const nonRecicledTotalPrice = displayPrice * quantity;
    const recicledTotalPrice = recicledPrice * recicledQuantity;
    const totalPrice = nonRecicledTotalPrice + recicledTotalPrice
    return total + totalPrice;
  }, 0);

  return tot;
}

export const cartItemsTotalPrice = (items, coupon = null, deliveryCharge = 0) => {
  if (items === null || items.length === 0) return 0;

  const itemCost = getTotalItemPrice(items);

  let discount = coupon ? getDiscountAmount(itemCost, coupon) : 0;

  return itemCost - discount + deliveryCharge;
};

export const cartDiscountAmount = (items, coupon = null) => {
  if (items === null || items.length === 0) return 0;

  const itemCost = getTotalItemPrice(items);

  return coupon ? getDiscountAmount(itemCost, coupon) : 0;
};


// cartItems, cartItemToAdd
const addItemToCart = (state, action) => {
  const existingCartItemIndex = state.items.findIndex(
    (item) => item.id === action.payload.id
  );

  if (existingCartItemIndex > -1) {
    const newState = [...state.items];
    newState[existingCartItemIndex].quantity = newState[existingCartItemIndex].quantity || 0;
    newState[existingCartItemIndex].quantity += action.payload.quantity;
    return newState;
  }
  return [...state.items, action.payload];
};

const addRecicledItemToCart = (state, action) => {
  const existingCartItemIndex = state.items.findIndex(
    (item) => item.id === action.payload.id
  );

  if (existingCartItemIndex > -1) {
    const newState = [...state.items];
    newState[existingCartItemIndex].recicledQuantity = newState[existingCartItemIndex].recicledQuantity || 0;
    newState[existingCartItemIndex].recicledQuantity += action.payload.recicledQuantity;
    return newState;
  }
  return [...state.items, action.payload];
};

// cartItems, cartItemToRemove
const removeRecicledItemFromCart = (state, action) => {
  return state.items.reduce((acc, item) => {
    if (item.id === action.payload.id) {
      const newQuantity = item.recicledQuantity - action.payload.recicledQuantity;

      return [...acc, { ...item, recicledQuantity: newQuantity }];
      // return newQuantity > 0
      //   ? [...acc, { ...item, recicledQuantity: newQuantity }]
      //   : [...acc]x;
    }
    return [...acc, item];
  }, []);
};

const removeItemFromCart = (state, action) => {
  return state.items.reduce((acc, item) => {
    if (item.id === action.payload.id) {
      const newQuantity = item.quantity - action.payload.quantity;

      return [...acc, { ...item, quantity: newQuantity }];
      // return newQuantity > 0
      //   ? [...acc, { ...item, quantity: newQuantity }]
      //   : [...acc];
    }
    return [...acc, item];
  }, []);
};

const clearItemFromCart = (state, action) => {
  return state.items.filter((item) => item.id !== action.payload.id);
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'REHYDRATE':
      return { ...state, ...action.payload };
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };
    case 'ADD_ITEM':
      return { ...state, items: addItemToCart(state, action) };
    case 'ADD_ITEM_RECICLED':
      return { ...state, items: addRecicledItemToCart(state, action) };
    case 'REMOVE_ITEM_RECICLED':
      return { ...state, items: removeRecicledItemFromCart(state, action) };
    case 'REMOVE_ITEM':
      return { ...state, items: removeItemFromCart(state, action) };
    case 'CLEAR_ITEM_FROM_CART':
      return { ...state, items: clearItemFromCart(state, action) };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'APPLY_COUPON':
      return { ...state, coupon: action.payload };
    case 'REMOVE_COUPON':
      return { ...state, coupon: null };
    case 'TOGGLE_RESTAURANT':
      return { ...state, isRestaurant: !state.isRestaurant };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};


import { initializeApollo } from 'utils/apollo';
import { GET_TYPE } from 'graphql/query/type.query';
import { Locales } from 'utils/constant';

export const HOME_PAGE = '/';
export const WORK_PAGE = '/work';
export const GROCERY_PAGE = '/grocery';
export const MAKEUP_PAGE = '/makeup';
export const CLOTHING_PAGE = '/clothing';
export const BAGS_PAGE = '/bags';
export const BOOK_PAGE = '/book';
export const FURNITURE_PAGE = '/furniture';
export const MEDICINE_PAGE = '/medicine';
export const RESTAURANT_PAGE = '/restaurant';
export const REQUEST_MEDICINE_PAGE = '/request-medicine';
export const CHECKOUT_PAGE = '/checkout';
export const CHECKOUT_PAGE_TWO = '/checkout-alternative';
export const PROFILE_PAGE = '/profile';
export const YOUR_ORDER_PAGE = '/order';
export const YOUR_PLANTS = '/your-plants';
export const ORDER_RECEIVED_PAGE = '/order-received';
export const OFFER_PAGE = '/offer';
export const HELP_PAGE = '/help';
export const TERMS_AND_SERVICES_PAGE = '/terms';
export const PRIVACY_POLICY_PAGE = '/privacy';
// Mobile Drawer Menus

export const HOME_MENU_ITEM = {
  id: 'nav.home',
  defaultMessage: 'Home',
  href: HOME_PAGE,
};

export const WORK_PAGE_ITEM = {
  id: 'nav.work',
  defaultMessage: 'Trabajo',
  href: WORK_PAGE,
};

export const HELP_MENU_ITEM = {
  id: 'nav.help',
  defaultMessage: 'Help',
  href: HELP_PAGE,
};
export const OFFER_MENU_ITEM = {
  id: 'nav.offer',
  defaultMessage: 'Offer',
  href: OFFER_PAGE,
};
export const ORDER_MENU_ITEM = {
  id: 'nav.order',
  href: YOUR_ORDER_PAGE,
  defaultMessage: 'Order',
};

export const PLANTS_MENU_ITEM = {
  id: 'nav.plants',
  href: YOUR_PLANTS,
  defaultMessage: 'Plants',
};

export const REQUEST_MEDICINE_MENU_ITEM = {
  id: 'nav.request_medicine',
  defaultMessage: 'Request Medicine',
  href: REQUEST_MEDICINE_PAGE,
};
export const PROFILE_MENU_ITEM = {
  id: 'nav.profile',
  defaultMessage: 'Profile',
  href: PROFILE_PAGE,
};

export const STAFF_MENU_ITEMS = [
  PROFILE_MENU_ITEM,
  ORDER_MENU_ITEM,
  WORK_PAGE_ITEM,
  PLANTS_MENU_ITEM,
]

export const GROWER_MENU_ITEMS = [
  PROFILE_MENU_ITEM,
  ORDER_MENU_ITEM,
  PLANTS_MENU_ITEM,
]

export const AUTHORIZED_MENU_ITEMS = [
  PROFILE_MENU_ITEM,
  ORDER_MENU_ITEM,
  PLANTS_MENU_ITEM
  // REQUEST_MEDICINE_MENU_ITEM,
  // CHECKOUT_PAGE_TWO,
  // {
  //   id: 'nav.checkout_two',
  //   href: CHECKOUT_PAGE_TWO,
  //   defaultMessage: 'Checkout Alternative',
  // },
  /*{
    id: 'nav.checkout',
    defaultMessage: 'Checkout',
    href: CHECKOUT_PAGE,
  },
  {
    id: 'nav.checkout_two',
    href: CHECKOUT_PAGE_TWO,
    defaultMessage: 'Checkout Alternative',
  },
  ORDER_MENU_ITEM,
  {
    id: 'nav.order_received',
    href: ORDER_RECEIVED_PAGE,
    defaultMessage: 'Order invoice',
  },
  {
    id: 'nav.terms_and_services',
    defaultMessage: 'Terms and Services',
    href: TERMS_AND_SERVICES_PAGE,
  },
  {
    id: 'nav.privacy_policy',
    defaultMessage: 'Privacy Policy',
    href: PRIVACY_POLICY_PAGE,
  },*/
];

export async function CATEGORY_MENU() {

  const apolloClient = initializeApollo();
  const res = await apolloClient.query({
    query: GET_TYPE,
    variables: {
      searchText: ''
    }
  });
  
  const paths = await res.data.types.items.map((item) => {
    return({
      id: item.id,
      href: `/${item.slug}`,
      defaultMessage: item.name,
      icon: item.icon,
      dynamic: true,
    })
  })
  return paths;
}

// category menu items for header navigation
export const CATEGORY_MENU_ITEMS = [
  {
    id: 'nav.grocery',
    href: GROCERY_PAGE,
    defaultMessage: 'Grocery',
    icon: 'FruitsVegetable',
    dynamic: true,
  },
  {
    id: 'nav.makeup',
    defaultMessage: 'Makeup',
    href: MAKEUP_PAGE,
    icon: 'FacialCare',
    dynamic: true,
  },
  {
    id: 'nav.bags',
    defaultMessage: 'Bags',
    href: BAGS_PAGE,
    icon: 'Handbag',
    dynamic: true,
  },
  {
    id: 'nav.clothing',
    defaultMessage: 'Clothing',
    href: CLOTHING_PAGE,
    icon: 'DressIcon',
    dynamic: true,
  },
  {
    id: 'nav.furniture',
    defaultMessage: 'Furniture',
    href: FURNITURE_PAGE,
    icon: 'FurnitureIcon',
    dynamic: true,
  },
  {
    id: 'nav.book',
    defaultMessage: 'Book',
    href: BOOK_PAGE,
    icon: 'BookIcon',
    dynamic: true,
  },
  {
    id: 'nav.medicine',
    defaultMessage: 'Medicine',
    href: MEDICINE_PAGE,
    icon: 'MedicineIcon',
    dynamic: true,
  },
  {
    id: 'nav.foods',
    defaultMessage: 'Foods',
    href: RESTAURANT_PAGE,
    icon: 'Restaurant',
  }
];

export const MOBILE_DRAWER_MENU = [
  HOME_MENU_ITEM,
  // HELP_MENU_ITEM,
  // OFFER_MENU_ITEM,
];

export const PROFILE_SIDEBAR_TOP_MENU = [ORDER_MENU_ITEM, PLANTS_MENU_ITEM];
export const PROFILE_SIDEBAR_BOTTOM_MENU = [PROFILE_MENU_ITEM];

export const LANGUAGE_MENU = [
  // {
  //   id: 'ar',
  //   defaultMessage: 'Arabic',
  //   icon: 'SAFlag',
  // },
  // {
  //   id: 'zh',
  //   defaultMessage: 'Chinese',
  //   icon: 'CNFlag',
  // },
  {
    id: Locales.EN,
    defaultMessage: 'English',
    icon: 'USFlag',
  },
  {
    id: Locales.ES,
    defaultMessage: 'Spanish',
    icon: 'ESFlag',
  }
  // {
  //   id: 'de',
  //   defaultMessage: 'German',
  //   icon: 'DEFlag',
  // },
  // {
  //   id: 'he',
  //   defaultMessage: 'Hebrew',
  //   icon: 'ILFlag',
  // },
];

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADD_ADDRESS = exports.createOrderQuery = exports.updateUserShoppingCartQuery = exports.getUserShoppingCartsQuery = exports.GET_PRODUCTS = exports.getAvailableProductsQuery = exports.getDeliveryMethodsQuery = exports.GET_CATEGORIES = exports.updateUserChatQuery = exports.updateUserNameAndEmailQuery = exports.signUpQuery = exports.getPaymentMethodsQuery = exports.getCustomerQuery = exports.UPDATE_USER_WORK_INFO = exports.GET_SETTINGS = void 0;
exports.GET_SETTINGS = `
  query GetSetting {
    getSiteSetting(key: "site-settings") {
      id
      key
      value
    }
  }
`;
exports.UPDATE_USER_WORK_INFO = `
  mutation UpdateUserWorkInfo(
    $id: ID!, 
    $isWorking: Boolean,
    $startedWorkTime: String,
    $stoppedWorkTime: String,
    $ratePerHour: Int,
    $logDescription: String,
    $totalWorkingMinutesPerWeek: Int,
    $totalSalaryToPayWeekly: Int,
    $advancedSalaryPaid: Int,
    $taskRelated: String,
    $role: String
  ) { updateUserWorkInfo(
      id: $id, 
      isWorking: $isWorking,
      startedWorkTime: $startedWorkTime,
      stoppedWorkTime: $stoppedWorkTime,
      ratePerHour: $ratePerHour,
      logDescription: $logDescription,
      totalWorkingMinutesPerWeek: $totalWorkingMinutesPerWeek,
      totalSalaryToPayWeekly: $totalSalaryToPayWeekly,
      advancedSalaryPaid: $advancedSalaryPaid,
      taskRelated: $taskRelated,
      role: $role
    ) {
    status
      message
    }
  }
`;
exports.getCustomerQuery = `
    query GetCustomer($phone: String!) {
        getCustomer(phone: $phone) {
            user {
                name
                id
                phones {
                number
                }
                chatHistory {
                    trigger
                }
                role
                plants {
                    controllerId
                    name
                    soilHumidity1
                    soilHumidity2
                    airHumidity
                    tempeture
                    light
                    isRelayOneOn
                    isRelayTwoOn
                    isRelayThirdOn
                    isRelayFourthOn
                    soilHumiditySettings1 {
                        minWarning
                        maxWarning
                        mode
                        relayOneAutomatedTimeToRun
                        relayOneAutomatedStartedTime
                        relayTwoAutomatedStartedTime
                        relayOneIdRelated
                        relayOneWorking
                        relayTwoAutomatedTimeToRun
                        relayTwoIdRelated
                        relayTwoWorking
                    }
                    soilHumiditySettings2 {
                        minWarning
                        maxWarning
                        mode
                        relayOneAutomatedTimeToRun
                        relayOneAutomatedStartedTime
                        relayTwoAutomatedStartedTime
                        relayOneIdRelated
                        relayOneWorking
                        relayTwoAutomatedTimeToRun
                        relayTwoIdRelated
                        relayTwoWorking
                    }
                    lightSettings {
                        minWarning
                        maxWarning
                        mode
                        relayOneAutomatedTimeToRun
                        relayOneAutomatedStartedTime
                        relayTwoAutomatedStartedTime
                        relayOneIdRelated
                        relayOneWorking
                        relayTwoAutomatedTimeToRun
                        relayTwoIdRelated
                        relayTwoWorking
                    }
                }
                workInfo {
                    stoppedWorkTime
                    startedWorkTime
                    ratePerHour
                    totalWorkingMinutesPerWeek
                    totalSalaryToPayWeekly
                    advancedSalaryPaid
                    isWorking
                    taskRelated
                }
                shoppingCart {
                    customer_id
                    contact_number
                    payment_option_id
                    delivery_method_id
                    delivery_method_name
                    payment_method_name
                    selectedCategorySlug
                    ccCharge
                    deliveryFee
                    payment_option_type
                    delivery_date
                    delivery_address
                    sub_total
                    total
                    coupon_code
                    discount_amount
                    payment_id
                    products {
                        product_id
                        name
                        quantity
                        recicledQuantity
                        price
                        sale_price
                    }
                }
            }
            access_token
        }
    }
`;
exports.getPaymentMethodsQuery = `
        query GetPaymentOptions(
        $searchText: String
        $offset: Int
    ) {
        paymentOptions(
        searchText: $searchText
        offset: $offset
        ) {
        items {
            id
            name
            type
            image
            details
            created_at
        }
        totalCount
        hasMore
        }
    }
`;
exports.signUpQuery = `
  mutation SignUp($phone: String!, $password: String!, $name: String!) {
    signUp(phone: $phone, password: $password, name: $name) {
        status
        message
    }
}
`;
exports.updateUserNameAndEmailQuery = `
    mutation UpdateUser(
        $id: ID!, 
        $name: String!,
        $email: String,
    ) { updateUserNameAndEmail(
        id: $id, 
        name: $name,
        email: $email,
        ) {
            status
            message
        }
    }
`;
exports.updateUserChatQuery = `
    mutation UpdateUserChat(
        $message: String!,
        $number: String!,
        $trigger: String,
    ) { updateUserChat(
        message: $message, 
        number: $number,
        trigger: $trigger,
        ) {
            status
            message
        }
    }
`;
exports.GET_CATEGORIES = `
    query GetCategories {
        categories(limit: 0) {
        items {
            id
            parent_id
            name
            slug
            meta_description
        }
        totalCount
        hasMore
        }
    }
`;
exports.getDeliveryMethodsQuery = `
        query GetDeliveryMethods(
        $searchText: String
        $offset: Int
    ) {
        deliveryMethods(
        searchText: $searchText
        offset: $offset
        ) {
        items {
            id
            name
            details
            created_at
            isPickUp
            pickUpAddress
        }
        totalCount
        hasMore
        }
    }
`;
exports.getAvailableProductsQuery = `
    query GetAvailableProducts {
        getAvailableProducts {
            id
            packagePrice
            name
            description
            price
            sale_price
            product_quantity
            is_online
        }
    }
`;
exports.GET_PRODUCTS = `
    query GetProducts(
        $type: String
        $category: String
        $searchText: String
        $offset: Int,
        $filterUnstockProducts: Boolean
    ) {
        products(
        type: $type
        category: $category
        searchText: $searchText
        offset: $offset,
        filterUnstockProducts: $filterUnstockProducts
        ) {
        items {
            id
            type {
                id
                slug
                name
            }
            categories {
                id
                slug
                name
            }
            name
            slug
            packagePrice
            description
            images
            unit
            price
            sale_price
            discount_in_percent
            product_quantity
            is_featured
            is_online
            meta_title
            meta_keyword
            meta_description
        }
        totalCount
        hasMore
        }
    }
`;
exports.getUserShoppingCartsQuery = `
    query GetUserShoppingCart {
        getUserShoppingCart {
            customer_id
            contact_number
            payment_option_id
            delivery_method_id
            selectedCategorySlug
            delivery_date
            delivery_address
            sub_total
            total
            coupon_code
            discount_amount
            products
        }
    }
`;
exports.updateUserShoppingCartQuery = `
    mutation UpdateUserShoppingCart($input: OrderInputNotRequires!) {
        updateUserShoppingCart(
            input: $input
        ) 
        {
            status
            message
        }
    }
`;
exports.createOrderQuery = `
    mutation CreateOrder($input: OrderInput!) {
        createOrder(
        input: $input
        ) 
        {
            customer_id
            contact_number
            payment_status
            status
        }
    }
`;
exports.ADD_ADDRESS = `
    mutation AddDeliveryAddress(
        $id: ID!, 
        $title: String!,
        $address: String!,
        $location: String,
        $instructions: String,
    ) {
        addDeliveryAddress(
            id: $id, 
            title: $title, 
            address: $address, 
            location: $location,
            instructions: $instructions
        ) {
            id
            title
            address
            location
            instructions
            is_primary
        }
    }
`;

export const getCustomerQuery = `
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
                shoppingCart {
                    customer_id
                    contact_number
                    payment_option_id
                    delivery_method_id
                    delivery_method_name
                    payment_method_name
                    selectedCategorySlug
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


export const getPaymentMethodsQuery = `
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

export const signUpQuery = `
  mutation SignUp($phone: String!, $password: String!, $name: String!) {
    signUp(phone: $phone, password: $password, name: $name) {
        status
        message
    }
}
`;

export const updateUserNameAndEmailQuery = `
    mutation UpdateUser(
        $id: ID!, 
        $name: String!,
        $email: String!,
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

export const updateUserChatQuery = `
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

export const GET_CATEGORIES = `
    query GetCategories {
        categories(limit: 0) {
        items {
            id
            parent_id
            name
            slug
            banner
            icon
        }
        totalCount
        hasMore
        }
    }
`;

export const getDeliveryMethodsQuery = `
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

export const getAvailableProductsQuery = `
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

export const GET_PRODUCTS = `
    query GetProducts(
        $type: String
        $category: String
        $searchText: String
        $offset: Int
    ) {
        products(
        type: $type
        category: $category
        searchText: $searchText
        offset: $offset
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

export const getUserShoppingCartsQuery = `
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

export const updateUserShoppingCartQuery = `
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

export const createOrderQuery = `
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

export const ADD_ADDRESS = `
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
import {gql} from 'apollo-server-express';

export const typeDefs = gql`
    input File {
        name: String!
        size: Int!
        type: String!
    }   
    type Phone {
        id: String
        number: String!
        status: Boolean
        is_primary: Boolean
    }

    type Plant {
        id: String!
        plantId: Int!
        name: String!
        soil_humidity_1: Int
        soil_humidity_2: Int
        humidity_1: Int
        tempeture_1: Int
        light: Int
        sensors: [ISensorSetting]
        isRelayOneOn: Boolean
        isRelayTwoOn: Boolean
        isRelayThirdOn: Boolean
        isRelayFourthOn: Boolean
        offline_notification: Boolean
        timestamp: String
        alarm: Boolean
        alarm_timestamp: String
        timeZone: String
    }

    type ISensorSetting {
        reading: Int
        name: String
        whatsappWarningsOn: Boolean
        minWarning: String
        maxWarning: String
        mode: String
        relayOneAutomatedTimeToRun: String
        relayTwoAutomatedTimeToRun: String
        relayOneAutomatedStartedTime: String
        relayTwoAutomatedStartedTime: String
        relayOneIdRelated: String
        relayOneWorking: Boolean
        relayTwoIdRelated: String
        relayTwoWorking: Boolean
        settingType: String
        logs: [ILogs]
        scheduledOnTimes: [ScheduledOnTimes]
    }

    type ScheduledOnTimes {
        daysToRepeat: [Int]
        startTime: String
        endTime: String
        enabled: Boolean
        smartLight: Boolean
    }
    
    type DeliveryAddress {
        id: String
        title: String
        address: String 
        location: String 
        instructions: String
        is_primary: Boolean
    }
    
    type WorkInfo {
        stoppedWorkTime: String
        startedWorkTime: String
        ratePerHour: Int
        totalWorkingMinutesPerWeek: Int
        totalSalaryToPayWeekly: Int
        advancedSalaryPaid: Int
        isWorking: Boolean
        taskRelated: String
    }

    type Logs {
        timestamp: String
        logDescription: String
    }

    type ILogs {
        timestamp: String
        reading: Int
        started: Boolean
        finished: Boolean
    }

    input InputLogs {
        timestamp: String
        reading: Int
        started: Boolean
        finished: Boolean
    }

    input InputSettings {
        name: String
        whatsappWarningsOn: Boolean
        minWarning: String
        maxWarning: String
        mode: String
        relayOneAutomatedTimeToRun: String
        relayTwoAutomatedTimeToRun: String
        relayOneAutomatedStartedTime: String
        relayTwoAutomatedStartedTime: String
        relayOneIdRelated: String
        relayOneWorking: Boolean
        relayTwoIdRelated: String
        relayTwoWorking: Boolean
        logs: [InputLogs]
        scheduledOnTimes: [ScheduleInput]  
        settingType: String 
        reading: Int
    }

    type ShoppingCart {
        delivery_date: String
        customer_id: String
        contact_number: String
        payment_option_id: String
        delivery_method_id: String
        selectedCategorySlug: String
        delivery_address: String
        payment_method_name: String
        payment_option_type: String
        delivery_method_name: String
        ccCharge: Int
        deliveryFee: Int
        sub_total: Int
        total: Int
        coupon_code: String
        discount_amount: Int
        products: [ProductInputOrder!]!
        payment_id: String
        lenguageLocale: String
    }

    type Chat {
        id: ID
        message: String
        trigger: String
        datetime: String
    }

    type User {
        id: ID!
        name: String
        email: String
        phones: [Phone]
        delivery_address: [DeliveryAddress]
        role: String
        created_at: String
        workInfo: WorkInfo
        shoppingCart: ShoppingCart
        chatHistory: [Chat]
        tasks: [Task]
        logs: [Logs]
        plants: [Plant]
    }

    type User2 {
        phones: [Phone]
        role: String
        plants: [Plant]
    }

    type Task {
        taskId: String
        description: String
        startDate: String
        finishDate: String
        plannedDate: String
        isRepetitived: Boolean
        completationTimes: String
        workedHours: String
        isDone: Boolean
    }

    type UserAuthPayload  {
        user: User!
        access_token: String!
    }
    
    input MainTypeInput {
        name: String!
        image_data: File
        image: String
        icon: String!
        home_title: String!
        home_subtitle: String!
        meta_title: String
        meta_keyword: String
        meta_description: String
    }
    type MainType {
        id: ID!
        name: String!
        slug: String!
        image: String!
        icon: String!
        home_title: String
        home_subtitle: String
        meta_title: String
        meta_keyword: String
        meta_description: String
        created_at: String
        updated_at: String
    }
    type MainTypePaginationType {
        items: [MainType]
        totalCount: Int
        hasMore: Boolean
    }
    
    input CategoryInput {
        type_id: String!
        parent_id: String
        name: String!
        visible: Boolean
        banner_data: File
        banner: String
        icon: String!
        meta_title: String
        meta_keyword: String
        meta_description: String
    }
    type CategoryChildren {
        id: ID
        type_id: String
        name: String
        slug: String
        banner: String
        icon: String
    }
    type Category {
        id: ID!
        type_id: String
        parent_id: String
        name: String!
        visible: Boolean
        slug: String!
        banner: String
        icon: String!
        children: [CategoryChildren]
        meta_title: String
        meta_keyword: String
        meta_description: String
        created_at: String
        updated_at: String
    }
    
    type CatetgoryPaginationType {
        items: [Category]
        totalCount: Int
        hasMore: Boolean
    }
    
    input ProductTypeInput {
        id: String
        name: String
        slug: String
    }

    input ScheduleInput {
        daysToRepeat: [Int]
        startTime: String
        endTime: String
        enabled: Boolean
        smartLight: Boolean
    }

    input ProductInput {
        type: ProductTypeInput!
        categories: String!
        name: String!
        description: String
        images_data: String!
        images: [String!]!
        slug: String!
        packagePrice: Float
        unit: String
        price: Float!
        sale_price: Float
        discount_in_percent: Int
        product_quantity: Int!
        meta_title: String
        meta_keyword: String
        meta_description: String
        is_featured: Boolean
        is_online: Boolean
    }
    input ProductUpdateInput {
        type: ProductTypeInput!
        categories: String!
        name: String
        description: String
        images_data: String
        images: [String]
        slug: String
        packagePrice: Int
        unit: String
        price: Float
        sale_price: Float
        discount_in_percent: Int
        product_quantity: Int
        meta_title: String
        meta_keyword: String
        meta_description: String
        is_featured: Boolean
        is_online: Boolean
    }
    
    type ProductCategory {
        id: String
        name: String
        slug: String
    }
    type ProductType {
        id: String
        name: String
        slug: String
    }
    type Product {
        id: ID!
        type: ProductType!
        categories: [ProductCategory]!
        name: String!
        slug: String!
        description: String
        images: [String!]!
        unit: String
        price: Float!
        packagePrice: Float 
        sale_price: Float
        discount_in_percent: Int
        product_quantity: Int!
        meta_title: String
        meta_keyword: String
        meta_description: String
        is_featured: Boolean!
        is_online: Boolean
        created_at: String
        updated_at: String
    }
    type ProductPaginationType {
        items: [Product]
        totalCount: Int
        hasMore: Boolean
    }
    
    type DeliveryMethod {
        id: ID!
        name: String!
        details: String!
        isPickUp: Boolean
        pickUpAddress: String
        delivery_date: String
        created_at: String
        updated_at: String
    }
    type DeliveryMethodPaginationType {
        items: [DeliveryMethod]
        totalCount: Int
        hasMore: Boolean
    }
    
    type PaymentOption {
        id: ID!
        name: String!
        type: String!
        image: String!
        details: String
        created_at: String
        updated_at: String
    }
    type PaymentOptionPaginationType {
        items: [PaymentOption]
        totalCount: Int
        hasMore: Boolean
    }

    type ProductInputOrder {
        product_id: String!
        name: String
        image: String
        quantity: Int
        recicledQuantity: Int
        unit: String
        price: Float
        sale_price: Float
    }

    # Orders
    input OrderProductInput {
        product_id: String!
        name: String
        image: String
        quantity: Int
        recicledQuantity: Int
        unit: String
        price: Float
        sale_price: Float
    }
    input OrderInput {
        customer_id: String!
        contact_number: String!
        payment_option_id: String!
        delivery_method_id: String!
        payment_option_type: String!
        isWhatsappPurchase: Boolean!
        delivery_address: String
        delivery_date: String
        sub_total: Float
        total: Float
        coupon_code: String
        discount_amount: Float
        products: [OrderProductInput!]!
        payment_id:  String
        lenguageLocale:  String
    }

    input OrderQuickInput {
        customer_id: String!
        contact_number: String!
        payment_option_id: String
        delivery_method_id: String
        payment_option_type: String
        isWhatsappPurchase: Boolean!
        delivery_address: String
        delivery_date: String
        sub_total: Float
        total: Float
        coupon_code: String
        discount_amount: Float
        products: [OrderProductInput!]!
        payment_id:  String
        lenguageLocale: String
    }
    
    input OrderInputNotRequires {
        customer_id: String
        contact_number: String
        payment_option_id: String
        delivery_method_id: String
        payment_method_name: String
        payment_option_type: String
        delivery_address: String
        delivery_date: String
        ccCharge: Float
        deliveryFee: Float
        selectedCategorySlug: String
        delivery_method_name: String
        sub_total: Float
        total: Float
        coupon_code: String
        discount_amount: Float
        products: [OrderProductInput!]!
        payment_id:  String
        lenguageLocale: String
    }
    
    type OrderTracker {
        status: String!
        ordering: Int!
        is_current: Boolean!
        step_competed: Boolean
    }

    type OrderProducts {
        product_id: String!
        name: String
        image: String
        quantity: Int!
        recicledQuantity: Int
        unit: String
        price: Float
        sale_price: Float
    }
    
    type Order {
      id: ID!
      order_code: String
      customer_id: String!
      contact_number: String
      payment_option_id: String
      datetime: String
      delivery_method_id: String
      delivery_address: String
      delivery_date: String
      sub_total: Float
      total: Float
      coupon_code: String
      discount_amount: Float
      payment_id: String
      payment_method: String
      customer_name: String
      delivery_method_name: String
      delivery_pickup_date: String
      payment_status: String
      status: String!
      order_tracking: [OrderTracker]
      order_products: [OrderProducts]
      created_at: String
      updated_at: String
    }
    type OrderPaginationType {
        items: [Order]
        totalCount: Int
        hasMore: Boolean
    }
    
    type DefaultMessageType {
        message: String!
        status: Boolean!
    }

    type IPlantReturnType {
        isRelayOneOn: String
        isRelayTwoOn: String
        isRelayThirdOn: String
        isRelayFourthOn: String
    }
    
    type Setting {
        id: ID
        key: String
        value: String
    }


    type Coupon {
        id: ID!
        title: String
        code: String
        percentage: Int
        maximum_discount_amount: Int
        expiration_date: String
        status: String
        created_at: String
        updated_at: String
        valid: Boolean
    }
    type CouponPaginationType {
        items: [Coupon]
        totalCount: Int
        hasMore: Boolean
    }

    input CouponInput {
        title: String!
        code: String!
        percentage: Int
        maximum_discount_amount: Int
        expiration_date: String!
        status: String
    }
    type CouponValid {
        valid: Boolean
    }

    type GetCouponRetrunType {
        coupon: Coupon
        message: DefaultMessageType
    }

    type HomeCard {
        id: ID!
        name: String!
        url: String
        image: String!
        status: Boolean
        types: [ProductCategory!]!
        created_at: String
        updated_at: String
    }
    type HomeCardPaginationType {
        items: [HomeCard]
        totalCount: Int
        hasMore: Boolean
    }
    
    input BoundsInput {
        ne: CoordinatesInput!
        sw: CoordinatesInput!
    }
    
    input CoordinatesInput {
        latitude: Float!
        longitude: Float!
    }
    
    type Shop {
        id: ID!
        userId: String!
        shopPublicName: String!
        shopUrl: String!
        address: String!
        latitude: Float!
        longitude: Float!
    }
    
    input ShopInput {
        shopPublicName: String!
        shopUrl: String!
        address: String!
        coordinates: CoordinatesInput!
    }
      
    type Query {
        shop(id: String!): Shop
        shops(bounds: BoundsInput!): [Shop!]!

        getUsers: [User!]!
        types(limit: Int = 12, offset: Int = 0, searchText: String): MainTypePaginationType!
        categories(type: String, limit: Int = 12, offset: Int = 0, searchText: String): CatetgoryPaginationType!
        shopCategories(type: String, limit: Int = 12, offset: Int = 0, searchText: String): CatetgoryPaginationType!
        products(type: String, category: String, limit: Int = 12, offset: Int = 0, searchText: String, filterUnstockProducts: Boolean): ProductPaginationType!
        getAvailableProducts: [Product!]!
        getUserShoppingCart: Order
        getProduct(slug: String!): Product!
        deliveryMethods(limit: Int = 12, offset: Int = 0, searchText: String): DeliveryMethodPaginationType!
        paymentOptions(limit: Int = 12, offset: Int = 0, searchText: String): PaymentOptionPaginationType!
        orders(status: String, limit: Int = 12, offset: Int = 0, searchText: String): OrderPaginationType!
        allOrders: [Order!]!
        getUserOrders: [Order!]!
        getSetting(key: String!): Setting!
        getSiteSetting(key: String!): Setting!
        getUser: User!
        getOfflineDittoBotsUsers: User
        getCustomer(phone: String!): UserAuthPayload!
        coupons(limit: Int = 12, offset: Int = 0, searchText: String): CouponPaginationType!
        validateCoupon(code: String!): CouponValid!
        userAuthCheck: DefaultMessageType!
        homeCards(limit: Int = 12, offset: Int = 0, searchText: String): HomeCardPaginationType!
        getHomeCards(type: String!): [HomeCard]!
        getStaffs: [User!]!
    }
    
    type Mutation {

        login(phone: String!, password: String!): UserAuthPayload!
        signUp(phone: String!, password: String!, name: String!): DefaultMessageType!
        staffSignUp(phone: String!, password: String!, name: String!, role: String!): DefaultMessageType!
        updateUserWorkInfo(id: ID!, isWorking: Boolean, startedWorkTime: String, stoppedWorkTime: String, ratePerHour: Int, logDescription: String, totalWorkingMinutesPerWeek: Int, totalSalaryToPayWeekly: Int, advancedSalaryPaid: Int, taskRelated: String, role: String): DefaultMessageType!
        updateUserLogs(id: ID!, logs: String): Logs
        deleteUserTask(id: ID!, taskId: String): DefaultMessageType
        updateUserTasks(id: ID!, taskId: String, description: String, startDate: String, finishDate: String, plannedDate: String, isRepetitived: Boolean, completationTimes: String, workedHours: String, isDone: Boolean): DefaultMessageType!
        deleteStaff(id: ID!): DefaultMessageType!
        phoneVerification(phone: String!): DefaultMessageType!
        phoneVerificationCheck(phone: String!, verification_code: String!): UserAuthPayload!
        createType(input: MainTypeInput): MainType!
        updateType(id: ID!, input: MainTypeInput): MainType!
        deleteType(id: ID!): DefaultMessageType!
        createCategory(input: CategoryInput): Category!
        updateCategory(id: ID!, input: CategoryInput): Category!
        deleteCategory(id: ID!): DefaultMessageType!
        createProduct(input: ProductInput): Product!
        updateProduct(id: ID!, input: ProductUpdateInput): Product!
        deleteProduct(id: ID!): DefaultMessageType!
        createDeliveryMethod(name: String!, details: String!, isPickUp: Boolean, pickUpAddress: String): DeliveryMethod!
        updateDeliveryMethod(id: ID!, name: String!, details: String!, isPickUp: Boolean, pickUpAddress: String): DeliveryMethod!
        deleteDeliveryMethod(id: ID!): DefaultMessageType!
        createPaymentOption(name: String!, type: String!, image: String!, image_data: String!, details: String): PaymentOption!
        updatePaymentOption(id: ID!, name: String!, type: String!, image: String!, image_data: String, details: String): PaymentOption!
        deletePaymentOption(id: ID!): DefaultMessageType!
        createOrder(input: OrderInput): Order!
        createQuickOrder(input: OrderQuickInput): Order!
        updateUserShoppingCart(input: OrderInputNotRequires): DefaultMessageType!
        updateSiteSetting(key: String!, value: String!): Setting!
        updateUserNameEmailAndLenguage(id: ID!, name: String!, email: String, lenguage: String): DefaultMessageType!
        addPhoneNumber(id: ID!, number: String!): Phone!
        addPlant(id: ID!, name: String!, plantId: Int!, timeZone: String, offline_notification: Boolean): DefaultMessageType!
        updatePlant(id: ID!, contrId: Int!, hum1: Int, airHum: Int, temp: Int, dist: Int, hum2: Int, light: Int, alarm: Boolean, co2: Int, isRelayOneOn: Boolean, isRelayTwoOn: Boolean, isRelayThirdOn: Boolean, isRelayFourthOn: Boolean): IPlantReturnType!
        updateSetting(id: ID!, plantId: Int!, input: InputSettings): DefaultMessageType!
        deleteSetting(id: ID!, plantId: Int!, settingName: String!): DefaultMessageType!
        updatePhoneNumber(id: ID!, phoneId: String!, number: String!): Phone!
        setPhoneNumberPrimary(id: ID!, phoneId: String!): DefaultMessageType!
        deletePhoneNumber(id: ID!, phoneId: String!): DefaultMessageType!
        addDeliveryAddress(id: ID!, title: String!, address: String!, location: String, instructions: String): DeliveryAddress!
        updateDeliveryAddress(id: ID!, addressId: String!, title: String!, address: String!, location: String, instructions: String): DeliveryAddress!
        setDeliveryAddressPrimary(id: ID!, addressId: String!): DefaultMessageType!
        deleteDeliveryAddress(id: ID!, addressId: String!): DefaultMessageType!
        changePassword(id: ID!, old_password: String!, new_password: String!, confirm_password: String!): DefaultMessageType!
        updateOrderStatus(id: ID!, orderingPosition: Int!): Order!
        updateUserChat(message: String!, number: String!, trigger: String): DefaultMessageType!
        createCoupon(input: CouponInput): Coupon!
        updateCoupon(id: ID!, input: CouponInput): Coupon!
        deleteCoupon(id: ID!): DefaultMessageType!
        getCoupon(code: String!): GetCouponRetrunType!
        createHomeCard(name: String!, url: String, image: String!, image_data: File!, status: Boolean, types: String!): HomeCard!
        updateHomeCard(id: String!, name: String!, url: String, image: String!, image_data: File, status: Boolean, types: String!): HomeCard!
        deleteHomeCard(id: ID!): DefaultMessageType!
    }
`;
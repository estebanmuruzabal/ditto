export interface IOrderProductInput {
    product_id: string;
    name?: string;
    image?: string;
    quantity: number;
    recicledQuantity: number;
    unit?: string;
    price: number;
}

export interface IOrderInput {
    delivery_date: string;
    customer_id: string;
    contact_number: string;
    payment_option_id: string;
    delivery_method_id: string;
    selectedCategorySlug?: string;
    isWhatsappPurchase?: boolean;
    delivery_address: string;
    payment_method_name: string;
    payment_option_type: string;
    delivery_method_name: string;
    sub_total: number;
    total: number;
    coupon_code?: string;
    discount_amount?: number;
    ccCharge?: number;
    deliveryFee?: number;
    products: Array<IOrderProductInput>;
    payment_id?:  string;
}

export interface IOrderInputArgs {
    id?: string;
    input: IOrderInput;
}
import axios from "axios";
import nodemailer from "nodemailer";
import { IOrderInputArgs } from "../../graphql/resolvers/Orders/types";
import { IProduct, IUser } from "../types";
import { COMPANY_EMAIL, COMPANY_EMAIL_PASSWORD } from "./constant";

const fromNumber = process.env.OTP_FROM_NUMBER
const apiToken = process.env.OTP_API_TOKEN

export const sendOtp = (sendToNumber: string, otpCode: string) => {
    const postData = {
        from: fromNumber,
        to: [sendToNumber],
        body: `Verification code: ${otpCode}`,
    };

    const axiosConfig = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiToken}`,
        },
    };

    return axios.post(
            "https://sms.api.sinch.com/xms/v1/240c4a432e32458fa8312a71ffddbb52/batches",
            postData,
            axiosConfig
        );
}

export const sendConfirmationMail = (email: string, customer: any, input: any, deliveryMethod: string, paymentMethod: string) => {

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: COMPANY_EMAIL,
            pass: COMPANY_EMAIL_PASSWORD
        }
    });

    const template = `
            <div>
                <div>${customer.name}</div>
                <div>Fecha: ${new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })}</div>
                <div>Telefono:${customer.phones?.length > 0 ? customer?.phones[0]?.number : ''}</div>
                <div>Metodo de envio: ${deliveryMethod}</div>
                <div>Direccion de envio/pickup: ${input?.delivery_address}</div>
                <div>Fecha de envio/pickup: ${input.delivery_date}</div>
                <div>Metodo de pago: ${paymentMethod}</div>
                <div>Monto total ${input.total}</div>
                <div>Productos comprados</div>
                ${input.products.map((product: { name: any; quantity: any; recicledQuantity: any; price: any }) => (`<div>${product.quantity + product.recicledQuantity} - ${product.name} - $${product.price}</div>`))}
            </div>
        `;

    return transporter.sendMail({
        from: "dittofarmresistencia@gmail.com",
        to: email,
        subject: 'Confirmación de orden',
        text: template,
        html: template
    });
}

export const sendClientConfirmationMail = (email: string, customer: any, input: any, deliveryMethod: string, paymentMethod: string) => {

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'dittofarmresistencia@gmail.com',
            pass: 'omnhypvscthkfnvr'
        }
    });

    const template = `
            <div>
                <div>Pedido Confirmado!</div>
                <div>Muchas gracias por su pedido ${customer.name}. A continuacion le enviamos los datos de tu compra.</div><br>
                <div>Fecha: ${new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })}</div>
                <div>Telefono:${customer.phones?.length > 0 ? customer?.phones[0]?.number : ''}</div>
                <div>Metodo de envio: ${deliveryMethod}</div>
                <div>Direccion de envio/pickup: ${input?.delivery_address}</div>
                <div>Fecha de envio/pickup: ${input.delivery_date}</div>
                <div>Metodo de pago: ${paymentMethod}</div>
                <div>Productos comprados</div>
                ${input.products.map((product: { name: any; quantity: any; recicledQuantity: any; price: any }) => (`<div>${product.quantity + product.recicledQuantity} - ${product.name} - $${product.price}</div>`))}
                <div>Monto total ${input.total}</div>
            </div>
        `;

    return transporter.sendMail({
        from: "dittofarmresistencia@gmail.com",
        to: email,
        subject: 'Confirmación de compra',
        text: template,
        html: template
    });
}
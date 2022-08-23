import axios from "axios";
// import nodemailer from "nodemailer";

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

// export const sendMailVerification = (email: string) => {

//     const transporter = nodemailer.createTransport({
//         service: 'Gmail',
//         auth: {
//             user: 'flyingchickenco@gmail.com',
//             pass: 'Dallas765'
//         }
//     });

//     return transporter.sendMail({
//         from: "flyingchickenco@gmail.com",
//         to: email,
//         subject: "Verificación de email",
//         text: "Plaintext version of the message",
//         html: "<p>HTML version of the message</p>"
//     });
// }
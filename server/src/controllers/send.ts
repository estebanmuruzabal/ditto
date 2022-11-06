const DELAY_TIME = 170; //ms
const cleanNumber = (number: any) => {
   number = number.replace('@c.us', '');
   number = number.replace('+', '');
    number = `${number}@c.us`;
    return number
}
export const sendMessage = async (client: any, number = null, text = null, trigger = null) => {
   if (!number) return;
   setTimeout(async () => {
    number = cleanNumber(number)
    const message = text
    client.sendMessage(number, message);
   //  await readChat(number, message, trigger)
    console.log(`⚡⚡⚡ Enviando mensajes....`);
   },DELAY_TIME)
}

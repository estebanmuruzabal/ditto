const DELAY_TIME = 170; //ms
const cleanNumber = (number: any) => {
   number = number.replace('@c.us', '');
   number = number.replace('+', '');
    number = `${number}@c.us`;
    return number
}
export const sendMessage = async (client: any, number: string, text: string, trigger = null) => {
   if (!number) return;
   setTimeout(async () => {
    number = cleanNumber(number)
    const message = text
    client.sendMessage(number, message);
    await saveChat(number, message, trigger)
    console.log(`⚡⚡⚡ Enviando mensaje:`, message);
   },DELAY_TIME)
}

/**
 * Guardar historial de conversacion
 * @param {*} number 
 * @param {*} message 
 */
export const saveChat = async (number: string, message: string, trigger = null) => {
    number = cleanNumber(number)
   //  await saveMessage( message, trigger, number )
    // console.log('Saved')
}
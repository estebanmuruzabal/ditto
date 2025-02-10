export const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getDeliverySchedule = (details: string, intLocale: string) => {
    if (!details) return '';
    const word = intLocale === 'en' ? 'Time: ' : 'Horario: ';

    const index = details.indexOf(word);   // 8
    const length = word.length;			// 7

    return details.slice(index + length);
}

export const getDeliveryFee = (deliveryTitle: string) => {
    if (!deliveryTitle) return 0;
    const charge = deliveryTitle?.split("$");
    const chargeFormatted = deliveryTitle?.includes("$") ? charge[charge?.length -1]?.replace(/\D/g,'') : 0;
    return Number(chargeFormatted);
}

export const calculateDeliveryCharge = (deliveryMethodName: string) => {
    // MUST HAVE $ IN THE STRING, JEJE
    if (!deliveryMethodName) return 0;
    const charge = deliveryMethodName?.split("$");
    const chargeFormatted = deliveryMethodName?.includes("$") ? charge[charge?.length -1]?.replace(/\D/g,'') : 0;
    return Number(chargeFormatted);
  }
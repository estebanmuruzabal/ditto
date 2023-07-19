import { cleanNumber } from "../controllers/handle";
import { IUser, TriggerGrowerSteps } from "../lib/types";

export const getReplyFromGrowerBot = async (triggerStep: string, user: IUser | any, userInput: string, number: string, access_token: string) => new Promise(async (resolve, reject) => {
    let resData = { replyMessage: '', media: null, trigger: '' }
    let availableProducts: any;
    let deliveryOpts: any;
    let userInputNumber: number;
    let productSelected: any;
    let shoppingCart: any;
    const num = cleanNumber(number);

    console.log('nextTriggerStep received in Switch Grower:', triggerStep)
    switch (triggerStep) {
        case TriggerGrowerSteps.SHOW_ALL_PLANTS:
            if (!user?.plants?.length) {
                resData.replyMessage = 'No tenes plantas agregadas';
                resolve(resData); break;
            }

            let resDataArrayOfPlants: any = [];
            // resData.replyMessage = getSensorsMenuList(resData, user, user?.plants[0], TriggerGrowerSteps.CHANGE_MIN_HUMIDITY, 'title1', 'buttonText1');
            resolve([resData]);
            break;
        
        // case TriggerGrowerSteps.PLANT_DETAILS:
        //     const userInputPlantNumber = userInput[userInput.length];
        //     const userInputPlantSettingNumber = userInput[userInput.length - 1];
    
        //     if (!user?.plants[userInputPlantNumber]) {
        //         resData.trigger = TriggerGrowerSteps.SHOW_ALL_PLANTS;
        //         resData.replyMessage = invalidNumberInput(user?.plants?.length);
        //         resolve([resData]);
        //         break;
        //     }

        //     switch (userInputPlantSettingNumber) {
        //         case 'A':
        //             resData.trigger = `${TriggerGrowerSteps.CHANGE_MIN_HUMIDITY}_${userInputPlantSettingNumber}`;
        //             resData.replyMessage = 'Ingresar temperatura minima';
        //             resolve([resData]);
        //             break;
        //         case 'B':
        //             resData.trigger = `${TriggerGrowerSteps.CHANGE_MAX_HUMIDITY}_${userInputPlantSettingNumber}`;
        //             resData.replyMessage = 'Ingresar temperatura máxima';
        //             resolve([resData]);
        //             break;
        //         default:
        //             break;
        //     }
        //     resolve([resData])
        //     break;
        // case `${TriggerGrowerSteps.CHANGE_MIN_HUMIDITY}_1`:
        // case `${TriggerGrowerSteps.CHANGE_MIN_HUMIDITY}_2`:
        // case `${TriggerGrowerSteps.CHANGE_MIN_HUMIDITY}_3`:
        //     userInputNumber = Number(userInput.match(/[0-9]+/))
        //     const plantSettingNumber = triggerStep[triggerStep.length];
        //     const plant = user.plants[plantSettingNumber];

        //     if (!plant || userInputNumber < 0 || userInputNumber > 100) {
        //         resData.trigger = `${TriggerGrowerSteps.CHANGE_MIN_HUMIDITY}_${plantSettingNumber}`;
        //         resData.replyMessage = invalidNumberInput('100');
        //         resolve([resData]);
        //         break;
        //     }

        //     await updatePlantSettings(user, plant, 'minWarning', userInputNumber);
        //     resData.trigger = TriggerGrowerSteps.SHOW_ALL_PLANTS;
        //     resolve([resData])
        //     break;
        default:
            
            resolve([resData]);
            break;
    }
})
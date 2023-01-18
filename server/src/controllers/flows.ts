import { getReplyBasedOnTriggerStep, getReplyBasedOnStaffMsg } from '../adapter';
import { IUser } from '../lib/types';
import { isUserStaff } from '../lib/utils/shoppingUtils';
import { saveExternalFile, checkIsUrl } from './handle';
const stepsReponse = require('../flow/response.json')

export const findResponseMsg = async (trigger: string, customer: IUser, message: string, number: string, access_token: string) => {
    const isEmployee = isUserStaff(customer);
    console.log(customer, isEmployee, trigger);

    const data: any = isEmployee
        ? getReplyBasedOnStaffMsg(trigger, customer, message, number, access_token)
        : getReplyBasedOnTriggerStep(trigger, customer, message, number, access_token);
    if(data && data.media){
        const file = checkIsUrl(data.media) ? await saveExternalFile(data.media) : data.media;
        return {...data,...{media:file}}
    }
    return data
}

// export const getMessages = async (message: string) => {
//     const data: any = await identifyFirstMessageAndGetInitialResponse(message)
//     return data
// }

export const getNextStep = (message: string, lastStep: string) => new Promise(async (resolve, reject) => {
    const subStepSelected = message.match(new RegExp('[0-9]')) ? message : null;
    const notRecognicedResponseKey = `NOT_RECOGNICE_${lastStep}`;

    const nextStepKey = `${lastStep}_${subStepSelected}`;
    const nextStep = stepsReponse[nextStepKey] || stepsReponse[notRecognicedResponseKey]; 

    return resolve(nextStep);
    // const responseFind = 
    //  switch (responseNum) {
    //      case '1':
    //           message.()
    //          resolve( await saveMessageMysql( message, trigger, number ) )
    //          break;
    //      case 'none':
             
    //          break;
    //      default:
    //          resolve(null)
    //          break;
    // }
})

// export const bothResponse = async (message: string) => {
//     const data: any = await getIA(message)
//     if(data && data.media){
//         const file = await saveExternalFile(data.media)
//         return {...data,...{media:file}}
//     }
//     return data
// }

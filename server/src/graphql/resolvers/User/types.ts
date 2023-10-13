
export interface ISettingsInput {
    reading: number;
    name: string;
    minWarning: string;
    maxWarning: string;
    mode: string;
    relayOneAutomatedTimeToRun: string;
    relayOneAutomatedStartedTime: string;
    relayTwoAutomatedStartedTime: string;
    relayOneIdRelated: string;
    relayOneWorking: boolean;
    relayTwoAutomatedTimeToRun: string;
    relayTwoIdRelated: string;
    relayTwoWorking: boolean;
    logs?: Array<ILogsInput>;
    scheduledOnTimes?: Array<IScheduleInput>;
    whatsappWarningsOn: boolean;
    settingType: string;
}

export interface ISettingsInputArgs {
    id?: string;
    plantId: string;
    input: ISettingsInput;
}

export interface deleteSettingsArgs {
    id?: string;
    plantId: string;
    settingName: string;
}

export interface deleteShopArgs {
    id: string;
}

export interface ILogsInput {
    product_id: string;
    name?: string;
    image?: string;
    quantity: number;
    recicledQuantity: number;
    unit?: string;
    price: number;
}

export interface IScheduleInput {
    product_id: string;
    name?: string;
    image?: string;
    quantity: number;
    recicledQuantity: number;
    unit?: string;
    price: number;
}


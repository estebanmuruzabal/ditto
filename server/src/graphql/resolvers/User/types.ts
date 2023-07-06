
export interface ISettingsInput {
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
    sendWhatsappWarnings: boolean;
    settingName: string;
}

export interface ISettingsInputArgs {
    id?: string;
    controllerId: string;
    input: ISettingsInput;
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


import { SensorsTypes } from "./constant";

export interface ILogs {
    reading: number;
    timestamp: string;
    started?: boolean;
    finished?: boolean;
}

export interface ISetting {
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
    logs?: Array<ILogs>;
    scheduledOnTimes?: Array<IScheduleInput>;
    whatsappWarningsOn: boolean;
    settingType: SensorsTypes;
}

export interface IScheduleInput {
    daysToRepeat: Array<number>;
    startTime: string;
    endTime: string;
    enabled: boolean;
    smartLight: boolean;
}


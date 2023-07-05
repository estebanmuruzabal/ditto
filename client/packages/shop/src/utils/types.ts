export interface IHumidityLogs {
    humidity: number;
    timestamp: string;
    startedWatering?: boolean;
    finishedWatering?: boolean;
}

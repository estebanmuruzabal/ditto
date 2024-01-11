import { IOrderTracker } from "../types";

export const spanishOrderTracker: Array<IOrderTracker> = [
    {
        status: "Pendiente",
        ordering: 1,
        is_current: true,
        step_competed: true,
    },
    {
        status: "Recibido",
        ordering: 2,
        is_current: false,
        step_competed: false,
    },
    {
        status: "Procesando",
        ordering: 3,
        is_current: false,
        step_competed: false,
    },
    {
        status: "EnTransito",
        ordering: 4,
        is_current: false,
        step_competed: false,
    },
    {
        status: "Entregado",
        ordering: 5,
        is_current: false,
        step_competed: false,
    },
    {
        status: "Cancelado",
        ordering: 6,
        is_current: false,
        step_competed: false,
    },
    {
        status: "Fallado",
        ordering: 7,
        is_current: false,
        step_competed: false,
    }
];

export const englishOrderTracker: Array<IOrderTracker> = [
    {
        status: "Pending",
        ordering: 1,
        is_current: true,
        step_competed: true,
    },
    {
        status: "Received",
        ordering: 2,
        is_current: false,
        step_competed: false,
    },
    {
        status: "Processing",
        ordering: 3,
        is_current: false,
        step_competed: false,
    },
    {
        status: "In Transit",
        ordering: 4,
        is_current: false,
        step_competed: false,
    },
    {
        status: "Delivered",
        ordering: 5,
        is_current: false,
        step_competed: false,
    },
    {
        status: "Cancelled",
        ordering: 6,
        is_current: false,
        step_competed: false,
    },
    {
        status: "Failed",
        ordering: 7,
        is_current: false,
        step_competed: false,
    }
];

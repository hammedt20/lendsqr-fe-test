import { ReactNode } from "react";

export interface routerType {
    title: string,
    path: string,
    element: JSX.Element,
    requiresAuth: Boolean,
}
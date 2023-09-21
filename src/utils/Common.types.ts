import { CSSProperties } from "react";

export interface CommonTypes {
    elementStyle?: CSSProperties
}

export type Colors = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'light' | 'dark';
export type StatusColors = 'error' | 'warning' | 'info' | 'success';
export type ThemeColors = 'light' | 'dark';
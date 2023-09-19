import { ChangeEvent } from "react";

export interface InputProps {
    disabled?: boolean;
    focusedColor?: string;
    color?: string;
    focused?: boolean;
    label?: string;
    required?: boolean;
    requiredMessage?: string;
    textColor?: string;
    type?: 'text' | 'number' | 'email' | 'password';
    value?: string | number;
    width?: string;
    onValueChanged?: (e: ChangeEvent<HTMLInputElement>) => void;
}
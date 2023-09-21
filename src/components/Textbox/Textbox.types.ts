import { ChangeEvent } from "react";
import { CommonTypes } from "../../utils/Common.types";

export interface InputProps extends CommonTypes {
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
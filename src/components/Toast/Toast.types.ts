import { StatusColors } from "../../utils/Common.types";

export interface ToastProps {
    title?: string;
    mode?: StatusColors;
    message?: string;
    elementStyle?: React.CSSProperties;
    size?: 'small' | 'medium' | 'large';
    color?: string;
    textColor?: string;
}
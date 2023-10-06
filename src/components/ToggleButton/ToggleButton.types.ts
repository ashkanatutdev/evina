import { CommonTypes, StatusColors, UIColors } from "../../utils/Common.types";

export interface ToggleButtonProps extends CommonTypes {
    color?: UIColors;
    value?: boolean;
    onValueChanged?: (e: boolean) => void
}
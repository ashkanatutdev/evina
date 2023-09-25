import { ThemeColors } from "../../utils/Common.types";

export interface ModalProps {
    modalHeader?: boolean;
    hasCloseBtn?: boolean;
    theme?: ThemeColors;
    modalContext?: any;
    modalFooter?: boolean;
    headerTitle?: any;
    footerContext?: any;
    width?: string;
    height?: string;
}

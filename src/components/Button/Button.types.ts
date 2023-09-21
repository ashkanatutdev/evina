import { MouseEventHandler } from "react";
import { Colors, CommonTypes } from "../../utils/Common.types";

export interface ButtonProps extends CommonTypes {
  color?: Colors;
  disabled?: boolean;
  height?: string;
  outline?: boolean;
  text?: string;
  textSize?: string;
  width?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}


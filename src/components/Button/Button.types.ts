import { MouseEventHandler } from "react";
import { Colors } from "../../utils/common";

export interface ButtonProps {
  color?: Colors
  disabled?: boolean;
  outline?: boolean;
  size?: "small" | "medium" | "large";
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}




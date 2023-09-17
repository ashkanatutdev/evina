import { MouseEventHandler } from "react";

type Colors = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'light' | 'dark';

export interface ButtonProps {
  text?: string;
  color?: Colors
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}


import { MouseEventHandler } from "react";

type Colors = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'light' | 'dark';

export interface ButtonProps {
  color?: Colors
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export enum Variants {
  primary = "#008ae6",
  secondary = "#666699",
  error = "#ff4d4d",
  warning = "#ffa64d",
  info = "#0099cc",
  success = "#88cc00",
  light = "#eff5f5",
  dark = "#141f1f",
}

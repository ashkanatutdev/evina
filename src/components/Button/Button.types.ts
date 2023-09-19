import { MouseEventHandler } from "react";

export type Colors = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'light' | 'dark';

export interface ButtonProps {
  color?: Colors
  disabled?: boolean;
  outline?: boolean;
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

export const getColor = (variant: Colors): string => {
  let color: string = ''
  switch(variant){
    case 'primary':
      color = Variants.primary
      break;
    case 'secondary':
      color = Variants.secondary
      break;
    case 'error':
      color = Variants.error
      break;
    case 'warning':
      color = Variants.warning
      break;
    case 'info':
      color = Variants.info
      break;
    case 'success':
      color = Variants.success
      break;
    case 'dark':
      color = Variants.dark
      break;
    case 'light':
      color = Variants.light
      break;
  }
  return color
}


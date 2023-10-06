import { Colors, StatusColors, ThemeColors, UIColors } from "./Common.types";

export enum Variants {
  primary = "#008ae6",
  secondary = "#666699",
  error = "#ff4d4d",
  warning = "#ffa64d",
  info = "#0099cc",
  success = "#88cc00",
  light = "#eff5f5",
  dark = "#141f1f"
}
export enum UIVariants {
  primary = "#008ae6",
  secondary = "#666699",
  error = "#ff4d4d",
  warning = "#ffa64d",
  info = "#0099cc",
  success = "#88cc00"
}
export enum StatusVariants {
  error = "#ff4d4d",
  warning = "#ffa64d",
  info = "#0099cc",
  success = "#88cc00"
}
export enum ThemeVariants {
  light = "#eff5f5",
  dark = "#141f1f"
}

export const getColor = (variant: Colors): string => {
  let color: string = ''
  switch (variant) {
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
export const getUIColor = (variant: UIColors): string => {
  let color: string = ''
  switch (variant) {
    case 'primary':
      color = UIVariants.primary
      break;
    case 'secondary':
      color = UIVariants.secondary
      break;
    case 'error':
      color = UIVariants.error
      break;
    case 'warning':
      color = UIVariants.warning
      break;
    case 'info':
      color = UIVariants.info
      break;
    case 'success':
      color = UIVariants.success
      break;
  }
  return color
}
export const getStatusColor = (variant: StatusColors): string => {
  let color: string = ''
  switch (variant) {
    case 'error':
      color = StatusVariants.error
      break;
    case 'warning':
      color = StatusVariants.warning
      break;
    case 'info':
      color = StatusVariants.info
      break;
    case 'success':
      color = StatusVariants.success
      break;
  }
  return color
}
export const getThemeColor = (variant: ThemeColors): string => {
  let color: string = ''
  switch (variant) {
    case 'light':
      color = ThemeVariants.light
      break;
    case 'dark':
      color = ThemeVariants.dark
      break;
  }
  return color
}
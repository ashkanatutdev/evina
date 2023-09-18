import React from "react";
import styled from "styled-components";
import { ButtonProps, Variants } from "./Button.types";

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 0.7rem;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  cursor: ${(props) =>
  (!props.disabled
    ? 'pointer' : 'default')};
  padding: ${(props) =>
    props.size === "small"
      ? "7px 25px 8px"
      : props.size === "medium"
        ? "9px 30px 11px"
        : "14px 30px 16px"};
    background-color: ${(props) =>
  (props.color === 'primary'
    ? Variants.primary
    : props.color === 'secondary'
      ? Variants.secondary
      : props.color === 'warning'
        ? Variants.warning
        : props.color === 'error'
          ? Variants.error
          : props.color === 'info'
            ? Variants.info
            : props.color === 'success'
              ? Variants.success
              : props.color === 'light'
                ? Variants.light
                : Variants.dark)};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  color: ${(props) =>
  (props.color === 'light'
    ? Variants.dark
    : Variants.light)};
  &:hover {
    color: ${(props) =>
  (!props.disabled && props.color === 'primary'
    ? Variants.primary
    : !props.disabled && props.color === 'secondary'
      ? Variants.secondary
      : !props.disabled && props.color === 'warning'
        ? Variants.warning
        : !props.disabled && props.color === 'error'
          ? Variants.error
          : !props.disabled && props.color === 'info'
            ? Variants.info
            : !props.disabled && props.color === 'success'
              ? Variants.success
              : !props.disabled && props.color === 'light'
                ? Variants.dark
                : !props.disabled  && Variants.dark)};
    border: ${(props) =>
  (!props.disabled && props.color === 'primary'
    ? `${Variants.primary} 1px solid`
    : !props.disabled && props.color === 'secondary'
      ? `${Variants.secondary} 1px solid`
      : !props.disabled && props.color === 'warning'
        ? `${Variants.warning} 1px solid`
        : !props.disabled && props.color === 'error'
          ? `${Variants.error} 1px solid`
          : !props.disabled && props.color === 'info'
            ? `${Variants.info} 1px solid`
            : !props.disabled && props.color === 'success'
              ? `${Variants.success} 1px solid`
              : !props.disabled && props.color === 'light'
                ? `${Variants.dark} 1px solid`
                : !props.disabled && `${Variants.dark} 1px solid`)};
    background-color: ${(props) => (!props.disabled && Variants.light)};
    font-size: 0.7rem
  }
  &:active {
    padding: ${(props) =>
    !props.disabled && props.size === "small"
      ? "5px 23px 6px"
      : !props.disabled && props.size === "medium"
        ? "7px 28px 9px"
        : !props.disabled && "12px 28px 14px"};
  }
`;

const Button: React.FC<ButtonProps> = ({
  size,
  color,
  disabled,
  text,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      color={color}
      disabled={disabled}
      size={size}
      {...props}>
      {text}
    </StyledButton>
  );
};

export default Button;
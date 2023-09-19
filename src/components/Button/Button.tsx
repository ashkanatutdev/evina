import React from "react";
import styled from "styled-components";
import { ButtonProps, Colors, Variants, getColor } from "./Button.types";

const StyledButton = styled.button.withConfig({ shouldForwardProp: prop => !["outline"].includes(prop) }) <ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 0.7rem;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  border: ${(props) => (props.outline && props.color === 'light' ? `none` : props.outline && `${getColor(props.color as Colors)} 1px solid`)};
  cursor: ${(props) => (!props.disabled ? 'pointer' : 'default')};
  padding: ${(props) => props.size === "small" ? "7px 25px 8px" : props.size === "medium" ? "9px 30px 11px" : "14px 30px 16px"};
  background-color: ${(props) => (props.outline ? Variants.light : getColor(props.color as Colors))};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  color: ${(props) => (props.outline ? props.color === 'light' ? Variants.dark : getColor(props.color as Colors) : props.color === 'light' ? Variants.dark : Variants.light)};
  &:hover {
    color: ${(props) => (!props.outline ? !props.disabled && props.color === 'light' ? Variants.light : !props.disabled && getColor(props.color as Colors) : !props.disabled && props.color === 'light' ? Variants.light : !props.disabled && Variants.light)};
    border: ${(props) => (!props.outline ? !props.disabled && props.color === 'light' ? `${Variants.dark} 1px solid` : !props.disabled && `${getColor(props.color as Colors)} 1px solid` : !props.disabled && 'none')};
    background-color: ${(props) => (!props.outline ? !props.disabled && props.color === 'light' ? Variants.dark : !props.disabled && Variants.light : !props.disabled && props.color === 'light' ? Variants.dark : !props.disabled && getColor(props.color as Colors))};
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

const Button: React.FC<ButtonProps> = ({ size, color, disabled, outline, text, onClick, ...props }) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      color={color}
      outline={outline}
      disabled={disabled}
      size={size}
      {...props}>
      {text}
    </StyledButton>
  );
};

export default Button;
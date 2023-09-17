import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 0.7rem;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: ${(props) =>
    props.size === "small"
      ? "7px 25px 8px"
      : props.size === "medium"
        ? "9px 30px 11px"
        : "14px 30px 16px"};
    background-color: ${(props) =>
    props.color === 'primary'
      ? "#1a63b8"
      : props.color === 'secondary'
        ? "#656565"
        : props.color === 'warning'
          ? "#FAB848"
          : props.color === 'error'
            ? "#FA4848"
            : props.color === 'info'
              ? "#2d71a1"
              : props.color === 'success'
                ? "#52c86e"
                : props.color === 'light'
                  ? "#ececec"
                  : "#2c2c2c"};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  color: ${(props) =>
    props.color === 'light'
      ? "#292929"
      : "#f2f2f2"};
  &:hover {
    color: ${(props) =>
    props.color === 'primary'
      ? "#1a63b8"
      : props.color === 'secondary'
        ? "#656565"
        : props.color === 'warning'
          ? "#FAB848"
          : props.color === 'error'
            ? "#FA4848"
            : props.color === 'info'
              ? "#2d71a1"
              : props.color === 'success'
                ? "#52c86e"
                : props.color === 'light'
                  ? "#2e2e2e"
                  : "#2c2c2c"};
    border: ${(props) =>
    props.color === 'primary'
      ? "#1a63b8 1px solid"
      : props.color === 'secondary'
        ? "#656565 1px solid"
        : props.color === 'warning'
          ? "#FAB848 1px solid"
          : props.color === 'error'
            ? "#FA4848 1px solid"
            : props.color === 'info'
              ? "#2d71a1 1px solid"
              : props.color === 'success'
                ? "#52c86e 1px solid"
                : props.color === 'light'
                  ? "#2e2e2e 1px solid"
                  : "#2c2c2c 1px solid"};
    background-color: white;
    font-size: 0.7rem
  }
  &:active {
    border: solid 2px #1b116e;
    color: black;
    padding: ${(props) =>
    props.size === "small"
      ? "5px 23px 6px"
      : props.size === "medium"
        ? "7px 28px 9px"
        : "12px 28px 14px"};
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
import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";
import { Variants, getColor } from '../../utils/common'
import { Colors } from "../../utils/Common.types";

const StyledButton = styled.button.withConfig({ shouldForwardProp: prop => !["outline", "textSize"].includes(prop) }) <ButtonProps>`
  border: 0;
  line-height: 1;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  font-size: ${props => props.textSize ? props.textSize : '0.7rem'};
  border: ${(props) => (props.outline && props.color === 'light' ? `none` : props.outline && `${getColor(props.color as Colors)} 1px solid`)};
  cursor: ${(props) => (!props.disabled ? 'pointer' : 'default')};
  width: ${(props) => props.width ? props.width : '80px'};
  height: ${(props) => props.height ? props.height : '35px'};
  background-color: ${(props) => (props.outline ? Variants.light : getColor(props.color as Colors))};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  color: ${(props) => (props.outline ? props.color === 'light' ? Variants.dark : getColor(props.color as Colors) : props.color === 'light' ? Variants.dark : Variants.light)};
  &:hover {
    color: ${(props) => (!props.outline ? !props.disabled && props.color === 'light' ? Variants.light : !props.disabled && getColor(props.color as Colors) : !props.disabled && props.color === 'light' ? Variants.light : !props.disabled && Variants.light)};
    border: ${(props) => (!props.outline ? !props.disabled && props.color === 'light' ? `${Variants.dark} 1px solid` : !props.disabled && `${getColor(props.color as Colors)} 1px solid` : !props.disabled && 'none')};
    background-color: ${(props) => (!props.outline ? !props.disabled && props.color === 'light' ? Variants.dark : !props.disabled && Variants.light : !props.disabled && props.color === 'light' ? Variants.dark : !props.disabled && getColor(props.color as Colors))};
    font-size: ${props => props.textSize ? props.textSize : '0.7rem'};
  }
  &:active {
    width: ${(props) => !props.disabled && props.width ? `calc(${props.width} - 2px)` : !props.disabled ? '78px' : '80px'};
    height: ${(props) => !props.disabled && props.height ? `calc(${props.height} - 2px)` : !props.disabled ? '33px' : '35px'};
  }
`;

const Button: React.FC<ButtonProps> = ({
  width,
  height,
  elementStyle,
  color,
  disabled,
  outline,
  text,
  textSize,
  onClick,
  ...props
}) => {
  return (
    <div style={elementStyle}>
      <div style={{ position: 'relative', width: width ? width : '80px', height: height ? height : '35px' }}>
      
      <StyledButton
        type="button"
        onClick={onClick}
        color={color}
        outline={outline}
        disabled={disabled}
        width={width}
        height={height}
        textSize={textSize}
        {...props}>
        {text}
      </StyledButton>
      
    </div>
    </div>
  );
};

export default Button;
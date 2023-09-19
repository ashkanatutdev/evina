import React, { useState } from 'react'
import styled from 'styled-components'
import { InputProps } from './Textbox.types'
import { Variants } from '../../utils/common';

const StyledInput = styled.input.withConfig({ shouldForwardProp: prop => !["focusedColor", "textColor"].includes(prop) }) <InputProps>`
position: absolute;
top: 0;
left: 0;
width:  ${(props) => props.width || '100%'};
height: 17px;
border: none;
border-bottom: ${props => !props.required ? props.color ? `2px solid ${props.color}` : `2px solid ${Variants.dark}` : props.value && props.color ? `2px solid ${props.color}` : !props.value ? `2px solid ${Variants.error}` : props.color ? `2px solid ${props.color}` : `2px solid ${Variants.dark}`};
background-color: transparent;
padding-top: 12px;
padding-bottom: 8px;
opacity: ${props => props.disabled ? '0.5' : '1'};
z-index: 10;
color: ${props => props.textColor ? props.textColor : Variants.dark} ;
&:hover{
    background-color: #dbdbdb50;
    transition: ease all 200ms;
}
&:focus {
    transition: ease all 200ms ;
    outline: none;
    border-bottom: ${props => !props.required ? props.focusedColor ? `3px solid ${props.focusedColor}` : `3px solid ${Variants.primary}` : !props.value ? `3px solid ${Variants.error}` : props.focusedColor ? `3px solid ${props.focusedColor}` : `3px solid ${Variants.primary}`};
}
`;

const StyledLabel = styled.div.withConfig({ shouldForwardProp: prop => !["focused"].includes(prop) }) <InputProps>`
    color: ${props => props.required ? props.color ? props.color : Variants.dark : !props.value ? Variants.error : props.color ? props.color : Variants.dark};
    z-index: 100;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    opacity: ${props => props.disabled ? '0.5' : '1'};
    align-items: ${props => !props.focused ? props.value ? 'flex-start' : 'center': 'flex-start'};
    font-size: ${props => !props.focused ? props.value ? '0.6rem' : '0.8rem': '0.6rem'};
    transition: font-size 100ms linear;
`;

const InputMessage = styled.div<InputProps>`
    font-size: 0.65rem;
    color: ${Variants.error};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-top: 3px;
`;


const Textbox: React.FC<InputProps> = (props) => {
    const [focus, setFocus] = useState<boolean>(false)
    return (
        <div style={{ position: 'relative', width: props.width || '100%' }}>
            {props.label &&
                <StyledLabel
                    focused={focus}
                    value={props.value}
                    color={props.color}>
                    {props.label}
                </StyledLabel>}
            <StyledInput
                value={props.value}
                required={props.required}
                disabled={props.disabled}
                onChange={props.onValueChanged}
                type={props.type || 'text'}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                color={props.color}
                focusedColor={props.focusedColor}
                textColor={props.textColor}
            />
            {props.required && props.value?.toString().length === 0 &&
                <InputMessage>{props.requiredMessage ? props.requiredMessage : 'Required field...'}</InputMessage>}
        </div>
    )
}

export default Textbox
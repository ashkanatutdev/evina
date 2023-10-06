import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ToggleButtonProps } from './ToggleButton.types'
import { getColor } from '../../utils/common';
import { UIColors } from '../../utils/Common.types';

const StyledToggleButtonContainer = styled.div<ToggleButtonProps>`
    width: 40px;
    height: 20px;
    background-color: white;
    border: 2px double;
    border-color: ${props => props.value ? getColor(props.color as UIColors) : 'rgb(180,180,180)'};
    border-radius: 3px;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: ${props => props.value ? 'flex-end' : 'flex-start'};
    cursor: pointer;
`;
const StyledToggleButtonToggler = styled.div<ToggleButtonProps>`
    width: 60%;
    height: 100%;
    border-radius: 2px;
    background-color: ${props => props.value ? getColor(props.color as UIColors) : 'rgb(180,180,180)'};
    border-radius: 3px;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
`;
const StyledToggleButtonLabel = styled.p`
    font-size: 0.5rem;
    font-weight: bold;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const ToggleButton: React.FC<ToggleButtonProps> = ({ color = 'primary', value, onValueChanged, elementStyle }: ToggleButtonProps) => {
    const [currentValue, setCurrentValue] = useState<boolean>(value as boolean)
    useEffect(() => { setCurrentValue(value as boolean) }, [value])
    useEffect(() => { onValueChanged && onValueChanged(currentValue) }, [currentValue])
    return (
        <div style={elementStyle}>
            <StyledToggleButtonContainer onClick={() => setCurrentValue(!currentValue)} color={color} value={currentValue}>
                <StyledToggleButtonToggler color={color} value={currentValue}>
                    <StyledToggleButtonLabel>{currentValue ? 'ON' : 'OFF'}</StyledToggleButtonLabel>
                </StyledToggleButtonToggler>
            </StyledToggleButtonContainer>
        </div>

    )
}

export default ToggleButton
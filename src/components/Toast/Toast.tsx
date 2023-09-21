import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import { ToastProps } from './Toast.types';
import { BiSolidErrorCircle, BiSolidError } from 'react-icons/bi'
import { IoCheckmarkDoneCircle, IoInformationCircle } from 'react-icons/io5'
import { StatusVariants } from '../../utils/common';

const StyledAlert = styled.div<ToastProps>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: ${props => props.size === 'small' ? '350px' : props.size === 'medium' ? '500px' : props.size === 'large' ? '700px' : '500px'};
    height: 80px;
    background-color: ${props => !props.color ? props.mode === 'error' ? StatusVariants.error : props.mode === 'info' ? StatusVariants.info : props.mode === 'success' ? StatusVariants.success : StatusVariants.warning : props.color};
    padding-left: 20px;
    border-radius: 5px;
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border: 6px double white ;
    box-shadow: 2px 3px 5px #acacac95;
    position: relative;
`;
const StyledAlertTitle = styled.div.withConfig({ shouldForwardProp: prop => !["textColor"].includes(prop) }) <ToastProps>`
    color:${props => props.textColor ? props.textColor : 'white'};
    font-size: 0.8rem;
    font-weight: bold;
    letter-spacing: 1px;
    margin-top: 10px;
    max-width: 300px;
    width: max-content;
    text-transform: capitalize;
`;
const StyledAlertMessage = styled.div.withConfig({ shouldForwardProp: prop => !["textColor"].includes(prop) }) <ToastProps>`
    color:${props => props.textColor ? props.textColor : 'white'};
    font-size: 0.8rem;
    font-weight: normal;
    margin-top: 2px;
    max-width: 400px;
    width: max-content;
`;
const StyledAlertIcon = styled.div.withConfig({ shouldForwardProp: prop => !["textColor"].includes(prop) }) <ToastProps>`
    color:${props => props.textColor ? props.textColor : 'white'};
    font-size: 0.8rem;
    max-width: 400px;
    width: max-content;
    margin-top: 10px;
    margin-right: 15px;
`;

const Toast: React.FC<ToastProps> = ({ title, message, mode, elementStyle, size, color, textColor }) => {
    useEffect(() => {
        const tiemout = setTimeout(() => {
            let container = document.getElementsByClassName('ev-alert-temporary-container')
            container[0]?.remove()
        }, 5000);

        return () => {
            clearTimeout(tiemout);
        }
    }, []);
    return (
        <div style={elementStyle}>
            <StyledAlert mode={mode} size={size} color={color}  >
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                    <StyledAlertIcon textColor={textColor}>
                        {mode === 'error' ? <BiSolidErrorCircle size={18} /> : mode === 'info' ? <IoInformationCircle size={18} /> : mode === 'success' ? <IoCheckmarkDoneCircle size={18} /> : <BiSolidError size={18} />}
                    </StyledAlertIcon>
                    <div >
                        <StyledAlertTitle textColor={textColor}>{title}</StyledAlertTitle >
                        <StyledAlertMessage textColor={textColor}>{message}</StyledAlertMessage>
                    </div>
                </div>
            </StyledAlert>
        </div>
    )
}

let wrapper = document.createElement('div')
wrapper.setAttribute("class", 'ev-alert-temporary-wrapper')
const ShowToast = ({ mode, message, title, elementStyle, size, color, textColor }: ToastProps) => {

    let container = document.createElement('div')
    container.setAttribute("class", 'ev-alert-temporary-container')
    wrapper.appendChild(container)

    wrapper.style.display = 'flex'
    wrapper.style.flexDirection = 'column'
    wrapper.style.justifyContent = 'flex-end'
    wrapper.style.alignItems = 'flex-end'
    wrapper.style.position = 'fixed'
    wrapper.style.bottom = '0px'
    wrapper.style.right = '0px'

    document.body.appendChild(wrapper)
    const root = ReactDOM.createRoot(
        container
    );
    root.render(
        <React.StrictMode>
            <Toast message={message} mode={mode} title={title} elementStyle={elementStyle} size={size} color={color} textColor={textColor} />
        </React.StrictMode>
    );
}

export default ShowToast
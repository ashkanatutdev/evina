import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import { ToastProps } from './Toast.types';
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
    const errorIcon =
        <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            height="1em"
            width="1em"
        >
            <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z" />
        </svg>
    const warningIcon =
        <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            height="1em"
            width="1em"
        >
            <path d="M449.07 399.08L278.64 82.58c-12.08-22.44-44.26-22.44-56.35 0L51.87 399.08A32 32 0 0080 446.25h340.89a32 32 0 0028.18-47.17zm-198.6-1.83a20 20 0 1120-20 20 20 0 01-20 20zm21.72-201.15l-5.74 122a16 16 0 01-32 0l-5.74-121.95a21.73 21.73 0 0121.5-22.69h.21a21.74 21.74 0 0121.73 22.7z" />
        </svg>
    const infoIcon =
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
        >
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </svg>
    const successIcon =
        <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            height="1em"
            width="1em"
        >
            <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm48.19 121.42l24.1 21.06-73.61 84.1-24.1-23.06zM191.93 342.63L121.37 272 144 249.37 214.57 320zm65 .79L185.55 272l22.64-22.62 47.16 47.21 111.13-127.17 24.1 21.06z" />
        </svg>
    return (
        <div style={elementStyle}>
            <StyledAlert mode={mode} size={size} color={color}  >
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                    <StyledAlertIcon textColor={textColor}>
                        {mode === 'error' ? errorIcon : mode === 'info' ? infoIcon : mode === 'success' ? successIcon : warningIcon}
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
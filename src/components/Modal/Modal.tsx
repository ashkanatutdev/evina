import React, { useState } from 'react'
import styled from 'styled-components';
import { ModalProps } from './Modal.types';
import { AiFillCloseSquare } from 'react-icons/ai'
import ReactDOM from 'react-dom/client';

const StyledModalContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 20000099;
`;
const StyledModal = styled.div<ModalProps>`
    background-color: #f7f7f7;
    width: ${props => props.width ? props.width : '500px'};
    height: ${props => props.height ? props.height : '500px'};
    border-radius: 5px;
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border: 6px double #e0e0e0 ;
    position: relative;
    overflow: hidden;
    box-shadow: 5px 5px 1px #686868;
    z-index: 20000100;
`;
const StyledModalHeader = styled.div<ModalProps>`
    background-color: #e6e6e6;
    width: calc(100% - 20px);
    height: 40px;
    border-bottom: 1px solid #e0e0e0 ;
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
`;
const StyledModalHeaderTitle = styled.div<ModalProps>`
    background-color: transparent;
    color: #4b4b4b;
    font-size: 0.8rem;
    font-weight: bold;
    text-transform: capitalize;
    letter-spacing: 1px;
`;
const StyledModalCleseBtn = styled.div<ModalProps>`
    background-color: transparent;
    color: #4b4b4b;
    font-weight: bold;
    cursor: pointer;
`;
const StyledModalFooter = styled.div<ModalProps>`
    background-color: #e6e6e6;
    width: calc(100% - 20px);
    border-top: 1px solid #e0e0e0 ;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 10px 7px 10px;
`;
const StyledModalContext = styled.div<ModalProps>`
    background-color: transparent;
    width: calc(100%);
    
`;

const Modal: React.FC<ModalProps> = ({ headerTitle, modalHeader, hasCloseBtn, footerContext, modalFooter, modalContext, height, width }) => {
    const [modalsCount] = useState<number | undefined>(document.getElementsByClassName('ev-modal-temporary-wrapper')[0].childElementCount)
    const modalClose = () => {
        let wrapper = document.getElementsByClassName('ev-modal-temporary-wrapper')[0]
        wrapper.removeChild(wrapper.children[modalsCount as number - 1])
        if (modalsCount === 1) {
            wrapper.remove()
        }
    }
    return (
        <StyledModalContainer>
            <div style={{ transform: `translate(${(modalsCount as number - 1) * 10}px , ${(modalsCount as number - 1) * 10}px)` }}>
                <StyledModal height={height} width={width}>
                    {modalHeader && <StyledModalHeader>
                        <StyledModalHeaderTitle>
                            {headerTitle}
                        </StyledModalHeaderTitle>
                        {hasCloseBtn && <StyledModalCleseBtn>
                            <AiFillCloseSquare size={20} onClick={modalClose} />
                        </StyledModalCleseBtn>}
                    </StyledModalHeader>}
                    <StyledModalContext>
                        {modalContext}
                    </StyledModalContext>
                    {modalFooter && <StyledModalFooter>
                        {footerContext}
                    </StyledModalFooter>}
                </StyledModal>
            </div>
        </StyledModalContainer>
    )
}

let wrapper = document.createElement('div')
wrapper.setAttribute("class", 'ev-modal-temporary-wrapper')
wrapper.style.backgroundColor = '#00000050'
wrapper.style.position = 'absolute'
wrapper.style.top = '0'
wrapper.style.left = '0'
wrapper.style.width = '100%'
wrapper.style.height = '100%'

class ModalClass {
    public static show({ headerTitle, modalHeader, hasCloseBtn, footerContext, modalFooter, modalContext, height, width }: ModalProps) {
        let container = document.createElement('div')
        container.setAttribute("class", 'ev-modal-temporary-container')
        wrapper.appendChild(container)
        document.body.appendChild(wrapper)
        const root = ReactDOM.createRoot(
            container
        );
        root.render(
            <React.StrictMode>
                <Modal headerTitle={headerTitle} modalHeader={modalHeader} hasCloseBtn={hasCloseBtn} footerContext={footerContext} modalFooter={modalFooter} modalContext={modalContext} height={height} width={width} />
            </React.StrictMode>
        );
    }
    public static hide() {
        let wrapper = document.getElementsByClassName('ev-modal-temporary-wrapper')[0]
        let count = wrapper.childElementCount
        wrapper.removeChild(wrapper.children[count as number - 1])
        if (count === 1) {
            wrapper.remove()
        }
    }
}

export default ModalClass
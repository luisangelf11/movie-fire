import React from 'react';
import './Modal.css';

export default function Modal({CloseModal, openId, elementId, children}){
    const handelModalContainerClick =(e)=> e.stopPropagation();
    return(
        <article onClick={CloseModal} className={`modal ${(openId !== null && openId === elementId) ? "active" :"no-active"}`}>
            <div className='modal-container' onClick={handelModalContainerClick}>
                <button onClick={CloseModal} className='modal-close'>X</button>
                {children}
            </div>
        </article>
    );
}
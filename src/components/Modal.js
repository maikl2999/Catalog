import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="dimmer-modals content-center">
            <div onClick={(e) => e.stopPropagation()} className="stabdart-modal modal-dialog">
                <div className="modal-content">
                    <div className="modal-header"><h5 className="modal-title">{props.title}</h5></div>
                    <div className="modal-body">{props.content}</div>
                    <div className="modal-footer">{props.action}</div>
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;
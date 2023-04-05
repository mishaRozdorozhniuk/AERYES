import React from 'react';
import './Modal.css'

const Modal = ({handleShowModal}) => {
    return (
        <div className="modal">
            <p className="modal-info">
                <p>"This service does not collect or store any user metadata.</p>

                We do not track or monitor user activity, nor do we collect any information about user behavior or preferences."
            </p>
            <button onClick={handleShowModal} className="got-it-button">GOT IT!</button>
        </div>
    );
};

export default Modal;
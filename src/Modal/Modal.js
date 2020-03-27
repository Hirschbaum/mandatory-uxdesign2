import React from 'react';
import './Modal.css';
//import ReactDOM from 'react-dom';

const Modal = () => {
   
return (
    <div className="modalContainer">
        <div className="modalBox">
            <div className="modalHeadline">
                <h3> Congratulations!</h3>
            </div>

            <p>
                You have answered 10/
                <span className='correct--answers'>10 </span>
                correctly!
            </p>
            <p>Do you want to start a new quiz?</p>

            <div className="modalsButtonsContainer">
                <button className="modalButtons">
                    Cancel
                </button>

                <button
                    className="modalButtons blueButtons"
                >
                    Restart
                </button>
            </div>
        </div>
    </div>
    
);
};

export default Modal;

import React from 'react';
import './Modal.css';
import ReactDOM from 'react-dom';

const Modal = (props) => {
    /*const handleModal = () => {
		props.updateModal(false);
    };*/
    
    return ReactDOM.createPortal(
        <div className="modalContainer">
            <div className="modalBox">
                <div className="modalHeadline">
                    <h3> Congratulations!</h3>
                </div>

                <p>
                    You have answered 
                <span className='correct--answers'> 10/ {props.scores} </span>
                correctly!
            </p>


                <div className="modalsButtonsContainer">
                    <button className="modalButtons">
                        Back to Main
                </button>

                    <button
                        className="modalButtons blueButtons"
                    >
                        New Quiz
                </button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Modal;

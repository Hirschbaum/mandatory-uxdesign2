import React from 'react';
import './Modal.css';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import FocusTrap from 'focus-trap-react';

const Modal = (props) => {
    
    const closeModal = () => {
        props.handleModal();
    }

    const newQuiz = () => {
        closeModal();
        window.scrollTo(0, 0);
        props.getQuiz();
    }

    return ReactDOM.createPortal(
        <FocusTrap>
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
                       <Link style={{textDecoration: 'none'}} to='/'>Back to Main</Link>
                    </button>

                    <button
                        className="modalButtons blueButtons"
                        onClick={()=> newQuiz()}
                    >
                        <Link style={{textDecoration: 'none', color: '#fff'}}  to='/quiz'>New Quiz</Link>
                    </button>
                </div>
            </div>
        </div></FocusTrap>,
        document.body
    );
};

export default Modal;

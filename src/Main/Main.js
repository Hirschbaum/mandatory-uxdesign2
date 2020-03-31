import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

class Main extends React.Component {
    render() {
        return (
            <div style={{ position: 'absolute', top: '100px', left: '80px' }}>
                <Link className='links' to="/quiz">
                    <button className="mdc-button mdc-button--raised" style={{backgroundColor: '#484C7F'}}>
                        <span className="mdc-button__ripple"></span> start quiz
                    </button>
                </Link>
            </div>
        )
    }
}

export default Main;
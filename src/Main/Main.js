import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

class Main extends React.Component {
    render() {
        return (
            <div style={{ position: 'absolute', top: '50vw', left: '50vw' }}>
                <Link className='links' to="/quiz">
                    <button>Start Quiz</button>
                </Link>
            </div>
        )
    }
}

export default Main;
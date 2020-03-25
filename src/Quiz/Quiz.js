import React from 'react';
import './Quiz.css';
import { Helmet } from 'react-helmet';

export default class Quiz extends React.Component {
    render() {
        return(
            <div>
                <Helmet>
                    <title>Quiz</title>
                </Helmet>
                <h1>Quiz</h1>
            </div>
        )
    }
}
import React from 'react';
import './Quiz.css';
import { Helmet } from 'react-helmet';
import axios from 'axios';

class Quiz extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quiz: [],
        };
    }

    componentDidMount() {

        axios.get('https://opentdb.com/api.php?amount=10', {})
            .then(response => {
                let data = response.data.results;
                console.log(data);
                this.setState({ quiz: response.data.results })
            })
            .catch(error => {
                console.log('Error while fetching data from API', error);
            });
    }

    render() {

        return (
            <div>
                <div>
                    <h1>Quiz</h1>
                    {this.state.quiz.map(x => (

                        <div key={x}>

                            <p> {x.question}</p>

                            <div className="mdc-form-field">
                                <div className="mdc-radio">
                                    <input className="mdc-radio__native-control" type="radio" id="x.correct_answer" name={x.question} />
                                    <div className="mdc-radio__background">
                                        <div className="mdc-radio__outer-circle"></div>
                                        <div className="mdc-radio__inner-circle"></div>
                                    </div>
                                    <div className="mdc-radio__ripple"></div>
                                </div>
                                <label htmlFor={x.correct_answer}>{x.correct_answer}</label>
                            </div>

                            <div className="mdc-form-field">
                                <div className="mdc-radio">
                                    <input className="mdc-radio__native-control" type="radio" id={x.incorrect_answers[0]} name={x.question} />
                                    <div className="mdc-radio__background">
                                        <div className="mdc-radio__outer-circle"></div>
                                        <div className="mdc-radio__inner-circle"></div>
                                    </div>
                                    <div className="mdc-radio__ripple"></div>
                                </div>
                                <label htmlFor={x.incorrect_answers[0]}>{x.incorrect_answers[0]}</label>
                            </div>

                            {x.incorrect_answers.length >= 2 ?
                            <> 
                            <div className="mdc-form-field">
                                <div className="mdc-radio">
                                    <input className="mdc-radio__native-control" type="radio" id={x.incorrect_answers[1]} name={x.question} />
                                    <div className="mdc-radio__background">
                                        <div className="mdc-radio__outer-circle"></div>
                                        <div className="mdc-radio__inner-circle"></div>
                                    </div>
                                    <div className="mdc-radio__ripple"></div>
                                </div>
                                <label htmlFor={x.incorrect_answers[1]}>{x.incorrect_answers[1]}</label>
                            </div>

                            <div className="mdc-form-field">
                                <div className="mdc-radio">
                                    <input className="mdc-radio__native-control" type="radio" id={x.incorrect_answers[2]} name={x.question} />
                                    <div className="mdc-radio__background">
                                        <div className="mdc-radio__outer-circle"></div>
                                        <div className="mdc-radio__inner-circle"></div>
                                    </div>
                                    <div className="mdc-radio__ripple"></div>
                                </div>
                                <label htmlFor={x.incorrect_answers[2]}>{x.incorrect_answers[2]}</label>
                            </div> 
                            </>
                            : null }

                        </div>

                    ))}

                </div>
            </div>
        )
    }
}

export default Quiz;
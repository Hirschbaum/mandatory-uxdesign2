import React from 'react';
import './Quiz.css';
//import { Helmet } from 'react-helmet';
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


    changeUnicodes = (arr) => {
        arr.map((data, index) => {
            const unicodes = {
                '&rdquo;': '"',
                '&#039;': "'",
                '&quot;': '"',
                '&ldquo;': '"',
                '&eacute;': 'é',
                '&amp;': '&',
                '&uuml;': 'ü',
                '&hellip;': '…',
                '&ntilde;': 'ñ',
            };
            return arr.question.replace(/&#?\w+;/g, match => unicodes[match]);
        });
    }

    render() {

        return (
            <div style={{marginLeft: '15vw', marginRight: '15vw', width: '60vw'}}>
                <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center'}}>
                    <h1>Quiz</h1>

                    {this.state.quiz.map((x, index) => {
                        const unicodes = {
                            '&rdquo;': '"',
                            '&#039;': "'",
                            '&quot;': '"',
                            '&ldquo;': '"',
                            '&eacute;': 'é',
                            '&amp;': '&',
                            '&uuml;': 'ü',
                            '&hellip;': '…',
                            '&ntilde;': 'ñ',
                        };
                        return (<div className='question'>
                            <h4>{index + 1 + '. '}{x.question.replace(/&#?\w+;/g, match => unicodes[match])}</h4>

                            <div className="answers">
                                <div className="mdc-form-field">
                                    <div className="mdc-radio">
                                        <input className="mdc-radio__native-control" type="radio" id="x.correct_answer" name={x.question} />
                                        <div className="mdc-radio__background">
                                            <div className="mdc-radio__outer-circle"></div>
                                            <div className="mdc-radio__inner-circle"></div>
                                        </div>
                                        <div className="mdc-radio__ripple"></div>
                                    </div>
                                    <label htmlFor={x.correct_answer}>{x.correct_answer.replace(/&#?\w+;/g, match => unicodes[match])}</label>
                                </div>

                                {x.incorrect_answers.map((y, index) => {
                                    return (
                                        <div className="mdc-form-field">
                                            <div className="mdc-radio">
                                                <input className="mdc-radio__native-control" type="radio" id={y[index]} name={x.question} />
                                                <div className="mdc-radio__background">
                                                    <div className="mdc-radio__outer-circle"></div>
                                                    <div className="mdc-radio__inner-circle"></div>
                                                </div>
                                                <div className="mdc-radio__ripple"></div>
                                            </div>
                                            <label htmlFor={y[index]}>{y.replace(/&#?\w+;/g, match => unicodes[match])}</label>
                                        </div>
                                    )
                                })
                                }
                            </div>
                        </div>
                        )
                    })}

                    <button className='quiz__button'>Submit</button>
                    <br/>

                </div>
            </div>
        )
    }
}

export default Quiz;


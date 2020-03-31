import React from 'react';
import './Quiz.css';
//import { Helmet } from 'react-helmet';
import axios from 'axios';

class Quiz extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quiz: [],
            allCorrectAnswers: [],
            choosenAnswers: [],
        };
    }

    //----- random shuffle function for the answers 
    shuffle = (arr) => { 
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            const temporary = arr[i];
            arr[i] = arr[j];
            arr[j] = temporary;
        }
        return arr;
    }

    componentDidMount() {

        axios.get('https://opentdb.com/api.php?amount=10', {})
            .then(response => {
                let dataCopied = [...response.data.results];
                console.log(dataCopied);
                let quizNew = []; //it doesn't work, to update state 'quiz' directly with 'dataNew'

                dataCopied.map(x => {
                    return this.setState({ allCorrectAnswers: x.correct_answer }) 
                })

                dataCopied.map(x => {
                    let answers = [...x.incorrect_answers, x.correct_answer]; //concating correct answer into the incorrect answers
                    let answersShuffled = this.shuffle(answers);

                    let dataNew = {
                        answers: answersShuffled,
                        ...x,
                    }

                    return quizNew.push(dataNew); //it doesn't work, to update state 'quiz' directly with 'dataNew'
                })
                console.log(quizNew, 'NEW QUIZ');
                this.setState({ quiz: quizNew });

            })
            .catch(error => {
                console.log('Error while fetching data from API', error);
            });
    }


    render() {

        return (
            <div style={{ marginLeft: '15vw', marginRight: '15vw', width: '60vw' }}>
                <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
                    <h1>Quiz</h1>

                    {this.state.quiz.map((x, index) => {
                        const unicodes = {
                            '&rdquo;': '"',
                            '&#039;': "'",
                            '&quot;': '"',
                            '&ldquo;': '"',
                            '&hellip;': '…',
                            '&amp;': '&',
                            '&ntilde;': 'ñ',
                            '&szlig': 'ß',
                            '&#176': '°',
                            '&aring': 'å',
                            '&auml': 'ä',
                            ' &ouml': 'ö',
                            '&eacute;': 'é',
                            '&uuml;': 'ü',
                        };
                        return (<div className='question-box' key={x.question}>
                            <h4>{index + 1 + '. '}{x.question.replace(/&#?\w+;/g, match => unicodes[match])}</h4>

                            <div className="answers">

                                {x.answers.map((answer, index) => {
                                    return (
                                        <div className="mdc-form-field" key={answer}>
                                            <div className="mdc-radio">
                                                <input className="mdc-radio__native-control" type="radio" id={answer} name={x.question} />
                                                <div className="mdc-radio__background">
                                                    <div className="mdc-radio__outer-circle"></div>
                                                    <div className="mdc-radio__inner-circle"></div>
                                                </div>
                                                <div className="mdc-radio__ripple"></div>
                                            </div>
                                            <label htmlFor={answer}>{answer.replace(/&#?\w+;/g, match => unicodes[match])}</label>
                                        </div>
                                    )
                                })}

                            </div>

                        </div>
                        )
                    })}

                    <button className="mdc-button mdc-button--raised" style={{ backgroundColor: '#484C7F' }}>  <span className="mdc-button__ripple"></span> Submit</button>
                    <br />

                </div>
            </div>
        )
    }
}

export default Quiz;

//onChange => update the choosenAnswers with the checked radio buttons
//on the correctAnswers filter, the elements, which are included in the choosenAnswers, return the length of the elements
//const diff = correctAnswers.filter(element => choosenAnswers.includes(element)); 
//onSubmit, trap the focus and show the Modal, where the scores can be shown

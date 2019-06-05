// Questionnaire Component

import React from 'react';
import axios from 'axios';

import * as Survey from "survey-react";
import "survey-react/survey.css";

import './Questionnaire.css';

import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

import Tasks from "./Tasks";


class Questionnaire extends React.Component {
    state = {
        isCompleted: false
    }

    // onComplete(survey, options) {
    //     console.log("Survey results: " + JSON.stringify(survey.data));
    //     this.props.incrementSequenceCounter();
    // }

    onCompleteComponent = (survey) => {
        this.setState({ isCompleted: true });

        console.log(survey.data);
    }



    render() {
        // var model = new Survey.Model(this.json);

        console.log(this.props.count + 1, this.props.total)
        let json = {
            questions: [
                {
                    type: "matrix",
                    name: "One",
                    title: "Please indicate if you agree or disagree with the following statements",
                    columns: [
                        {
                            value: 1,
                            text: "Strongly Disagree"
                        }, {
                            value: 2,
                            text: "Disagree"
                        }, {
                            value: 3,
                            text: "Neutral"
                        }, {
                            value: 4,
                            text: "Agree"
                        }, {
                            value: 5,
                            text: "Strongly Agree"
                        }
                    ],
                    rows: [
                        {
                            value: "option 1",
                            text: "Option 1"
                        }, {
                            value: "option 2",
                            text: "Option 2"
                        }, {
                            value: "option 3",
                            text: "Option 3"
                        }, {
                            value: "option 4",
                            text: "Option 4"
                        }
                    ],
                    isRequired: true
                },
                // {
                //     type: "matrix",
                //     name: "Two",
                //     title: "Please indicate if you agree or disagree with the following statements",
                //     columns: [
                //         {
                //             value: 1,
                //             text: "Strongly Disagree"
                //         }, {
                //             value: 2,
                //             text: "Disagree"
                //         }, {
                //             value: 3,
                //             text: "Neutral"
                //         }, {
                //             value: 4,
                //             text: "Agree"
                //         }, {
                //             value: 5,
                //             text: "Strongly Agree"
                //         }
                //     ],
                //     rows: [
                //         {
                //             value: "option 1",
                //             text: "Option 1"
                //         }, {
                //             value: "option 2",
                //             text: "Option 2"
                //         }, {
                //             value: "option 3",
                //             text: "Option 3"
                //         }, {
                //             value: "option 4",
                //             text: "Option 4"
                //         }
                //     ],
                //     isRequired: true
                // },
                // {
                //     type: "matrix",
                //     name: "Three",
                //     title: "Please indicate if you agree or disagree with the following statements",
                //     columns: [
                //         {
                //             value: 1,
                //             text: "Strongly Disagree"
                //         }, {
                //             value: 2,
                //             text: "Disagree"
                //         }, {
                //             value: 3,
                //             text: "Neutral"
                //         }, {
                //             value: 4,
                //             text: "Agree"
                //         }, {
                //             value: 5,
                //             text: "Strongly Agree"
                //         }
                //     ],
                //     rows: [
                //         {
                //             value: "option 1",
                //             text: "Option 1"
                //         }, {
                //             value: "option 2",
                //             text: "Option 2"
                //         }, {
                //             value: "option 3",
                //             text: "Option 3"
                //         }, {
                //             value: "option 4",
                //             text: "Option 4"
                //         }
                //     ],
                //     isRequired: true
                // }
            ]
        }

        var surveyRender = !this.state.isCompleted ? (
            <div>
                <ProgressBar
                    percent={((this.props.count + 1) / this.props.total) * 100}
                    filledBackground="linear-gradient(to right, #69edd3, #1ab394)"
                />

                <div className="questionnaire-description">
                    <div className='wrapper'>
                        <div className="task-heading">
                            <span className="task-number-questionnaire">1</span>
                            <h1 className="questionnaire-heading">Questionnaire</h1>
                        </div>
                        <p className="questionnaire-task-description">Please answer the questions below.</p>
                    </div>
                </div>
                <Survey.Survey
                    json={json}
                    showCompletedPage={false}
                    onComplete={this.onCompleteComponent}
                />
            </div>
        ) : null;

        var onCompleteComponent = this.state.isCompleted ? (
            <Tasks tasks={this.props.tasks} />
        ) : null;

        return (
            <div>

                {surveyRender}
                {onCompleteComponent}

                {/* <Survey.Survey model={model} onComplete={this.onComplete} /> */}
            </div>

        )
    }
}

export default Questionnaire;

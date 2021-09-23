import React, { useState } from "react";

import "./PopUps.css";

export default function ConditionPopUp() {
    const [answerYes, setAnswerYes] = useState(false);

    const yesClick = () => {
        setAnswerYes(!answerYes);
    };

    const questions = [
        {
            id: 1,
            question1: "Have these shoes be worn?",
            answer_1a: "Yes",
            answer_1b: "No",
            // correct_answer: "a",
        },
        {
            id: 2,
            question2: "What condition is the shoe in?",
            answer_2b: "Great",
            answer_2c: "Ok",
            answer_2d: "Bad",
            // correct_answer: "c",
        },
    ];

    console.log(questions[0].question1);
    return (
        <React.Fragment>
            <div className={`popup-box ${!answerYes ? "active" : ""}`}>
                <h3>{questions[0].question1}</h3>
                <div className="btn-case">
                    <button onClick={yesClick}>{questions[0].answer_1a}</button>
                    <button>{questions[0].answer_1b}</button>
                </div>
            </div>
            <div className={`popup-box-two ${!answerYes ? "" : "active"}`}>
                <h3>What condition is the shoe in?</h3>
                <div className="btn-case2">
                    <button>Perfect</button>
                    <button>Great</button>
                    <button>Ok</button>
                    <button>Bad</button>
                </div>
            </div>
        </React.Fragment>
    );
}

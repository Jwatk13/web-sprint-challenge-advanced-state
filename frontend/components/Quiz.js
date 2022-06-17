import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import * as actions from '../state/action-creators';

export function Quiz(props) {
  useEffect(() => {
    props.fetchQuiz()
  }, [])

  return (
    <div id="wrapper">
      {props.quiz !==
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        // 
        null ? (
          <>
            <h2>{props.quiz.question}</h2>

            <div id="quizAnswers">
              <div className={props.quiz.answers[0] === null ? "answer" : "answer selected"}>
                {/* {// a fetch request for the answers/} */}A function
                <button onClick={null/**setSelectedAnswer */}>
                  Select
                </button>
              </div>

              <div className={props.quiz.answers[1] === null ? "answer" : "answer selected"}>
                An elephant
                <button onClick={null/**setSelectedAnswer */}>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(st => st, actions)(Quiz)

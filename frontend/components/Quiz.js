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
            <h2>{props.quiz.question}</h2>{console.log(props.quiz)}

            <div id="quizAnswers">
              <div className={null === null ? "answer" : "answer selected"}>
                {props.quiz.answers[0].text}
                <button onClick={null/**setSelectedAnswer */}>
                  Select
                </button>
              </div>

              <div className={null === null ? "answer" : "answer selected"}>
                {props.quiz.answers[1].text}
                <button onClick={null/**setSelectedAnswer */}>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" disabled={true}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(st => st, actions)(Quiz)

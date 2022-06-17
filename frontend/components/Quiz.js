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
              <div 
                className={props.selectedAnswer === props.quiz.answers[0].answer_id ? "answer selected" : "answer"}
              >
                {props.quiz.answers[0].text}
                <button 
                  onClick={() => props.selectAnswer(props.quiz.answers[0].answer_id)}
                >
                  {props.selectedAnswer === props.quiz.answers[0].answer_id ? "SELECTED" : "Select"}
                </button>
              </div>

              <div 
                className={props.selectedAnswer === props.quiz.answers[1].answer_id ? "answer selected" : "answer"}
              >
                {props.quiz.answers[1].text}
                <button 
                  onClick={() => props.selectAnswer(props.quiz.answers[1].answer_id)}
                >
                  {props.selectedAnswer === props.quiz.answers[1].answer_id ? "SELECTED" : "Select"}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" disabled={props.selectedAnswer === null ? true : false}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(st => st, actions)(Quiz)

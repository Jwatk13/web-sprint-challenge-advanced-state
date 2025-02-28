// ❗ You don't need to add extra action creators to achieve MVP
import * as types from './action-types';
import axios from 'axios';

export function moveClockwise(amount) {
  return {
    type: types.MOVE_CLOCKWISE,
    payload: amount
  }
 }

export function moveCounterClockwise(amount) {
  return {
    type: types.MOVE_COUNTERCLOCKWISE,
    payload: amount
  }
 }

export function selectAnswer(answer) {
  return {
    type: types.SET_SELECTED_ANSWER,
    payload: answer
  }
 }

export function setMessage(message) {
  return {
    type: types.SET_INFO_MESSAGE,
    payload: message
  }
 }

export function setQuiz() {
  return {
    type: types.SET_QUIZ_INTO_STATE,
    payload: null
  }
}
  

export function inputChange({ id, value }) {
  return {
    type: types.INPUT_CHANGE,
    payload: { id, value }
 }
}

export function resetForm() {
  return {
    type: types.RESET_FORM
  }
 }

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
      dispatch(setQuiz())
    axios.get('http://localhost:9000/api/quiz/next')
      .then(res => {
        // console.log(res.data)
        dispatch({ type: types.SET_QUIZ_INTO_STATE, payload: res.data })
      })
      .catch(err => {
        console.log(err)
      })
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}

export function postAnswer( qID ,aID) {
  return function (dispatch) {
    axios.post(`http://localhost:9000/api/quiz/answer`, { quiz_id: qID, answer_id: aID })
      .then(res => {
        console.log(res.data)
        dispatch({
          type: types.SET_SELECTED_ANSWER, payload: null
        })
        dispatch({
          type: types.SET_INFO_MESSAGE, payload: res.data.message
        })
        dispatch(fetchQuiz())
      })
      .catch(err => {
        console.log(err)
      })
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz

    // props.selectedAnswer === props.quiz.answers[0].answer_id ? "Nice job! That was the correct answer" 
        // : "What a shame! That was the incorrect answer"))
  }
}

export function postQuiz( newQuestion, newTrueAnswer, newFalseAnswer ) {
  return function (dispatch) {
    axios.post(`http://localhost:9000/api/quiz/new`, { "question_text": `${newQuestion}`, "true_answer_text": `${newTrueAnswer}`, "false_answer_text": `${newFalseAnswer}` })
      .then(res => {
        console.log(res)
        dispatch(setMessage(`Congrats: "${newQuestion}" is a great question!`))
        dispatch({
          type: types.INPUT_CHANGE, payload: res.data })
        dispatch({
          type: types.RESET_FORM
        })
      })
      .catch(err => {
        console.log(err)
      })
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state

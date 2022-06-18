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

export function selectAnswer(action) {
  return {
    type: types.SET_SELECTED_ANSWER,
    payload: action
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
  

export function inputChange() { }

export function resetForm() { }

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
      dispatch(setQuiz())
    axios.get('http://localhost:9000/api/quiz/next')
      .then(res => {
        console.log(res)
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
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state

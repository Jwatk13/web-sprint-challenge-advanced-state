import React from 'react';

import { connect } from 'react-redux';
import * as actionCreators from '../state/action-creators';

export function Form(props) {

  const { form } = props

  const onChange = evt => {
    const { id, value } = evt.target
    props.inputChange({ id, value })
  }

  
  const onSubmit = evt => {
    evt.preventDefault()
    props.postQuiz(form.newQuestion, form.newTrueAnswer, form.newFalseAnswer)
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input 
        maxLength={50} 
        onChange={onChange} 
        id="newQuestion" 
        placeholder="Enter question"
        value={form.newQuestion} 
      />
      <input 
        maxLength={50} 
        onChange={onChange} 
        id="newTrueAnswer" 
        placeholder="Enter true answer"
        value={form.newTrueAnswer}
      />
      <input 
        maxLength={50} 
        onChange={onChange} 
        id="newFalseAnswer" 
        placeholder="Enter false answer"
        value={form.newFalseAnswer} 
      />
      <button 
        id="submitNewQuizBtn" 
        disabled={form.newQuestion.trim().length && form.newTrueAnswer.trim().length && form.newFalseAnswer.trim().length > 1 ? false : true}
      >
        Submit new quiz
      </button>
    </form>
    
  )
}


export default connect(st => st, actionCreators)(Form)

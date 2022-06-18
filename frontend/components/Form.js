import React from 'react';

import { connect } from 'react-redux';
import * as actionCreators from '../state/action-creators';

export function Form(props) {

  const { form } = props

  const onChange = evt => {
  
  }

  
  const onSubmit = evt => {
    evt.preventDefault()
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input 
        maxLength={50} 
        onChange={onChange} 
        id="newQuestion" 
        placeholder="Enter question" 
      />
      <input 
        maxLength={50} 
        onChange={onChange} 
        id="newTrueAnswer" 
        placeholder="Enter true answer"
      />
      <input 
        maxLength={50} 
        onChange={onChange} 
        id="newFalseAnswer" 
        placeholder="Enter false answer" 
      />
      <button 
        id="submitNewQuizBtn" 
        disabled={form.newQuestion.trim().length && form.newTrueAnswer.trim().length && form.newFalseAnswer.trim().length > 1 ? false : true}
      >
        Submit new quiz{console.log(form)}
      </button>
    </form>
    
  )
}


export default connect(st => st, actionCreators)(Form)

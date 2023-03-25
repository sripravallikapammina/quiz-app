import React from 'react'
import './QuizView.css'

const QuizView = ({questions, currentQuestion, handleAnswerClick}) => {
  return <>
    <div className='question'>
      <div className='question_Number'>
        <span>
          Question {currentQuestion + 1} / {questions.length}
        </span>
      </div>
      <div className='question_text'> 
        {questions[currentQuestion].question}
      </div>
    </div>

    <div className='answer'>
      {questions[currentQuestion].answers.map(({text, isCorrect}) => (
          <button key={text} onClick={() => handleAnswerClick(isCorrect)} >
              {text}  
          </button>
      ))}
      {/* navigate to previous question */}
      
      
      <button onClick={()=>{}}>Previous</button>
      <button>Next</button>
      
    </div>
  </>
}

export default QuizView

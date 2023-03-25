import React from 'react'
import './ScoreView.css'

const ScoreView = ({handleResetBtnClick,score}) => {
  return (
    <div>
      <p>You Scored {score} out of 5</p>
      <button onClick = {handleResetBtnClick} > Reset</button>
    </div>
  )
}

export default ScoreView

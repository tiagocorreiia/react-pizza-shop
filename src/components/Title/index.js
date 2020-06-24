import React from 'react'
import './styles.css'

function Title({ text, span, subText }) {
  return (
    <div className="title-container">
      <h2>
        {text} <span>{span}</span>
      </h2>
      <p>{subText}</p>
    </div>
  )
}

export default Title

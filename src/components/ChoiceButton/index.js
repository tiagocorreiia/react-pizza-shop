import React from 'react'
import { useDispatch } from 'react-redux'
import './styles.css'

function ChoiceButton({ text, styles, selectedValue, action }) {
  const dispatch = useDispatch()
  return (
    <button
      className={styles}
      value={selectedValue}
      onClick={(e) => dispatch(action(e.target.value))}
    >
      {text}
    </button>
  )
}

export default ChoiceButton

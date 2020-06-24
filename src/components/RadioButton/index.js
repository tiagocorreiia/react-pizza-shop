import React from 'react'
import { useDispatch } from 'react-redux'
import './styles.css'
import infoImage from '../../assets/info.svg'

function RadionButton({
  idButton,
  nameButton,
  valueButton,
  text,
  info,
  checked,
  action,
}) {
  const dispatch = useDispatch()
  return (
    <div className="radio-button">
      <input
        type="radio"
        id={idButton}
        name={nameButton}
        value={valueButton}
        checked={checked}
        onChange={(e) => dispatch(action(e.target.value))}
      />
      <span className="checkmark"></span>
      <label htmlFor={idButton}>{text}</label>
      <img src={infoImage} alt="" title={info} />
    </div>
  )
}

export default RadionButton

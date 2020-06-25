import React from 'react'
import { useDispatch } from 'react-redux'
import './styles.css'
import infoImage from '../../assets/info.svg'

function RadionButton({
  idButton,
  nameButton,
  valueButton,
  checked,
  text,
  price,
  info,
  action,
  getPrice,
}) {
  const dispatch = useDispatch()
  function actionCreator(value, price) {
    return (dispatch) => {
      dispatch(action(value))
      dispatch(getPrice(price))
    }
  }

  return (
    <div className="radio-button">
      <div className="input-button">
        <input
          type="radio"
          id={idButton}
          name={nameButton}
          value={valueButton}
          checked={checked}
          onChange={(e) => dispatch(actionCreator(e.target.value, price))}
        />
        <span className="checkmark"></span>
        <label htmlFor={idButton}>{text}</label>
      </div>
      <div className="info">
        <img src={infoImage} alt="" title={info} />
      </div>
      <div className="price">
        <span>+R${price.toFixed(2)} </span>
      </div>
    </div>
  )
}

export default RadionButton

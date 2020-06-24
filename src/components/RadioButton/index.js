import React from 'react'
import { useDispatch } from 'react-redux'
import './styles.css'
import infoImage from '../../assets/info.svg'

function RadionButton({
  idButton,
  nameButton,
  valueButton,
  text,
  price,
  priceName,
  info,
  checked,
  action,
  getPrice,
}) {
  const dispatch = useDispatch()
  // function actionCreator(value, price) {
  //   return (dispatch) => {
  //     dispatch(action(value))
  //     dispatch(getPrice(price))
  //   }
  // }
  function actionCreator(value, price) {
    return () => {
      localStorage.setItem(nameButton, value)
      localStorage.setItem(priceName, price)
    }
  }

  return (
    <div className="radio-button">
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
      <div className="info">
        <span>+R${price.toFixed(2)} </span>
        <img src={infoImage} alt="" title={info} />
      </div>
    </div>
  )
}

export default RadionButton

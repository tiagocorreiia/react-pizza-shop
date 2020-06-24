import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Title from '../../components/Title'

import './styles.css'

function Success() {
  return (
    <div className="container">
      <Title text={'Pizza'} span={'Shop'} />
      <div className="thanks-message">
        <h2>Pedido realizado com sucesso!</h2>
        <p>obrigado por escolher a pizza shop!</p>
      </div>
      <Link to="/choice">
        <Button text={'Fazer novo pedido'} styles={'btn-primary'} />
      </Link>
      <Link to="/">
        <Button text={'Home'} styles={'btn-secondary'} />
      </Link>
    </div>
  )
}

export default Success

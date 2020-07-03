import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import NavBar from '../../components/NavBar/'

import './styles.css'

function Success() {
  return (
    <div className="container">
      <NavBar />
      <div className="thanks-message">
        <h2>Pedido realizado com sucesso!</h2>
        <p>obrigado por escolher a pizza shop!</p>
      </div>
      <Link to="/choice">
        <Button text={'Fazer novo pedido'} styles={'btn-primary'} />
      </Link>
    </div>
  )
}

export default Success

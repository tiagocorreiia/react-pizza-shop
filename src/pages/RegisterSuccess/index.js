import React from 'react'
import { Link } from 'react-router-dom'

import NavBar from '../../components/NavBar'
import Button from '../../components/Button'

import './styles.css'

function RegisterSuccess() {
  return (
    <div className="container">
      <NavBar hiddenNavBar={true} />
      <div className="thanks-message">
        <h2>Cadastro realizado com sucesso!</h2>
        <p>Obrigado por escolher a pizza shop!</p>
      </div>
      <Link to="/">
        <Button text={'Fazer login'} styles={'btn-primary'} />
      </Link>
    </div>
  )
}

export default RegisterSuccess

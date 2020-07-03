import React from 'react'
import { useHistory } from 'react-router-dom'

import NavBar from '../../components/NavBar'
import Button from '../../components/Button'
import './styles.css'

function NotFound() {
  const history = useHistory()
  function backToHome() {
    if (localStorage.getItem('user') !== null) {
      history.push('/choice')
    } else {
      history.push('/')
    }
  }
  return (
    <div className="container">
      <div className="page-not-found">
        <NavBar hiddenNavBar={true} />
        <h2>Erro 404</h2>
        <p>Página não encontrada!</p>
        <button className="btn-primary" onClick={() => backToHome()}>
          Voltar a home
        </button>
      </div>
    </div>
  )
}

export default NotFound

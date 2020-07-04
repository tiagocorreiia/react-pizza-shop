import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import Crypto from 'crypto-js'
import api from '../../services/api'

import NavBar from '../../components/NavBar'
import SubTitle from '../../components/SubTitle'
import Button from '../../components/Button'

import './styles.css'

function Register() {
  const userData = useSelector((state) => state.user.users)

  const history = useHistory()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPassword] = useState([])
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip_code, setZipCode] = useState('')

  const userEmails = []
  userData.map((email) => userEmails.push(email.email))
  const filteredEmail = userEmails.filter((x) => x === email)

  async function handleRegister(e) {
    e.preventDefault()

    const password = Crypto.SHA512(pass).toString()

    const data = {
      name,
      email,
      password,
      address: { street, number, city, state, zip_code },
      orders: [],
    }

    if (filteredEmail[0]) {
      alert('E-mail já cadastrado!')
    } else {
      try {
        await api.post('users', data)
        history.push('/register-success')
      } catch (err) {
        alert('Erro no cadastro')
      }
    }
  }

  return (
    <div className="container">
      <div className="register-container">
        <NavBar hiddenNavBar={true} />
        <SubTitle text="Cadastro de usuário" />
        <p>Todos os campos são de preenchimento obrigatório!</p>
        <form onSubmit={handleRegister}>
          <fieldset>
            <legend>Dados Conta</legend>
            <div className="form-group">
              <input
                type="text"
                placeholder="Nome"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={pass}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </fieldset>
          <fieldset>
            <legend>Endereço</legend>
            <div className="form-group">
              <input
                type="text"
                placeholder="Logradouro"
                value={street}
                required
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Número"
                value={number}
                required
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Cidade"
                value={city}
                required
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Estado"
                value={state}
                required
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                title="Usar o formato 00000-000"
                placeholder="CEP"
                value={zip_code}
                maxLength="9"
                minLength="8"
                pattern="^\d{5}-\d{3}$"
                required
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>
          </fieldset>
          <div className="form-group">
            <button type="submit">Cadastrar</button>
          </div>
        </form>
        <Link to="/">
          <Button text="Voltar" styles="btn-secondary" />
        </Link>
      </div>
    </div>
  )
}

export default Register

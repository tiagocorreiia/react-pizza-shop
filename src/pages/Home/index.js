import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Crypto from 'crypto-js'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  fetchUsers,
  userLoginInfo,
  userLoginEmail,
  userLoginPassword,
} from '../../state/'

import NavBar from '../../components/NavBar/'

import './styles.css'

function Home() {
  const dispatch = useDispatch()
  const history = useHistory()

  const userData = useSelector((state) => state.user.users)
  const userInfo = useSelector((state) => state.login)

  const inputEmail = useSelector((state) => state.login.userEmail)
  const inputPassword = useSelector((state) =>
    state.login.userPassword.toString()
  )

  const user = useSelector((state) => state.login.userInfo)
  //let user = userData.filter((user) => user.email === 'user1@pizzashop.com')
  //localStorage.setItem('user', JSON.stringify(user))

  function getUserEmail(value) {
    let user = userData.filter((user) => user.email === value)
    dispatch(userLoginInfo(user))
    dispatch(userLoginEmail(value))
  }

  function getUserPassword(value) {
    dispatch(userLoginPassword(Crypto.SHA512(value).toString()))
    //const password = Crypto.SHA512(value)
    //console.log(password.toString(Crypto.UTF8))
  }

  function userLogin(e) {
    e.preventDefault()
    if (user !== undefined) {
      const userEmail = userInfo.userInfo.map((userEmail) => userEmail.email)
      const userPassword = userInfo.userInfo.map(
        (userPassword) => userPassword.password
      )

      if (inputEmail === userEmail[0] && inputPassword === userPassword[0]) {
        localStorage.setItem('user', JSON.stringify(user))
        history.push('/choice')
      } else {
        alert('Email ou senha não conferem')
      }
    }
  }

  if (localStorage.getItem('user') !== null) {
    history.push('/choice')
  }

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div className="home-container">
      <div>
        <NavBar hiddenNavBar={true} />
        <form onSubmit={userLogin}>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              required
              onChange={(e) => getUserEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              required
              onChange={(e) => getUserPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button type="submit">Fazer Login</button>
          </div>
          <div className="form-group">
            <p className="register">
              Não tem uma conta?
              <Link to="/register">Cadastrar</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Home

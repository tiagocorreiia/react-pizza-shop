import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import Logo from '../../assets/logo-pizza-shop.svg'
import UserProfile from '../../assets/user-profile.svg'
import SignOut from '../../assets/sing-out.svg'
import './styles.css'

function NavBar({ hiddenNavBar }) {
  const history = useHistory()
  function userLogout(e) {
    e.preventDefault()
    localStorage.removeItem('user')
    history.push('/')
  }

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo Pizza Shop" />
      </div>
      {hiddenNavBar ? (
        ''
      ) : (
        <div className="navbar-user">
          <Link to="/profile">
            <img src={UserProfile} alt="User Profile Icon" title="Perfil" />
          </Link>
          <img className="signout-effect" src={SignOut} alt="Sign Out Icon" onClick={userLogout} title="Sair" />
        </div>
      )}
    </div>
  )
}

export default NavBar

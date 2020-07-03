import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import NavBar from '../../components/NavBar'
import SubTitle from '../../components/SubTitle'
import Button from '../../components/Button'

import './styles.css'

function Profile() {
  const userData = useSelector((state) => state.login.userInfo[0])

  return (
    <div className="container">
      <div className="profile-info">
        <NavBar />
        <SubTitle text={`Bem-Vindo, ${userData.name}`} />
        <Link to="/choice">
          <Button text="Fazer pedido" styles="btn-primary" />
        </Link>
        <h3>Pedidos recentes</h3>
        <div className="recents-orders">{userData.orders ? 'Vazio' : 'Não'}</div>
        <h3>Seus dados</h3>
        <div className="address">
          <form>
            <div className="form-group">
              <label htmlFor="cep">CEP</label>
              <input type="text" name="cep" placeholder={userData.address[0].zip_code} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="street">Logradouro</label>
              <input type="text" name="street" placeholder={userData.address[0].street} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="number">Número</label>
              <input type="text" name="number" placeholder={userData.address[0].number} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="city">Cidade</label>
              <input type="text" name="city" placeholder={userData.address[0].city} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="state">Estado</label>
              <input type="text" name="state" placeholder={userData.address[0].state} readOnly />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile

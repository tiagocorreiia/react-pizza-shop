import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchAllOrder } from '../../state/'

import NavBar from '../../components/NavBar'
import SubTitle from '../../components/SubTitle'
import Button from '../../components/Button'

import './styles.css'

function Profile() {
  const userOrders = []
  const userData = useSelector((state) => state.login.userInfo[0])
  const orderData = useSelector((state) => state.allOrder.orders)
  const userEmail = JSON.parse(localStorage.getItem('user'))
  orderData.map((email) => userOrders.push(email))
  const filteredUserEmail = userOrders.filter(
    (x) => x.email === userEmail[0].email
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllOrder())
  }, [dispatch])

  return (
    <div className="container">
      <div className="profile-info">
        <NavBar />
        <SubTitle text={`Bem-Vindo, ${userData.name}`} />
        <Link to="/choice">
          <Button text="Fazer pedido" styles="btn-primary" />
        </Link>
        <h3>Pedidos recentes</h3>
        <div className="recents-orders">
          {filteredUserEmail.slice(0, 3).map((orderInfo) => (
            <div className="order-info" key={orderInfo.id}>
              <Link
                to={{
                  pathname: '/order',
                  state: {
                    id: orderInfo.id,
                  },
                }}
              >
                <h2>
                  <span>Número do pedido:</span> {orderInfo.order_number}
                </h2>
              </Link>
            </div>
          ))}
        </div>
        <h3>Seus dados</h3>
        <div className="address">
          <form>
            <div className="form-group">
              <label htmlFor="cep">CEP</label>
              <input
                type="text"
                name="cep"
                placeholder={userData.address.zip_code}
                readOnly
              />
            </div>
            <div className="form-group">
              <label htmlFor="street">Logradouro</label>
              <input
                type="text"
                name="street"
                placeholder={userData.address.street}
                readOnly
              />
            </div>
            <div className="form-group">
              <label htmlFor="number">Número</label>
              <input
                type="text"
                name="number"
                placeholder={userData.address.number}
                readOnly
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                name="city"
                placeholder={userData.address.city}
                readOnly
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">Estado</label>
              <input
                type="text"
                name="state"
                placeholder={userData.address.state}
                readOnly
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile

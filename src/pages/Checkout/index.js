import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

import NavBar from '../../components/NavBar'
import SubTitle from '../../components/SubTitle'
import Button from '../../components/Button'
import OrderBoxItem from '../../components/OrderBoxItem/'
import BoxPrice from '../../components/BoxPrice/'

import './styles.css'

function Checkout() {
  const history = useHistory()

  // Items
  const size = useSelector((state) => state.order.size)
  const dough = useSelector((state) => state.order.dough)
  const border = useSelector((state) => state.order.border)
  const filling = useSelector((state) => state.order.filling)

  // Price Total
  const sizePrice = useSelector((state) => state.price.sizePrice)
  const doughPrice = useSelector((state) => state.price.doughPrice)
  const borderPrice = useSelector((state) => state.price.borderPrice)
  const fillingPrice = useSelector((state) => state.price.fillingPrice)
  const orderTotal = parseInt(
    sizePrice + doughPrice + borderPrice + fillingPrice
  )

  const saleSelected = useSelector((state) => state.selected.selected)
  const saleData = useSelector((state) => state.sale)

  async function handleOrder(e) {
    e.preventDefault()
    const userInfo = JSON.parse(localStorage.getItem('user'))
    const name = userInfo[0].name
    const email = userInfo[0].email
    const order_number = Math.floor(Math.random() * 1000000000)
    const total = orderTotal

    const data = {
      order_number,
      name,
      email,
      size,
      dough,
      border,
      filling,
      total,
    }

    try {
      await api.post('orders', data)
      history.push('/success')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="container">
      <NavBar />
      <SubTitle text="Seu pedido" />
      {saleSelected === 'true' ? (
        saleData.sales.slice(0, 1).map((sale) => (
          <div className="sale-item" key={sale.id}>
            <h2>Você escolheu nossa recomendação!</h2>
            <p>
              <span>Sua escolha:</span> {sale.pizza}.
            </p>
            <p>
              Você ganhou <span>{sale.points}</span> pontos por ter escolhido
              nossa recomendação!
            </p>
            <div className="box-price">
              <p>
                <span>Total:</span> R${sale.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div>
          <OrderBoxItem
            sizeItem={size}
            doughItem={dough}
            borderItem={border}
            fillingItem={filling}
          />
          <BoxPrice price={orderTotal} />
        </div>
      )}
      <button className="btn-primary" onClick={handleOrder}>
        Finalizar pedido
      </button>
      {saleSelected === 'true' ? (
        ''
      ) : (
        <Link to="/fillings">
          <Button text={'Voltar'} styles={'btn-secondary'} />
        </Link>
      )}
    </div>
  )
}

export default Checkout

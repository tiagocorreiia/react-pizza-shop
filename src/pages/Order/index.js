import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import NavBar from '../../components/NavBar'
import SubTitle from '../../components/SubTitle'
import OrderBoxItem from '../../components/OrderBoxItem/'
import BoxPrice from '../../components/BoxPrice'
import Button from '../../components/Button'

import './styles.css'

function Order(orderID) {
  const orderData = useSelector((state) => state.allOrder.orders)
  const order = orderData.find(
    (orderItem) => orderItem.id === orderID.location.state.id
  )
  return (
    <div className="container">
      <div className="order-detail">
        <NavBar />
        <SubTitle text={`Pedido número: ${order.order_number}`} />
        <p>Detalhes do pedido</p>
        <OrderBoxItem
          sizeItem={order.size}
          doughItem={order.dough}
          borderItem={order.border}
          fillingItem={order.filling}
        />
        <BoxPrice price={order.total} />
        <Link to="/profile">
          <Button text="Voltar" styles="btn-secondary" />
        </Link>
        <Link to="/choice">
          <Button text="Fazer novo pedido" styles="btn-primary" />
        </Link>
      </div>
    </div>
  )
}

export default Order

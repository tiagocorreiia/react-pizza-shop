import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Title from '../../components/Title'
import Button from '../../components/Button'
import OrderBoxItem from '../../components/OrderBoxItem/'

import './styles.css'

function Checkout() {
  const size = useSelector((state) => state.order.size)
  const dough = useSelector((state) => state.order.dough)
  const border = useSelector((state) => state.order.border)
  const filling = useSelector((state) => state.order.filling)
  const saleSelected = useSelector((state) => state.selected.selected)

  const saleData = useSelector((state) => state.sale)

  return (
    <div className="container">
      <Title text={'Pizza'} span={'Shop'} subText={'Seu pedido'} />
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
          </div>
        ))
      ) : (
        <OrderBoxItem
          sizeItem={size}
          doughItem={dough}
          borderItem={border}
          fillingItem={filling}
        />
      )}
      <Link to="/success">
        <Button text={'Finalizar pedido'} styles={'btn-primary'} />
      </Link>
      {saleSelected === 'true' ? (
        ''
      ) : (
        <Link to="/filling">
          <Button text={'Voltar'} styles={'btn-secondary'} />
        </Link>
      )}
    </div>
  )
}

export default Checkout

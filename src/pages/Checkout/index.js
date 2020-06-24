import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  fetchSizes,
  getSize,
  getSizePrice,
  fetchDoughes,
  getDough,
  getDoughPrice,
  fetchBorders,
  getBorder,
  getBorderPrice,
  fetchFillings,
  getFilling,
  getFillingPrice,
} from '../../state'

import Title from '../../components/Title'
import Button from '../../components/Button'
import OrderBoxItem from '../../components/OrderBoxItem/'
import BoxPrice from '../../components/BoxPrice/'

import './styles.css'

function Checkout() {
  // All Dispatch
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchSizes())
    dispatch(getSize(localStorage.getItem('size')))
    dispatch(getSizePrice(parseInt(localStorage.getItem('sizePrice'))))

    dispatch(fetchDoughes())
    dispatch(getDough(localStorage.getItem('dough')))
    dispatch(getDoughPrice(parseInt(localStorage.getItem('doughPrice'))))

    dispatch(fetchBorders())
    dispatch(getBorder(localStorage.getItem('border')))
    dispatch(getBorderPrice(parseInt(localStorage.getItem('borderPrice'))))

    dispatch(fetchFillings())
    dispatch(getFilling(localStorage.getItem('filling')))
    dispatch(getFillingPrice(parseInt(localStorage.getItem('fillingPrice'))))
  }, [dispatch])

  // Items
  const size = useSelector((state) => state.order.size)
  const dough = useSelector((state) => state.order.dough)
  const border = useSelector((state) => state.order.border)
  const filling = useSelector((state) => state.order.filling)

  // Price Totall
  const sizePrice = useSelector((state) => state.price.sizePrice)
  const doughPrice = useSelector((state) => state.price.doughPrice)
  const borderPrice = useSelector((state) => state.price.borderPrice)
  const fillingPrice = useSelector((state) => state.price.fillingPrice)
  const orderTotal = parseInt(
    sizePrice + doughPrice + borderPrice + fillingPrice
  )

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
      <Link to="/success">
        <Button text={'Finalizar pedido'} styles={'btn-primary'} />
      </Link>
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

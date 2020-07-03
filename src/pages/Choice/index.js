import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { fetchSales, changeSaleSelected } from '../../state'

import Button from '../../components/Button'
import ChoiceButton from '../../components/ChoiceButton'
import NavBar from '../../components/NavBar/'
import Spinner from '../../components/Spinner'

import './styles.css'

function Choice() {
  const saleData = useSelector((state) => state.sale)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchSales())
  }, [dispatch])
  return (
    <div className="container">
      <NavBar />
      {saleData.loading ? (
        <Spinner />
      ) : saleData.error ? (
        <h2> {saleData.error} </h2>
      ) : (
        <div>
          {saleData.sales.slice(0, 1).map((sale) => (
            <figure className="recommendation-image" key={sale.id}>
              <img src={sale.url_image} alt={sale.pizza} />
              <figcaption>
                <div>
                  <p>Recomendação do dia</p>
                  <h2>{sale.pizza}</h2>
                  <span>R${sale.price.toFixed(2)} </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      )}
      <Link to="/checkout">
        <ChoiceButton text={'Quero esta'} styles={'btn-primary'} selectedValue={true} action={changeSaleSelected} />
      </Link>
      <p className="choice-text">Ou monte a sua pizza</p>
      <Link to="/sizes">
        <ChoiceButton
          text={'Montar minha pizza'}
          styles={'btn-primary'}
          selectedValue={false}
          action={changeSaleSelected}
        />
      </Link>
      <Link to="/">
        <Button text={'Voltar'} styles={'btn-secondary'} />
      </Link>
    </div>
  )
}

export default Choice

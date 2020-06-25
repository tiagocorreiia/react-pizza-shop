import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchFillings, getFilling, getFillingPrice } from '../../state'

import Button from '../../components/Button'
import Title from '../../components/Title'
import RadioButton from '../../components/RadioButton'
import Spinner from '../../components/Spinner'

function Filling() {
  const fillingData = useSelector((state) => state.filling)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchFillings())
  }, [dispatch])
  return (
    <div className="container">
      <Title text="Pizza" span="Shop" subText="Selecione o recheio" />
      {fillingData.loading ? (
        <Spinner />
      ) : fillingData.error ? (
        <h2>{fillingData.error}</h2>
      ) : (
        <div>
          {fillingData.fillings.map((filling) => (
            <RadioButton
              key={filling.id}
              idButton={filling.id}
              nameButton="filling"
              valueButton={filling.filling}
              text={filling.filling}
              price={filling.price}
              priceName="fillingPrice"
              info={filling.info}
              action={getFilling}
              getPrice={getFillingPrice}
            />
          ))}
        </div>
      )}
      <Link to="/checkout">
        <Button text={'Próximo'} styles={'btn-primary'} />
      </Link>
      <Link to="/borders">
        <Button text={'Voltar'} styles={'btn-secondary'} />
      </Link>
    </div>
  )
}

export default Filling

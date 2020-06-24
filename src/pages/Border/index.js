import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchBorders, getBorder, getBorderPrice } from '../../state'

import Button from '../../components/Button'
import Title from '../../components/Title'
import RadioButton from '../../components/RadioButton'
import Spinner from '../../components/Spinner'

function Border() {
  const borderData = useSelector((state) => state.border)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBorders())
    dispatch(getBorder(localStorage.getItem('border')))
    dispatch(getBorderPrice(parseInt(localStorage.getItem('borderPrice'))))
  }, [dispatch])
  return (
    <div className="container">
      <Title text="Pizza" span="Shop" subText="Selecione a borda" />
      {borderData.loading ? (
        <Spinner />
      ) : borderData.error ? (
        <h2>{borderData.error}</h2>
      ) : (
        <div>
          {borderData.borders.map((border) => (
            <RadioButton
              key={border.id}
              idButton={border.id}
              nameButton="border"
              valueButton={border.border}
              text={border.border}
              price={border.price}
              priceName="borderPrice"
              info={border.info}
              action={getBorder}
              getPrice={getBorderPrice}
            />
          ))}
        </div>
      )}
      <Link to="/fillings">
        <Button text={'Próximo'} styles={'btn-primary'} />
      </Link>
      <Link to="/doughes">
        <Button text={'Voltar'} styles={'btn-secondary'} />
      </Link>
    </div>
  )
}

export default Border

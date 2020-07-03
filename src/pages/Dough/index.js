import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchDoughes, getDough, getDoughPrice } from '../../state'

import Button from '../../components/Button'
import NavBar from '../../components/NavBar'
import SubTitle from '../../components/SubTitle'
import RadioButton from '../../components/RadioButton'
import Spinner from '../../components/Spinner'

function Dough() {
  const doughData = useSelector((state) => state.dough)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchDoughes())
  }, [dispatch])
  return (
    <div className="container">
      <NavBar />
      <SubTitle text="Selecione a massa" />
      {doughData.loading ? (
        <Spinner />
      ) : doughData.error ? (
        <h2>{doughData.error}</h2>
      ) : (
        <div>
          {doughData.doughes.map((dough) => (
            <RadioButton
              key={dough.id}
              idButton={dough.id}
              nameButton="dough"
              valueButton={dough.dough}
              text={dough.dough}
              price={dough.price}
              priceName="doughPrice"
              info={dough.info}
              action={getDough}
              getPrice={getDoughPrice}
            />
          ))}
        </div>
      )}
      <Link to="/borders">
        <Button text={'Próximo'} styles={'btn-primary'} />
      </Link>
      <Link to="/sizes">
        <Button text={'Voltar'} styles={'btn-secondary'} />
      </Link>
    </div>
  )
}

export default Dough

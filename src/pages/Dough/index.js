import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchDoughes, getDough } from '../../state'

import Button from '../../components/Button'
import Title from '../../components/Title'
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
      <Title text="Pizza" span="Shop" subText="Selecione a massa" />
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
              info={dough.info}
              action={getDough}
            />
          ))}
        </div>
      )}
      <Link to="/border">
        <Button text={'Próximo'} styles={'btn-primary'} />
      </Link>
      <Link to="/size">
        <Button text={'Voltar'} styles={'btn-secondary'} />
      </Link>
    </div>
  )
}

export default Dough

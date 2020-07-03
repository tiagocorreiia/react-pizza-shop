import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchSizes, getSize, getSizePrice } from '../../state'

import Button from '../../components/Button'
import NavBar from '../../components/NavBar/'
import SubTitle from '../../components/SubTitle/'
import RadioButton from '../../components/RadioButton'
import Spinner from '../../components/Spinner'

function Size() {
  const sizeData = useSelector((state) => state.size)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchSizes())
  }, [dispatch])

  return (
    <div className="container">
      <NavBar />
      <SubTitle text="Escolha o tamanho" />
      {sizeData.loading ? (
        <Spinner />
      ) : sizeData.error ? (
        <h2>{sizeData.error}</h2>
      ) : (
        <div>
          {sizeData.sizes.map((size) => (
            <RadioButton
              key={size.id}
              idButton={size.id}
              nameButton="size"
              valueButton={size.size}
              text={size.size}
              price={size.price}
              priceName={'sizePrice'}
              info={size.info}
              action={getSize}
              getPrice={getSizePrice}
            />
          ))}
        </div>
      )}
      <Link to="/doughes">
        <Button text="Próximo" styles="btn-primary" />
      </Link>
      <Link to="/choice">
        <Button text="Voltar" styles="btn-secondary" />
      </Link>
    </div>
  )
}

export default Size

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchSizes, getSize } from '../../state'

import Button from '../../components/Button'
import Title from '../../components/Title'
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
      <Title text="Pizza" span="Shop" subText="Selecione o tamanho" />
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
              info={size.info}
              action={getSize}
            />
          ))}
        </div>
      )}
      <Link to="/dough">
        <Button text="Próximo" styles="btn-primary" />
      </Link>
      <Link to="/choice">
        <Button text="Voltar" styles="btn-secondary" />
      </Link>
    </div>
  )
}

export default Size

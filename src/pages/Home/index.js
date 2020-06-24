import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import pizzaImage from '../../assets/pizza-svg.svg'

import './styles.css'

function Home() {
  return (
    <div className="home-container">
      <div>
        <h1>
          Pizza <span>Shop</span>
        </h1>
        <p>Seja muito bem-vindo!</p>
        <img src={pizzaImage} alt="" />
        <Link to="/choice">
          <Button text={'Fazer pedido'} styles={'btn-primary btn-width'} />
        </Link>
      </div>
    </div>
  )
}

export default Home

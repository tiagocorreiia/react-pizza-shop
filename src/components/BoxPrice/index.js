import React from 'react'
import './styles.css'

function BoxPrice({ price }) {
  return (
    <div className="box-price">
      <p>
        <span>Total:</span> R${price.toFixed(2)}
      </p>
    </div>
  )
}

export default BoxPrice

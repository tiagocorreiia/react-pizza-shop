import React from 'react'
import './styles.css'

function OrderBoxItem({ sizeItem, doughItem, borderItem, fillingItem }) {
  return (
    <div className="order-box-items">
      <div className="box-item">
        <p>
          <span>Tamanho:</span> {sizeItem}
        </p>
      </div>
      <div className="box-item">
        <p>
          <span>Massa:</span> {doughItem}
        </p>
      </div>
      <div className="box-item">
        <p>
          <span>Borda:</span> {borderItem}
        </p>
      </div>
      <div className="box-item">
        <p>
          <span>Recheio:</span> {fillingItem}
        </p>
      </div>
    </div>
  )
}

export default OrderBoxItem

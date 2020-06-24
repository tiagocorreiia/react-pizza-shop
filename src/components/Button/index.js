import React from 'react'
import './styles.css'

function Button({ text, styles }) {
  return <button className={styles}>{text}</button>
}

export default Button

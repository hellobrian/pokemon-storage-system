import React from 'react'
import styles from './styles.module.css'
import pokeball from './pokeball.png'

export const text = {
  altText: 'pokeball',
}

export const PokeballButton = () => (
  <button className={styles.root}>
    <img className={styles.img} src={pokeball} alt={text.altText} />
  </button>
)

export default PokeballButton

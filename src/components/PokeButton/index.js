import React from 'react'
import styles from './styles.module.css'
import pokeball from './pokeball.png'

export const text = {
  altText: 'pokeball',
}

export const PokeButton = ({ imgSrc, disabled }) => (
  <button className={styles.root} disabled={disabled}>
    <img className={styles.img} src={imgSrc} alt={text.altText} />
  </button>
)

export default PokeButton

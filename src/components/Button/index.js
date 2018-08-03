import React from 'react'
import styles from './styles.module.css'

export const Button = ({ children }) => (
  <button className={styles.root}>{children}</button>
)

export default Button

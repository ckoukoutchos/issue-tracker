import React from 'react';
import styles from './Card.module.css';

const Card = ({ children, selected }) => {
  return <div className={selected ? styles.selected : styles.card}>
    {children}
  </div>
}

export default Card;
import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
  const { children, type } = props;

  return <button className={styles.button} type={type}>{children}</button>
}

export default Button;
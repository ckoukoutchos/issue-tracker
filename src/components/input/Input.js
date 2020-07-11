import React from 'react';
import styles from './Input.module.css';

const Input = ({ onChange, label, name, placeHolder, type, value }) => {
  return <div className={styles.container}>
    <label className={styles.label} htmlFor={name} >{label}</label>
    <input
      className={styles.input}
      onChange={onChange}
      name={name}
      placeholder={placeHolder}
      type={type}
      value={value}
    />
  </div>
}

export default Input;
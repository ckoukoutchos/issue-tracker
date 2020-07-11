import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {
  const { onChange, label, name, placeHolder, type, value } = props;

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
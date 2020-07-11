import React from 'react';
import styles from './Link.module.css';

const Link = ({ children, onClick }) => {
  return <p className={styles.link} onClick={onClick}>
    {children}
    <svg className={styles.icon} viewBox="0 0 15 15">
      <path d="M10.71 7.29l-4-4a1.003 1.003 0 0 0-1.42 1.42L8.59 8 5.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z"></path>
    </svg>
  </p>
}

export default Link;
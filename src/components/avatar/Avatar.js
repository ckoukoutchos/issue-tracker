import React from 'react';
import styles from './Avatar.module.css';

const Avatar = ({ url }) => {
  return <img className={styles.avatar} src={url} alt="user avatar" />
}

export default Avatar;
import React from 'react';
import styles from './TopBar.module.css';

const TopBar = (props) => {
    return <div className={styles.topBar}>
        <h3 className={styles.title}>Issue Tracker</h3>
    </div>
}

export default TopBar;
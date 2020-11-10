import React from 'react';
import styles from './argentina-flag.module.css';

const ArgentinaFlag = ({isDemonym}) =>{
    return(<div className={styles.container}>
            <div className={styles.sun}/>
            <span className={styles.name}>{isDemonym? 'argentinian' : 'argentina'}</span>
        </div>)

}

export default ArgentinaFlag;
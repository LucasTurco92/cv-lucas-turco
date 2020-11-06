import React from 'react';
import styles from './argentina-flag.module.css';

const ArgentinaFlag = () =>{
    return(<div className={styles.container}>
            <div className={styles.sun}/>
            <span className={styles.name}>Argentina</span>
        </div>)

}

export default ArgentinaFlag;
import React from 'react';
import styles from './refencies.module.css'

const Refencies = (props) =>{
    return (
        <div className={styles.container}>
             <hr className={styles.barr}/>
            <h3>{props.title}</h3>
        </div>);

};

export default Refencies;
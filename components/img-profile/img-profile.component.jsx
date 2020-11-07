import React from 'react';
import styles from './img-profile.module.css';

const ImgProfile = () => {
    return (
       
        <div className={styles.container}>
        <div className={styles.band}> 
        <span className={styles.name}>Lucas Turco</span>
        <span className={styles.profession}>System Analyst & Developer</span>
        </div>
        <img  className={styles.imgProfile} src="./fotocv.JPG" alt="lucas-turco"/>
        </div>
        
    );
}

export default ImgProfile;
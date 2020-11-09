import React from 'react';
import styles from './img-profile.module.css';

const ImgProfile = () => {
    return (
       
        <div className={styles.container}>

        <img  className={styles.imgProfile} src="./fotocv.JPG" alt="lucas-turco"/>
        </div>
        
    );
}

export default ImgProfile;
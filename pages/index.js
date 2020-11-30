import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Cv from '../components/cv/cv.component.jsx';
import AnimatedBackground from '../components/animated-background/animated-background.component';

export default function Home() {
    return ( <
        div >
        <
        AnimatedBackground > <
        /AnimatedBackground> <
        div className = { styles.container } >

        <
        div className = { styles.containerCut }
        />   <
        Head >
        <
        link href = "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap"
        rel = "stylesheet" / >
        <
        /Head>



        <
        Cv / >
        <
        /
        div > < /
        div >

    )
}
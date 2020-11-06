import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Cv from '../components/cv/cv.component.jsx';

export default function Home() {
    return ( <
        div >

        <
        div className = { styles.container } >
        <
        div className = { styles.containerCut }
        /> <
        Head >
        <
        link href = "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap"
        rel = "stylesheet" / >
        <
        /Head>



        <
        Cv / >
        <
        /div>  < /
        div >

    )
}
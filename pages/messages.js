import Head from "next/head";
import Link from 'next/link';
import styles from '../styles/messages.module.css';
import Image from "next/image";
import logo from "..//public/slack.png";

const Messages = () => {
    return (
        <>
        <Head>
        <title>EDU MY CLASS|SLACK</title>
        <meta name="EDU COMMUNITY" content="Connect to the edu community channel and have a worth while experience" />
      </Head>
        <div className={styles.messagesContainer}>
            <div>
                <h1> EDU LEARNING COMMUNITY</h1>
                <h3>Welcome!!! </h3>
                <h3>To connect to edu_learning community slack workspace simply click the button below and get connected, 🙂 </h3>
            </div>
            <Link href='https://oul-edu-learning.slack.com/' passHref={true}>
            <Image className = {styles.messagesImage} src = {logo} width = {100} height = {90} alt = "slack logo"/>
            </Link>
        </div>
        </>
    );
}

export default Messages;
import styles from '../../styles/Contact.module.css';
import Head from 'next/head';

export default function Contact() {
    return (
        <div className="mainContainer">
            <Head>
                <title>Contact Us</title>
                <meta name="description" content="contact description goes here." />
                <meta name="keywords" content="contact, keywords" />
                <meta name="robots" content="index, follow" />
            </Head>

            <h1 className={styles.titleColor}>Contact Us</h1><br />
            <p>Fill in the form below to contact us.</p>
        </div>
    )
}
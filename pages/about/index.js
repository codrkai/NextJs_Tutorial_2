import styles from '../../styles/About.module.css';
import Head from 'next/head';

export const getStaticProps = () => {
    const SEOdata = [{
        "desc": "SEO for About page goes here",
        "keywords": "about, page, keywords, goes, here",
        "robots": "index, follow"
    }];

    return {
        props: {SEOdata}
    }
}

export default function About({SEOdata}) {
    return (
        <>
            {
                /*
                SEOdata.map(item => {
                    return (
                        <Head>
                            <title>Create Next App</title>
                            <meta name="description" content={item.desc} />
                            <meta name="keywords" content={item.keywords} />
                            <meta name="robots" content={item.robots} />
                        </Head>
                    )
                })
                */
            }

            <Head>
                <title>About Us</title>
                <meta name="description" content={SEOdata[0].desc} />
                <meta name="keywords" content={SEOdata[0].keywords} />
                <meta name="robots" content={SEOdata[0].robots} />
            </Head>

            <div className="mainContainer">
                <h1 className={styles.titleColor}>About Us</h1><br />
                <p>Creating easy learning programming tutorials for everyone.</p>
            </div>
        </>
    )
}
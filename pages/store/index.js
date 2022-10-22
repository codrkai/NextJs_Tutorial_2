import styles from '../../styles/Home.module.css';
import Products from '../../components/Products';

export const getStaticProps = async () => {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const data = await res.json();

    if (!data) {
        return {
            notfound: true,
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    } else {
        return {
            props: {data},
            //revalidate: 30
        }
    }
}

export default function Store({data}) {
    return (
        <div className={styles.container}>
        <h1>Store</h1><br />
        {
            <Products productsData={data} />
        }
        </div>
    )
}

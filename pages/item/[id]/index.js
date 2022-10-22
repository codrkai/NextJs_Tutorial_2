//import {useRouter} from 'next/router'
import styles from '../../../styles/Products.module.css'

//export const getServerSideProps = async (context) => {
export const getStaticProps = async (context) => {
    const res = await fetch(`https://fakestoreapi.com/products/${context.params.id}/`);
    const data = await res.json();
    return {
        props: {data}
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const data = await res.json();
    const ids = data.map(item => (item.id));

    // needs to be formatted as a string!
    // { params: {id:'1', id:'2', id:'3'} }
    const paths = ids.map(item => ({ params: {id:item.toString()} }));

    return {
        paths,
        fallback: false,
    }
}

const Item = ({data}) => {
    //const router = useRouter();
    //const {id} = router.query;
    //<h3>Post Number {id}</h3>

    return (
        <div className={styles.itemContainer}>
            <h2>{data.title}</h2>
            <br /><p><img src={data.image} height="150" /></p>
            <br /><p>image url: {data.image}</p>
            <br /><p>price: ${data.price}</p>
            <br /><p>category: {data.category}</p>
            <br /><p>description: {data.description}</p>
        </div>
    )
}

export default Item;
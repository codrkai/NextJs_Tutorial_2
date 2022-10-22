//import {useRouter} from 'next/router';
import styles from '../../../styles/Products.module.css'

export const getStaticProps = async (context) => {
    //const router = useRouter();
    //const {myid} = router.query;

    const res = await fetch(`https://fakestoreapi.com/products/${context.params.catid}/`);
    const data = await res.json();

    return {
        props: {data}
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/category/jewelery`);
    const data = await res.json();
    const ids = data.map(item => (item.id));

    const paths = ids.map(itemId => ({ params: {catid:itemId.toString(), category: 'jewelery'} }));

    return {
        paths,
        fallback: false
    }
}

const CategoryItem = ({data}) => {
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
};

export default CategoryItem;
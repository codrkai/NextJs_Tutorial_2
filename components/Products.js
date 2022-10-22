import styles from '../styles/Products.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Products = ({productsData}) => {
    return (
        <>
            {
                productsData.map( (item, index) => {
                    return (
                        <div className={styles.boxContainer} key={index}>
                            <div className={styles.box}>
                                <div className={styles.boxImage}>
                                    <Link href="/item/[id]" as={`/item/${item.id}`}><Image src={item.image} layout="fill" alt=""></Image></Link>
                                </div>
                                <br /><Link href="/item/[id]" as={`/item/${item.id}`}>{item.title}</Link>
                                <p>&nbsp;</p>
                                <p className={styles.boxPrice}>${item.price}</p>
                                <p><button className={styles.button}>Add to cart</button></p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Products;
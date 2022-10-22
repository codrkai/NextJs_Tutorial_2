import Head from 'next/head'
//import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Products from '../components/Products';
//import connectMongoDB from './utils/mongodb';

//export const getServerSideProps = async () => {
export const getStaticProps = async () => {
  /*
  const data = [{
    "id": "1",
    "title": "codr kai",
    "image": "https://picsum.photos/id/0/5616/3744"
  }];

  const mylist = [{
    "id": "2",
    "title": "eagle fang",
    "image": "https://picsum.photos/id/1003/1181/1772"
  }];

  connectMongoDB();
  */

  const res = await fetch(`https://fakestoreapi.com/products/category/jewelery`);
  const data = await res.json();

  if (!data) {
    return {
      notfound: true,
      /*
      redirect: {
        destination: '/',
        permanent: false,
      },
      */
    }
  } else {
    return {
      props: {data},
      //revalidate: 30
    }
  }
}

export default function Home({data}) {

  const handleSubmit = async(event) => {
    event.preventDefault();

    const data = {
      id: event.target.id.value,
      title: event.target.title.value
    };

    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    };

    const response = await fetch('/api/form', options);
    const result = await response.json();
    alert(`Title: ${result.title}`);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Homepage SEO" />
        <meta name="keywords" content="homepage, keywords" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <h1>Home</h1><br />
      
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input type="text" id="title" name="title" placeholder="keyword search..." />
        <input type="hidden" id="id" name="id" value="123" />
        <button type="submit">Submit</button>
      </form>
      <p>&nbsp;</p>

      {
      /*
      <script>
        function validateForm() {
          const id = document.querySelector('#id').value;
          const title = document.querySelector('#title').value;
          if (!title) {
            alert('Enter a title!');
            return false;
          } else {
            alert('id: ' + id + ', title: ' + title);
            return false;
          }
        }
      </script>
      */
      }

      {
        <Products productsData={data} />
      }
    </div>
  )
}

import Head from 'next/head';

import '../styles/globals.css';
import Layout from '../components/layout/layout';
import Image from 'next/image';

function MyApp({ Component, pageProps }) {
  return (
    
    <div className="image-and-div-stack">
      <Image src='/images/site/bg-header.png'
  width={413}
          height={743}/>;
      <div className="overlay-div">
      <Layout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
      

    </Layout>

      </div>
    </div>
    
  );
}

export default MyApp;

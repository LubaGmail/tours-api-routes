import { BrowserRouter } from 'react-router-dom'
import Head from 'next/head'

import '../styles/globals.css'
import Layout from '../components/layout/layout'

function MyApp({ Component, pageProps }) {

  return (

    <Layout>
      <Head>
        <title>Time travel with TimeKeeper™ </title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel = "icon" href = "/images/icons8-pyramids-48.png" type = "image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </Layout>

  );
}

export default MyApp

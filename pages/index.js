import Head from 'next/head'
import Image from 'next/image'

import styles from './index.module.css'
// import {intro} from '../data/dummy-tours'
import intro from '../components/util/tours-data'

function HomePage() {
 
  return (
    <div>
      <div>
        <Head>
          <title>Explore the past and the future firsthand</title>
          <meta
            name='Time travel tours'
            content='with TimeKeeper™'
          />
        </Head>
      </div>
           
      <div className={styles.home}>
        <h2> Explore the Past Firsthand...</h2>
        <div className={styles.intro}>
          <p>
            {intro}
          </p>
          
        </div>

        <div>
          <Image src='/images/pyramid.jpg' alt='Egypt' className={styles.image}
            width={800}  height={700}
          />
        </div>
    </div>

    </div>
  )
}

export default HomePage
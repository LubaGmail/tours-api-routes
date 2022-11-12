import { useEffect, useState } from 'react' 
import Head from 'next/head'

import { getAllTours } from '../../data/dummy-tours'
import styles from './tours-list.module.css'
import TourDetail from '../tour-detail'

const ToursList = ({tours}) => {

    return (

        <>
            <Head>
                <meta 
                    name='Time travel tours'
                    context='Browse and search time travel tours'
                />
            </Head>
            <div className={styles.list}>
            {
                tours?.map(el => (
                    <li key={el.tourid} >
                        <TourDetail tour={el} />
                    </li>
                ))
                }
            </div>
        </>
    )
}

export default ToursList
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { router } from 'next/router'

import Logistics from '../../components/tour-detail/logistics'
import { getTour } from '../../components/util/tours-data'   
import PushButton from '../../components/ui/buttons/push-button'   

const TOURS_API = '/api/tours/'

const TourPage = (props) => {
    const router = useRouter()
    const tourid = router.query.tourid
    const [tour, setTour] = useState(props.tour)
    const [errorInfo, setErrorInfo] = useState()

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(TOURS_API + `${tourid}`)
            const status = (await res).status
            const resJson = await res.json()
        
            if (status === 200) {
                setTour(resJson.data)
            } else {
                const obj = {
                    status: status,
                    appStatus: resJson.appStatus,
                    error: resJson.error
                }
                setErrorInfo(obj)
            }
        }
        getData()

    }, [tourid])

    if (errorInfo) {
        return (
            <div className='center'>
                <h3>Error occured</h3>
                <p>{JSON.stringify(errorInfo)}</p>
            </div>
        )
    }

    return (
        <div className="center">
            <h2>{tour?.title}</h2>
            <Logistics tour={tour} />

            <p></p>
            <PushButton fn={el => router.back()}>
                Go Back
            </PushButton>

        </div>
    )   
}

export async function getStaticPaths() {
    /* 
        Expected: { paths: [ {params: {key: value} } ], fallback: boolean }
    */
    return {
        paths:
            [
                { params: { tourid: 't1' } },
                { params: { tourid: 't3' } }
            ],
            fallback: 'blocking'
       }
}

export async function getStaticProps(context) {
    const tourid = context.params.tourid
    const tour = await getTour(tourid)
  
    if (!tour) {
        return {
          notFound: true,
        }
    }

    /* 
        Expected: { props: { key: value } }
    */
    return {
        props: {
            tour: tour
        },
        revalidate: 3600                // secs
    }
}

export default TourPage
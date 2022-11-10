import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { router } from 'next/router'

import Logistics from '../../components/tour-detail/logistics'
import { getTour } from '../../components/util/tours-data'   
import PushButton from '../../components/ui/buttons/push-button'   

const TourPage = (props) => {
    const router = useRouter()
    const tourid = router.query.tourid
    const [tour, setTour] = useState(props.tour)

    // useEffect(() => {
    //     const t = getTourById(tourid)
    //     setTour(t)
    // }, [tourid])

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
        
    }
}

export default TourPage
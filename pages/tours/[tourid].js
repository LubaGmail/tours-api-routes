import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import Logistics from '../../components/tour-detail/logistics'
import { getTourById } from '../../data/dummy-tours'

const TourPage = (props) => {
    const router = useRouter()
    const tourid = router.query.tourid
    
    const [tour, setTour] = useState({})

    useEffect(() => {
        const t = getTourById(tourid)
        setTour(t)
    }, [tourid])

    if (!tour) {
        return (
            <p className='errorMessage'>No tour with id: {tourid}</p>
        )
    }

     return (

        <div>
            <h2 className="center">{tour?.title}</h2>
            <Logistics tour={tour} />
        </div>
    )   
}

export default TourPage
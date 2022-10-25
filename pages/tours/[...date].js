import { useRouter } from 'next/router'

import { filterTours } from '../../data/dummy-tours'
import ToursList from '../../components/tours/tours-list'

const FilteredToursPage = props => {
    const router = useRouter()
    let dt = router.query.date

    if (!dt) {
        return (
            <p>Loading...</p>
        )
    }
    const year = router.query.date[0]
    const month = router.query.date[1]
  
    if (isNaN(year) || isNaN(month)) {
        return (
            <div>
                <p className='errorMessage'>Invalid date: {year}, {month}</p>
            </div>
            
        )
    }

    const nYear = +year; const nMonth = +month
    const tours = filterTours(nYear, nMonth)

    if (tours?.length === 0) {
        return (
            <div>
                <h2 className="center">{JSON.stringify(router.query)}</h2>
                <p className='infoMessage'>No tours found for the above date. </p>
            </div>
        )
    }
    
    return (

        <>
            <h2 className="center">Filtered Tours: {JSON.stringify(router.query)}</h2>
            <ToursList tours = {tours} />
        </>
    )
}

export default FilteredToursPage
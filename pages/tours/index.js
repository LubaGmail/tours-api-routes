import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ToursData, {getTours} from '../../components/util/tours-data'

// import { getAllTours } from '../../data/dummy-tours'
import ToursList from '../../components/tours/tours-list'
import SearchForm from '../../components/tours/search-form'

const AllToursPage = props => {
    const [tours, setTours] = useState(props.tours)
    const router = useRouter()

    // useEffect(() => {
    //     setTours(getTours())
    // }, [])

    const handleSearch = (year, month) => {
        const fullPath = `/tours/${year}/${month}`
        router.push(fullPath);
    }

    return (

        <>
            <SearchForm handleSearch={handleSearch} />
            <ToursList tours={tours} />
        </>
    )
}

export async function getStaticProps(context) {
    const tours = await getTours()

    return {
        props: {
            tours: tours
        },
        revalidate: 1000
    }
}

export default AllToursPage 
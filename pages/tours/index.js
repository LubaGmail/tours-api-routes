import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {getTours} from '../../components/util/tours-data'

// import { getAllTours } from '../../data/dummy-tours'
import ToursList from '../../components/tours/tours-list'
import SearchForm from '../../components/tours/search-form'

const TOURS_API = '/api/tours/'

const AllToursPage = props => {
    const [tours, setTours] = useState(props.tours)
    const router = useRouter()

    useEffect(() => {
        console.log('pages/tours/index useEffect()')
        const getData = async () => {
            const response = await fetch(TOURS_API)
            const responseJson = await response.json()
            const statusCode = response.status
            const appStatus = responseJson.status
            const data = responseJson.data

            setTours(data)
        }
        getData()
    }, [])

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
    console.log('pages/tours/index getStaticProps')
    const tours = await getTours()

    return {
        props: {
            tours: tours
        },
        revalidate: 3600            // 1 hour
    }
}

export default AllToursPage 
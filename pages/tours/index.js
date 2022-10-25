import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { getAllTours } from '../../data/dummy-tours'
import ToursList from '../../components/tours/tours-list'
import SearchForm from '../../components/tours/search-form'

const AllToursPage = props => {
    const [tours, setTours] = useState([])
    const router = useRouter()

    useEffect(() => {
        setTours(getAllTours())
    }, [])

    const handleSearch = (year, month) => {
        console.log('allToursPage.handleSearch', year, month)
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

export default AllToursPage 
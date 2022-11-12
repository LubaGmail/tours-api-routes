import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Head from 'next/head'

// import { filterTours } from '../../data/dummy-tours'
import ToursList from '../../components/tours/tours-list'
import PushButton from '../../components/ui/buttons/push-button'

const TOURS_API = '/api/tours/'

const FilteredToursPage = props => {
    const router = useRouter()
    let dt = router.query.date
    
    const year = router.query.date[0]
    const month = router.query.date[1]
    
    const [errorInfo, setErrorInfo] = useState()
    const [status, setStatus] = useState()
    const [tours, setTours] = useState()
    const [isLoading, setIsLoading] = useState()
    
    useEffect(() => {
        setIsLoading(true)
        fetch(TOURS_API + `${year}/${month}`)
            .then(res => {
                setStatus(res.status)
                return res.json()
            })
            .then(jsonRes => {
                if (status === 200) {
                    setTours(jsonRes.data)   
                } else if (status === 422) {
                    const obj = {
                        appStatus: jsonRes.appStatus,
                        error: jsonRes.error
                    }
                    setErrorInfo(obj)
                } 
                setIsLoading(false)
            })
 
    }, [year, month, status])

    if (isNaN(year) || isNaN(month)) {
        return (
            <div className='center'>
                <p className='errorMessage'>Invalid date: {year}, {month}</p>
                <p></p>
                <PushButton fn={el => router.back()}>
                    Go Back
                </PushButton>
            </div>
            
        )
    }

    if (isLoading) {
        <p>Loading...</p>
    }

    if (errorInfo) {
        return (
            <div className='center'>
                <h3>Error occured:</h3>
                <p>{JSON.stringify(errorInfo)}</p>
            </div>
        )
    }

    if (tours?.length === 0) {
        return (
            <div  className="center">
                <h2>{JSON.stringify(router.query)}</h2>
                <p className='infoMessage'>No tours found for the above date. </p>
                <p></p>
                <PushButton fn={el => router.back()}>
                    Go Back
                </PushButton>

            </div>
        )
    }
    
    return (
        <>
            <Head>
                <title>Tours available in {year}/{month}</title>
            </Head>
            <h2 className="center">Filtered Tours: {JSON.stringify(router.query)}</h2>
            <ToursList tours = {tours} />
        </>
    )
}

export default FilteredToursPage
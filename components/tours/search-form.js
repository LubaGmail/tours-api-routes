import {useRef, useState} from 'react'

import styles from './search-form.module.css'
import SearchIcon from '../ui/icons/search-icon'

const SearchForm = ({handleSearch}) => {
    const yearRef = useRef()
    const monthRef = useRef()
    const [error, setError] = useState()

    const handleSubmit = ev => {
        ev.preventDefault()
        const year = +(yearRef.current.value)
        const month = +(monthRef.current.value)

        if (isNaN(year) || isNaN(month)) {
            setError('Invalid date: ' + year + ', ' + month)
        } else {
            handleSearch(year, month)
        }
    }

    if (error) {
        return (
            <p className='greenbox'>error</p>
        )
    }

    return (

        <>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.controls}>
                    <div className={styles.control}>
                        <label htmlFor='year'>Search: </label>
                        <select id='year' name='year' ref={yearRef}>
                            <option value='2022'>2022</option>
                            <option value='2023'>2023</option>
                        </select>
     
                        <label htmlFor='month'>Month:</label>
                        <select id='month' name='month' ref={monthRef}>
                            <option value='1'>January</option>
                            <option value='2'>February</option>
                            <option value='3'>March</option>
                            <option value='4'>April</option>
                            <option value='5'>May</option>
                            <option value='6'>June</option>
                            <option value='7'>July</option>
                            <option value='8'>August</option>
                            <option value='9'>September</option>
                            <option value='10'>October</option>
                            <option value='11'>November</option>
                            <option value='12'>December</option>
                        </select>

                        
                        <button type='submit'>
                            <span><SearchIcon /></span>
                            <span> </span>
                        </button>
                    </div>
                </div>
  
            </form>
        </>
    )
}

export default SearchForm
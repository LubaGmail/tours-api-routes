import { useRef, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import styles from './search-form.module.css'

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

        <div>
            <form onSubmit={handleSubmit} className={styles.form}>

                <div>
                    <label htmlFor='year'>Year: &nbsp;</label>
                    <select id='year' name='year' ref={yearRef}>
                        <option value='2022'>2022</option>
                        <option value='2023'>2023</option>
                    </select>
                </div>

                <div>
                    <label htmlFor='month'>Month: </label>
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
                </div>
                <div>
                    <label>&nbsp;</label>
                    <button type='submit' id='btn' name='btn'>
                        Search
                    </button>
                </div>
  
            </form>
        </div>
    )
}

export default SearchForm
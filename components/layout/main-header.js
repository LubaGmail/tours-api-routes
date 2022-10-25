import Link from 'next/link'

import styles from './main-header.module.css'

const MainHeader = props => {

    return (

        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href='/'>Ancient Tours</Link>
            </div>
            <nav className={styles.navigation}>
                <ul className={styles.list}>
                    <li>
                        <Link href='/tours'>All Tours</Link>
                    </li>
                 </ul>
            </nav>
        </header>
    )
}

export default MainHeader
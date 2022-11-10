import Link from 'next/link';

import styles from './button.module.css'

const LinkButton = props => {
    /**
        props.link:          /tours/t3
        props.children:     {children: 'Explore Tour'}
     */

    return (
        <div className={styles.container}>
            <Link href={props.link}>
                <a className={styles.btn}>
                    {props.children}
                </a>
            </Link>
        </ div>
    )
}

export default LinkButton
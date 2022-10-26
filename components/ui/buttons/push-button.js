import Link from 'next/link';

import styles from './button.module.css'

const PushButton = props => {

    return (
        <div className={styles.container}>
            <button className={styles.btn} onClick={props.fn}>
                {props.children}
            </button>
       </ div>
    )
}

export default PushButton
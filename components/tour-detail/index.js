import Link from 'next/link'

import styles from './index.module.css'
import LinkButton from '../ui/buttons/link-button';

const TourDetail = ({ tour }) => {
    const exploreLink = `/tours/${tour.tourid}`;

    return (
        <div className="center" >
            <div className={styles.item}>
                <div>
                    <img src={tour.image} alt={tour.title}  className={styles.image} />
                </div>
                <div className={styles.title}>
                    {tour.title}
                </div>
                <div className={styles.desc}>
                    {tour.desc.substr(0, 150)}...
                </div>

                <div>
                    <LinkButton link={exploreLink}>
                        <span>Explore Tour</span>
                    </LinkButton>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default TourDetail
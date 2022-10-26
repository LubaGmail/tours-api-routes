import Image from 'next/image'

import styles from './index.module.css'
import LinkButton from '../ui/buttons/link-button';

const TourDetail = ({ tour }) => {
    const exploreLink = `/tours/${tour.tourid}`;

    return (
        <div className="center" >
            <div className={styles.item}>
                <div>
                    <Image src={tour.image} alt={tour.title} className={styles.image}
                        width={642 } height={400}
                    />
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
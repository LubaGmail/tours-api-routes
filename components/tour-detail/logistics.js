import styles from './logistics.module.css'

import Card from '../ui/containers/card'

const Logistics = ({ tour }) => {
    const formStartDate = new Date(tour?.startDate).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const formEndDate = new Date(tour?.endDate).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (

        <div className='center'>
            <Card>
                <table className={styles.tab} >
                    <tbody>
                        <tr>
                            <td>Tour ID:</td>
                            <td>{tour?.tourid}</td>
                        </tr>
                        <tr>
                            <td>Title:</td>
                            <td>{tour?.title}</td>
                        </tr>

                        <tr>
                            <td>Start:</td>
                            <td>{formStartDate}</td>
                        </tr>
                        <tr>
                            <td>End:</td>
                            <td>{formEndDate}</td>
                        </tr>

                        <tr>
                            <td>Price:</td>
                            <td>${tour?.price}</td>
                        </tr>
                        <tr>
                            <td>Period:</td>
                            <td>{tour?.period}</td>
                        </tr>

                    </tbody>
                </table>
            </Card>
            
            <div className={styles.story}>
                {tour?.desc}
            </div>
            
        </div>
    )
}

export default Logistics
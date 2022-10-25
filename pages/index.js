import styles from './index.module.css'
import {intro} from '../data/dummy-tours'

function HomePage() {
 
  return (
    <div>
      
      <h2 className='center'> Explore the Past Firsthand...</h2>
      <div className={styles.intro}>
        <p>
          {intro}
        </p>
         
      </div>

      <div>
        <img src='images/pyramid.jpg' alt='Egypt'   className={styles.image}
        />
      </div>

    </div>
  )
}

export default HomePage
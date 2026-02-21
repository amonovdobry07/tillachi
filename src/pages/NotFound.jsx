import { Link } from 'react-router-dom'
import SimplePage from './SimplePage'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <SimplePage title="404" subtitle="This page went into the furnace and came out as vapor.">
      <div className={styles.box}>
        <p className={styles.text}>The route you requested does not exist.</p>
        <Link className={styles.btn} to="/">Go Home</Link>
      </div>
    </SimplePage>
  )
}

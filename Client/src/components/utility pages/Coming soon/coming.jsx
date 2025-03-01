import React from 'react'
import styles from './coming.module.css'

const Coming = () => {
  return (
    <div className={styles.upcoming}>
        <h1 className={styles.u_head}>
            Under Construction
        </h1>

        <h3 className={styles.u_main}>
        We're working on something amazing. Stay tuned!
        </h3>
    </div>
  )
}

export default Coming
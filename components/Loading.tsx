import React from 'react'

import styles from './Loading.module.css'

const Loading = () => {
  return (
    <div className={styles.loading}>
      <svg className={styles.ring} viewBox='25 25 50 50' strokeWidth='5'>
        <circle cx='50' cy='50' r='20' />
      </svg>
    </div>
  )
}

export default Loading

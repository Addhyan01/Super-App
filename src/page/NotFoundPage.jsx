import React from 'react';
import styles from './NotFoundPage.module.css'

export default function NotFoundPage() {
  return (
    <>
    <div className={styles.container}>
        <h1>404 Not Found</h1>
        <p>Sorry, The page you are looking for does not exits</p>
    </div>
    </>
  )
}

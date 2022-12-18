import React from 'react'
import styles from '../styles/history.module.css'
import Navbar from '../Components/Navbar'
const history = () => {
  return (
      <>
          <Navbar />
          <h1 className={styles.histo}> There is currently no history</h1>
    </>
  )
}
export default history
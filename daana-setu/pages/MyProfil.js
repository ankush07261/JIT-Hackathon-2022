import React from 'react'
import Navbar from '../Components/Navbar'
import styles from '../styles/myprofile.module.css'

function Myprofil() {
  return (
      <>
          <Navbar />
          <div>
          <div className={styles.dp}>
              
          </div>
          <h1 className={styles.name}>Name</h1>
          <ul className={styles.profil}>
              <li>Total Donations: x</li>
              <li>Points: y</li>
          </ul></div>
    </>
  )
}

export default Myprofil
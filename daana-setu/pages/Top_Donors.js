import React from 'react'
import Navbar from '../Components/Navbar'
import styles from '../styles/Top_Donors.module.css'

const Top_Donors = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.person}>
          <h2 >No.   |     Donors        |      Points</h2>
        </div>
        <div className={styles.person}>
          <h2>1.   |  Person1        |  92</h2>
        </div>
        <div className={styles.person}>
<h2>2.  |   Person2    |      88</h2>
        </div>
        <div className={styles.person}>
<h2>3.   |  Person3      |    68</h2>
        </div>
        <div className={styles.person}>
<h2>4.  |   Person4     |     64</h2>
        </div>
        <div className={styles.person}>
<h2>5.   |  Person5      |    54</h2>
        </div>
        </div>
    </>
  )
}

export default Top_Donors
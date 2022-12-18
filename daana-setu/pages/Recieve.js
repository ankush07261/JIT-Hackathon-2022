import React from 'react'
import Navbar from '../Components/Navbar'
import styles from '../styles/Recieve.module.css'

const Recieve = () => {
  return (
    <>
          <Navbar />
          <div className={styles.con}>
              <div>
          <label htmlFor="email">Name of the organisation: </label>
          <input className={styles.for}
            type=""
            name=""
            
          />
              </div>

              <br></br>
              <div>
          <label htmlFor="email">How would you describe your organisation: </label>
          <input className={styles.for}
            type="email"
            name="email"
          />
              
              
              </div><br></br>
              <div>
          <label htmlFor="email">Address: </label>
          <input className={styles.for}
            type="email"
            name="email"
          />
          </div>
              <br></br>
              <h3>Upload the oraganixatioin legal files</h3>
          <button className={styles.upload}>upload license</button>
                  
              <button className={styles.upload}>upload landmark
                  photos</button>
              <button className={styles.upload}>upload
              photos</button>
          </div>
    </>
  )
}

export default Recieve
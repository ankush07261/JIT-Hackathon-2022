import React from 'react'
import Navbar from '../Components/Navbar'
import styles from '../styles/donate.module.css'



const donate = () => {
  return (
      <>
          <Navbar/>
    <div className={styles.con}>
              <div>
          <label htmlFor="email">What do you wish to donate: </label>
          <input className={styles.for}
            type=""
            name=""
            
          />
              </div>

              <br></br>
              <div>
          <label htmlFor="email">How would you describe your item: </label>
          <input className={styles.for}
            type="email"
            name="email"
          />
              </div><br></br>
              <div>
          <label htmlFor="email">How old is the item: </label>
          <input className={styles.for}
            type="email"
            name="email"
          />
              </div><br></br>
              <div>
          <label htmlFor="email">Your house address: </label>
          <input className={styles.for}
            type="email"
            name="email"
          />
          </div>
          <br></br>
          <button className={styles.upload}>upload
              photos</button>
          </div>
    </>
  )
}

export default donate
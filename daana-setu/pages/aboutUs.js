import React from 'react'
import Navbar from '../Components/Navbar'
import styles from '../styles/aboutUs.module.css'

const aboutus = () => {
  return (
    <>
          <Navbar />
          <div className={styles.box}>
              <h1 className={styles.abouth}>About us</h1>
              <p className={styles.about}>
                  In today's society, people generally have various unused unwanted items which they would want to donate. On the other hand, there are multiple orphanages and old age homes which are in dire need of such items. 
                  <br></br>
                  <br></br>
Problem arises when both these parties are not able to come in contact with each other in an easy and effective manner. Time and energy is wasted from both ends searching for the other party. Moreover, the fact that the items donated can be misused or sold to third parties always exists, and is a cause for concern.
                  <br></br>
                  <br></br>
 That's where DaanaSetu comes to the rescue. This website connects the donor to the old age homes and orphanages directly in a reliable, effective, efficient, and secure manner. The satisfaction of knowing that your donated item will be put to the best use for the people who need it the most is priceless, and that's what we here at DaanaSetu strive to achieve.
                  <br></br>
                  <br></br>
Come join us today in this venture to give back to the society. Become a donor at Daanasetu and be the reason for someone's happiness.
              </p>
          </div>
          <ul className={styles.pptc}>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
          </ul>
    </>
  )
}

export default aboutus
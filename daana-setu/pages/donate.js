import React from 'react'
import Navbar from '../Components/Navbar'
import styles from '../styles/donate.module.css'



const donate = () => {
//     var digits = '0123456789';
//     let OTP = '';
//     for (let i = 0; i < 6; i++ ) {
//         OTP += digits[Math.floor(Math.random() * 10)];
//     }
//     document.getElementById('otp').innerHTML= OTP;
  return (
    <>
          <Navbar />
          {/* <generateOTP/> */}
          <p id="otp"></p>
    </>
  )
}

export default donate
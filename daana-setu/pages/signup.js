import React from 'react'
import Navbar from '../Components/Navbar'
import styles from '../styles/signup.module.css'

// const login = () => {
//   return (
//     <>
//           <Navbar/>
//     </>
//   )
// }

// export default login
import { useState } from 'react'

// import { login } from '../lib/auth'

const Signup = () => {
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(email, password)
    } catch (error) {
      setError(error.message)
    }
  }

  return (<>
      <Navbar />
      <div className="con">
      <div onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label htmlFor="email">Email: </label><br></br>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password"> Create Password: </label>
          <br></br>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
              </div>
              <div>
          <label htmlFor="password"> Confirm Password: </label>
          <br></br>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div>{error}</div>}
        <button type="submit" className={styles.submit}>Sign up</button>
          </div>
          </div>
    </>
  )
}

export default Signup
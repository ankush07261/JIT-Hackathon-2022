import React from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'

const Navbar = () => {
  return (<>
      <div className={styles.navbar}>
          <Image src="/logo.png" width="200" height="50" className={styles.clogo}></Image>
          <ul className={styles.navnav}>
            <Link href="/"><li>Home</li></Link>
              <Link href="/aboutUs"><li>About us</li></Link>
          <Link href="/login"><li>Login</li></Link>
              <Link href="/signup"><li>Sign up</li></Link>
              <Link href="/MyProfil"><li>My Profile🧑</li></Link>
        </ul>
      </div>
      
  </>
  )
}

export default Navbar
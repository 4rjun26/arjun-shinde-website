import React from 'react'
import Link from 'next/link'
import styles from 'sample/styles/Home.module.css'
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {

  return (
    <> 
      <div className={styles.desktopnav}>
        <ul>
          <li><Link href={'/#'} className={styles.navlinks}>Home</Link></li>
          <li><Link href={'/#'} className={styles.navlinks}>About</Link></li>
          <li><Link href={'/#'} className={styles.navlinks}>Works</Link></li>
          <li><Link href={'/#'} className={styles.navlinks}>Contact</Link></li>
          <li><Link href={'/#'} className={styles.navlinks}>Other</Link></li>
        </ul>

        <label className={styles.label}>
        <input type="checkbox" id="check"/> 
      <span></span>
      <span></span>
      <span>
      <ul className={styles.hamul}>
          <li><Link href={'/#'} className={styles.hamlinks}>Home</Link></li>
          <li><Link href={'/#'} className={styles.hamlinks}>About</Link></li>
          <li><Link href={'/#'} className={styles.hamlinks}>Works</Link></li>
          <li><Link href={'/#'} className={styles.hamlinks}>Contact</Link></li>
          <li><Link href={'/#'} className={styles.hamlinks}>Other</Link></li>
        </ul>
      </span>
    </label>
      </div>
  
    </>
  )
}

export default Navbar
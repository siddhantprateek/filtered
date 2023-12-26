import React from 'react'
import styles from './styles/footer.module.css';
const Footer = () => {
  return (
    <div className={styles.footer_outer}>
      <div className={styles.footer}>
        <div className={styles.footer_left}>
          © Filtered. Inc.
        </div>
        <div className={styles.footer_right}>
          <ul>
            <li>About</li>
            <li>News</li>
            <li>Connect</li>
            <li>Subscribe</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;
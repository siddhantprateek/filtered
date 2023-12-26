import React from 'react'
import styles from './styles/subheader.module.css';

const Subheader = () => {
  return (
    <div className={styles.sub_header}>
      <div className={styles.sub_header_box}>
        <div className="left_sub_header">
          <p>
            <span>Trending</span>
            <span>Latest</span>
          </p>
        </div>
        <div className="right_sub_header">
          <h2>Headline news</h2>
        </div>
      </div>
    </div>
  )
}

export default Subheader;
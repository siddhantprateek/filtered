import React from 'react'
import styles from './styles/newscard.module.css';


const NewsCardView = (props) => {
  const dateString = props.publishedAt;
  const date = new Date(dateString);

  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-GB', options);

  return (
    <div className={styles.news_card_view_container} key={props.key}>
      <div className={styles.news_thumbnail}>
        {props.urlToImage ? 
         <picture>
           <img src={props.urlToImage} alt="" />
         </picture>
          :
          <p className={styles.news_content}>
          {props.description}{" "}
          {props.content}
        </p>
      }
        
      </div>
      <div>
        {props.size === 'main' ?
          <h1 className={styles.main_title}>
            {props.title}
          </h1>
          :
          <h3 className={styles.news_card_title}>
            {props.title}
          </h3>
        }

        {props.size === 'main' ?
          <p className={styles.main_news_content}>
            {props.description}{" "}
            {props.content}
          </p>
          : ""}

        <p className={styles.author_content}>
          {formattedDate} <span className={styles.news_author}> ~ {props.author}</span>
        </p>
      </div>
    </div>
  )
}

export default NewsCardView
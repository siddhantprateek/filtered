import styles from './styles/search_card.module.css';

const SearchedCard = (props) => {

  const date = new Date(props.publishedAt);

  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-GB', options);

  return (
    <div className={styles.search_card_container} key={props.key}>
      <div className={styles.date_source}>
        {formattedDate}
      </div>
      <div className={styles.central_content}>
        <div>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <p></p>
        </div>
        
        <b>{props.source_name}</b>
      </div>
      <div 
        className={styles.article_thumbnail}
        style={{ 
          backgroundSize: 'cover',          
          backgroundImage: `url('${props.urlToImage}')`,
        }}
      >
      </div>
    </div>
  )
}

export default SearchedCard;
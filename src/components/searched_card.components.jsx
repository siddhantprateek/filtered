// import { addFavorite } from '@/firebase/storage/storage';
import { addFavorite, removeFavorite } from '@/firebase/storage/storage';
import styles from './styles/search_card.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export const getStaticProps = async () => {
  let res = await addFavorite()
  const data = await res.json()
  return {
    props: { data: data }
  }
}



const SearchedCard = (props) => {
  const [liked, setLiked] = useState(false);
  const date = new Date(props.publishedAt);

  const router = useRouter()

  useEffect(() => {
    // Check if the current path is "/profile" and set liked to true
    if (router.pathname === '/profile') {
      setLiked(true);
    }
  }, [router.pathname]);

  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-GB', options);

  const handleLiked = async (event) => {
    setLiked(!liked)
    // console.log(props)

    if (liked === false) {
      let dataValue = {
        source: {
          id: props.source_id,
          name: props.source_name
        },
        author: props.author,
        title: props.title,
        description: props.description,
        url: props.url,
        urlToImage: props.urlToImage,
        publishedAt: props.publishedAt,
        content: props.content
      }
      await addFavorite(dataValue)
    }else {
      if(props.id) {
       const response =  await removeFavorite(props.id)
       if(response === "deleted") {
         window.location.reload()
       }
      }
    }

  }

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
        {
          !liked ?
            <picture onClick={handleLiked}>
              <img style={{ height: '1.5rem', cursor: 'pointer' }} src={"https://img.icons8.com/ios/100/like--v1.png"} alt="like--v1" />
            </picture>
            :
            <picture onClick={handleLiked}>
              <img style={{ height: '1.5rem', cursor: 'pointer' }} src={"https://img.icons8.com/ios-filled/100/like--v1.png"} alt="like--v1" />
            </picture>
        }
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
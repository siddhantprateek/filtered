import { useRouter } from 'next/router';
import SearchedCard from '@/components/searched_card.components';
import styles from './news_slug.module.css';
import { useState } from 'react';

export async function getStaticPaths() {

  return {
    paths: [],
    fallback: 'blocking',
  };
}

export const getStaticProps = async (context) => {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_APIKEY;
  const { params } = context

  let res = await fetch(`https://newsapi.org/v2/everything?q=${params.topic}&apiKey=${apiKey}`)
  const data = await res.json()
  return {
    props: { data: data }
  }
}

export default function Page({ data }) {
  const [showMore, setShowmore] = useState(10);
  const router = useRouter()


  return (
    <div style={{ padding: '0 2rem' }}>
      <div className={styles.section_header}>
        <h1>Filtered Section: {router.query.topic}</h1>
        <p>{ data.status === "ok" ? `${data?.totalResults}` : '0'} Search results.</p>
      </div>
      { data.status === "ok" && data?.articles.slice(0, showMore).map((article, index) => (
        <>
          <SearchedCard
            author={article.author}
            content={article.content}
            description={article.description}
            publishedAt={article.publishedAt}
            source_id={article.source.id}
            source_name={article.source.name}
            title={article.title}
            url={article.url}
            urlToImage={article.urlToImage}
            key={index}
          />
        </>
      ))}
      <div className={styles.show_more_button_section}>
        <button onClick={() => setShowmore(showMore + 10)}>Show More</button>
      </div>
    </div>
  );
}


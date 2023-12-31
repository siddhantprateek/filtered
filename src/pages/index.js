import Head from 'next/head'
import Image from 'next/image'
import { Playfair } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect } from 'react'
import { NewsCardView, SubHeader } from '../components';

const inter = Playfair({ subsets: ['latin'] })


export const getStaticProps = async () => {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_APIKEY;
  let res = await fetch(`https://newsapi.org/v2/everything?q=politics&apiKey=${apiKey}`)
  const data = await res.json()
  return {
    props: { data: data }
  }
}


export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Filtered</title>
        <meta name="description" content="Stories that ignite. Insights that inspire." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <SubHeader />
        <div className={styles.container}>
          <div className={styles.headline_grid}>
            { data.status === "ok" &&
              data?.articles.slice(0, 1).map((article, index) => (
                <div className={styles.Main_containr}>
                  <NewsCardView
                    source_id={article.source.id}
                    source_name={article.source.name}
                    size='main'
                    key={index}
                    {...article}
                  />
                </div>
              ))
            }
            { data.status === "ok" &&
              data?.articles.slice(1, 6).map((article, index) => (
                <div className={styles.short_container + "0"}>
                  <NewsCardView
                    source_id={article.source.id}
                    source_name={article.source.name}
                    key={index}
                    {...article}
                  />
                </div>
              ))
            }
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.headline_grid2}>
            { data.status === "ok" && 
              data?.articles.slice(16, 17).map((article, index) => (
                <div className={styles.Main_containr}>
                  <NewsCardView
                    source_id={article.source.id}
                    source_name={article.source.name}
                    size='main'
                    key={index}
                    {...article}
                  />
                </div>
              ))
            }
            { data.status === "ok" &&
              data?.articles.slice(8, 100).map((article, index) => (
                <div className={styles.short_container + "0"}>
                  <NewsCardView
                    source_id={article.source.id}
                    source_name={article.source.name}
                    key={index}
                    {...article}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </main>
    </>
  )
}

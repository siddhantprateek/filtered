import { useRouter } from 'next/router';


export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export const getStaticProps = async (context) => {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_APIKEY;
  const { params } = context

  let res = await fetch(`https://newsapi.org/v2/everything?q=${params.topic}&sources=${params.id}&from=${params.publishedAt}&apiKey=${apiKey}`)
  const data = await res.json()
  return {
    props: { data: data }
  }
}

export default function Article({ params }) {
  const router = useRouter()
  return <p>Post: {router.query.article}</p>
}
import { useRouter } from 'next/router';

export default function Article({ params }) {
  const router = useRouter()
  return <p>Post: {router.query.article}</p>
}
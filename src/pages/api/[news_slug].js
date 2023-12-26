export default async function handler(req, res) {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_APIKEY || '';
  const response = await fetch(`https://newsapi.org/v2/everything?q=${req.query.news_slug}&apiKey=${apiKey}`)
  const data = await response.json()
  res.status(200).json(data)
}

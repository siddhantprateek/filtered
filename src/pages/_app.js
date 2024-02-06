import '@/styles/globals.css'
import { AuthProvider } from '../context/auth.context';
import { Footer, Header } from '@/components';
export default function App({ Component, pageProps }) {
  return (
    <>
      <time datetime="2023-10-25" suppressHydrationWarning />
      <AuthProvider>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </AuthProvider>
    </>
  )
}

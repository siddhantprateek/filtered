import '@/styles/globals.css'
import { AuthProvider } from '../context/auth.context';
import { Footer, Header } from '@/components';
export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </AuthProvider>
    </>
  )
}

import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout title={"Prashant Mukund Das"}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

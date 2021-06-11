import '../styles/global.css'
import Header from './components/Header'

function MyApp({ Component, pageProps }) {


  // return <Component {...pageProps} />
  return <>
    <Header />
    <Component {...pageProps} />
  </>
}

export default MyApp

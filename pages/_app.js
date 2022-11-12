import '../styles/globals.css'
import {Analytics} from "@vercel/analytics/react";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return <>
      <Component {...pageProps} />
      <Analytics />
    </>
}

export default MyApp

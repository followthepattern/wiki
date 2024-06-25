import Script from 'next/script'
import './global.css'

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {
  return (
    <>
      <Script src="https://followthepattern.s3.us-east-2.amazonaws.com/fp/fp-analytics.js" />
      <Component {...pageProps} />
    </>
  )
}
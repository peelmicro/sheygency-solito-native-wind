import { Provider } from 'app/provider'
import React from 'react'
import type { SolitoAppProps } from 'solito'
import 'raf/polyfill'
import '../global.css'

function MyApp({ Component, pageProps }: SolitoAppProps) {
  // Use the layout defined at the page level, if available
  return <Provider>{<Component {...pageProps} />}</Provider>
}

export default MyApp

import { getInitialProps } from '@expo/next-adapter/document'
import Document, { Head, Main, NextScript, Html } from 'next/document'
import React from 'react'

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <meta httpEquiv="X-UA-Compatible" content="IE=edge" /> */}
          <link
            href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// Import the getInitialProps method and assign it to your component to ensure the react-native-web styles are used.
CustomDocument.getInitialProps = getInitialProps

export default CustomDocument

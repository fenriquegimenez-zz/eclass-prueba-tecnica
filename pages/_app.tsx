import type { AppProps } from 'next/app'
import { PersistGate } from 'redux-persist/integration/react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import Layout from '../components/Layout'
import { persistor } from '../store/store'
import { API_ENDPOINT } from '../utils/constants'
import { darkTheme } from '../themes/dark'

const client = new ApolloClient({
  uri: API_ENDPOINT,
  cache: new InMemoryCache(),
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ApolloProvider client={client}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </ApolloProvider>
    </ThemeProvider>
  )
}

export default MyApp

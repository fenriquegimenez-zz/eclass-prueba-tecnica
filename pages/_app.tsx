import type { AppProps } from 'next/app'
import { PersistGate } from 'redux-persist/integration/react'
import { colors, createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import Layout from '../components/Layout'
import { persistor } from '../store/store'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
})

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: colors.teal[200],
        },
      },
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
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

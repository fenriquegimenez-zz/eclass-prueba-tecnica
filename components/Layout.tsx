import React from 'react'
import Head from 'next/head'
import { Box } from '@mui/system'

import { Props } from '../types'
import Navbar from './Navbar'

const Layout = ({ children }: Props) => {
  return (
    <Box>
      <Head>
        <title>Prueba técnica ECLASS</title>
      </Head>
      <Navbar></Navbar>
      <Box
        sx={{
          padding: '1rem 2rem',
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default Layout

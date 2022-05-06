import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useQuery } from '@apollo/client'
import { Typography } from '@mui/material'
import { Box } from '@mui/material'

import { GET_CHARACTERS } from '../utils/queries'
import { Character } from '../types/Character'
import CardComponent from '../components/Card'

const Home: NextPage = () => {
  const [characters, setCharacters] = useState<Character[]>([])
  const { data, error, loading } = useQuery(GET_CHARACTERS)

  useEffect(() => {
    if (loading) return
    if (error) setCharacters([])
    if (data) setCharacters(data.characters.results)
  }, [data, loading, error])
  return (
    <div className='text-3xl font-bold underline'>
      {loading ? (
        <Typography>{loading ? 'Cargando' : ''}</Typography>
      ) : error ? (
        <p>Hubo un error</p>
      ) : (
        <Box
          sx={{
            display: 'grid',
            gridAutoColumns: '1fr',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gridTemplateRows: 'repeat(5, 1fr)',
            gap: '1rem 1rem',
          }}
        >
          {characters.map(({ id, image, name, species }) => {
            return (
              <CardComponent
                id={id}
                image={image}
                key={id}
                species={species}
                name={name}
              />
            )
          })}
        </Box>
      )}
    </div>
  )
}

export default Home

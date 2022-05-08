import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useQuery } from '@apollo/client'
import { Box } from '@mui/material'

import { GET_CHARACTERS } from '../utils/queries'
import { Character } from '../types/Character'
import CardComponent from '../components/Card'
import { getSearchTerm } from '../utils/search'
import { store } from '../store/store'
import Loading from '../components/Loading'

const Home: NextPage = () => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [searchTerm, setSearchTerm] = useState(getSearchTerm())
  store.subscribe(() => setSearchTerm(store.getState().search.search))
  const { data, error, loading } = useQuery(GET_CHARACTERS)

  useEffect(() => {
    if (loading) return
    if (error) setCharacters([])
    if (data) setCharacters(data.characters.results)
  }, [data, loading, error])

  return (
    <div className='text-3xl font-bold underline'>
      {loading ? (
        <Loading />
      ) : error ? (
        <p>Hubo un error</p>
      ) : (
        <Box
          sx={{
            display: 'grid',
            gridAutoColumns: '1fr',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
              xl: 'repeat(5, 1fr)',
            },
            gridTemplateRows: 'repeat(5, 1fr)',
            gap: '1rem 1rem',
          }}
        >
          {searchTerm === ''
            ? characters.map(({ id, image, name, species }) => {
                return (
                  <CardComponent
                    id={id}
                    image={image}
                    key={id}
                    species={species}
                    name={name}
                  />
                )
              })
            : characters
                .filter(character =>
                  character.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                )
                .map(({ id, image, name, species }) => {
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

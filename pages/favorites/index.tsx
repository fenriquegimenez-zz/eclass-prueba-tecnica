import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'

import CardComponent from '../../components/Card'
import { Character } from '../../types/Character'
import { getFavs } from '../../utils/addToFavs'
import { getSearchTerm } from '../../utils/search'
import { store } from '../../store/store'

const FavoritesPage = () => {
  const [characters, setCharacters] = useState<Character[]>(getFavs())
  store.subscribe(() => setCharacters(getFavs()))
  const [searchTerm, setSearchTerm] = useState(getSearchTerm())
  store.subscribe(() => setSearchTerm(getSearchTerm()))

  return characters.length > 0 ? (
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
              character.name.toLowerCase().includes(searchTerm.toLowerCase())
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
  ) : (
    <Box
      sx={{
        display: 'flex',
        minHeight: '80vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant='h5'>Aún no tenés favoritos</Typography>
    </Box>
  )
}

export default FavoritesPage

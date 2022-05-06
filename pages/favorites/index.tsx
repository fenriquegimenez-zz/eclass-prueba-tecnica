import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'

import CardComponent from '../../components/Card'
import { Character } from '../../types/Character'
import { getFavs } from '../../utils/addToFavs'

const FavoritesPage = () => {
  const [characters, setCharacters] = useState<Character[]>(getFavs())
  return characters.length > 0 ? (
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

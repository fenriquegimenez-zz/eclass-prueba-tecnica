import React, { useState } from 'react'
import Link from 'next/link'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import IconButton from '@mui/material/IconButton'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import StarIcon from '@mui/icons-material/Star'

import { Character } from '../types/Character'
import { addToFavs, alreadyFav, removeFromFavs } from '../utils/addToFavs'

const CardComponent = ({ id, image, name, species }: Character) => {
  const [addedToFavs, setAddedToFavs] = useState(alreadyFav(id))

  const handleFavorite = () => {
    if (!addedToFavs) {
      setAddedToFavs(true)
      addToFavs({ id, image, name, species })
    } else {
      setAddedToFavs(false)
      removeFromFavs(id)
    }
  }

  return (
    <Card sx={{ maxWidth: 345, cursor: 'pointer' }} key={id}>
      <CardMedia
        component='img'
        height='200'
        image={image}
        alt={`${name}'s picture`}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {species}
        </Typography>
        <CardActions>
          <Link href={`/character/${id}`}>
            <Button size='small'>View info</Button>
          </Link>
          <IconButton
            onClick={handleFavorite}
            sx={{
              color: addedToFavs ? 'yellow' : '',
            }}
          >
            {addedToFavs ? <StarIcon /> : <StarBorderIcon />}
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default CardComponent

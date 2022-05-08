import React, { useState } from 'react'
import Link from 'next/link'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Tooltip,
  Typography,
} from '@mui/material'
import IconButton from '@mui/material/IconButton'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import StarIcon from '@mui/icons-material/Star'
import InfoIcon from '@mui/icons-material/Info'

import { Character } from '../types/Character'
import { addToFavs, alreadyFav, removeFromFavs } from '../utils/addToFavs'
import { setLastId } from '../utils/idActions'

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
    <Card
      sx={{
        maxWidth: 345,
        cursor: 'pointer',
      }}
      key={id}
    >
      <Link href={`/character/${id}`}>
        <CardMedia
          component='img'
          height='200'
          image={image}
          alt={`${name}'s picture`}
          onClick={() => setLastId(id)}
        />
      </Link>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {species}
        </Typography>
        <CardActions disableSpacing>
          <Link href={`/character/${id}`}>
            <Tooltip title='View more info' onClick={() => setLastId(id)}>
              <IconButton>
                <InfoIcon />
              </IconButton>
            </Tooltip>
          </Link>
          <Tooltip
            title={addedToFavs ? 'Remove from favorites' : 'Add to favorites'}
          >
            <IconButton
              onClick={handleFavorite}
              sx={{
                color: addedToFavs ? 'yellow' : '',
              }}
            >
              {addedToFavs ? <StarIcon /> : <StarBorderIcon />}
            </IconButton>
          </Tooltip>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default CardComponent

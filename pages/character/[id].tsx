import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useQuery } from '@apollo/client'
import { Box, Button, Tooltip } from '@mui/material'
import { Typography } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'

import { GET_SINGLE_CHARACTER } from '../../utils/queries'
import { getLastId } from '../../utils/idActions'
import Loading from '../../components/Loading'
import { addToFavs, alreadyFav, removeFromFavs } from '../../utils/addToFavs'
import { store } from '../../store/store'

import styles from './CharacterPage.module.css'
import { Character } from '../../types/Character'

interface CharacterDetail {
  name: string
  image: string
  location: {
    name: string
  }
  origin: {
    name: string
  }
  species: string
  status: string
}

const {
  container,
  image,
  nameStyle,
  species,
  status,
  origin,
  location,
  favorite,
} = styles

const CharacterPage = () => {
  const [character, setCharacter] = useState<CharacterDetail>()
  const [isFav, setIsFav] = useState(alreadyFav(getLastId()))
  store.subscribe(() => setIsFav(alreadyFav(getLastId())))
  const { data, error, loading } = useQuery(GET_SINGLE_CHARACTER, {
    variables: {
      id: getLastId(),
    },
  })

  useEffect(() => {
    if (loading) return
    if (data) setCharacter(data.character)
    if (error) console.log(error.message)
    console.log(data)
  }, [data, error, loading])

  const handleFavorite = () => {
    if (!isFav && character) {
      setIsFav(true)
      addToFavs({
        id: getLastId(),
        image: character.image,
        name: character.name,
        species: character.species,
      })
    } else {
      setIsFav(false)
      removeFromFavs(getLastId())
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      {loading ? (
        <Loading />
      ) : character ? (
        <div className={container}>
          <div className={image}>
            <Image
              src={character.image}
              alt={`${character.name}'s picture`}
              height={400}
              width={400}
              objectFit='contain'
              style={{
                marginBottom: '2rem',
              }}
            />
          </div>
          <div className={favorite}>
            <Tooltip
              title={isFav ? 'Remove from favorites' : 'Add to favorites'}
            >
              <Button
                onClick={handleFavorite}
                size='large'
                variant={isFav ? 'contained' : 'outlined'}
                color={isFav ? 'warning' : 'primary'}
              >
                <Typography variant='h6' mr='1rem'>
                  Fav:{' '}
                </Typography>
                {isFav ? <StarIcon /> : <StarBorderIcon />}
              </Button>
            </Tooltip>
          </div>
          <div className={nameStyle}>
            <Typography
              variant='h1'
              align='left'
              component='p'
              alignSelf='center'
              mb='2rem'
            >
              {character.name}
            </Typography>
          </div>
          <div className={location}>
            <Typography
              variant='h5'
              align='left'
              component='p'
              alignSelf='center'
              mb='2rem'
            >
              Location: {character.location.name}
            </Typography>
          </div>
          <div className={origin}>
            <Typography
              variant='h6'
              align='left'
              component='p'
              alignSelf='center'
              mb='2rem'
            >
              Origin: {character.origin.name}
            </Typography>
          </div>
          <div className={status}>
            <Typography
              variant='h5'
              align='left'
              component='p'
              alignSelf='center'
              mb='2rem'
            >
              Status: {character.status}{' '}
              <CircleIcon
                color={
                  character.status === 'Alive'
                    ? 'success'
                    : character.status === 'Dead'
                    ? 'error'
                    : 'disabled'
                }
              />
            </Typography>
          </div>
          <div className={species}>
            <Typography
              variant='h5'
              align='left'
              component='p'
              alignSelf='center'
              mb='2rem'
            >
              Specie: {character.species}
            </Typography>
          </div>
        </div>
      ) : null}
    </Box>
  )
}

export default CharacterPage

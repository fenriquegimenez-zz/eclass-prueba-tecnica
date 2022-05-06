import { useState } from 'react'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import FactCheckIcon from '@mui/icons-material/FactCheck'
import StarIcon from '@mui/icons-material/Star'

import { store } from '../store/store'

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import AndroidIcon from '@mui/icons-material/Android'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getFavs } from '../utils/addToFavs'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

export default function SearchAppBar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useRouter()
  const favsQuantity = getFavs().length

  const ejercicios = [
    {
      title: 'Rick and Morty',
      url: '/',
      icon: <AndroidIcon />,
    },
    {
      title: `Favorites${favsQuantity > 0 ? ` (${favsQuantity})` : ''}`,
      url: '/favorites',
      icon: <StarIcon />,
    },
    {
      title: 'Ejercicio 1',
      url: '/ejercicio1',
      icon: <FitnessCenterIcon />,
    },
    {
      title: 'Ejercicio 2',
      url: '/ejercicio2',
      icon: <FactCheckIcon />,
    },
  ]

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 2 }}
            onClick={() => setOpen(prev => !prev)}
          >
            <MenuIcon />
          </IconButton>
          <Link href='/'>
            <Typography
              variant='h6'
              noWrap
              component='div'
              sx={{
                flexGrow: 1,
                display: { xs: 'none', sm: 'block' },
                cursor: 'pointer',
              }}
            >
              {pathname === '/' ? 'INICIO' : 'IR A INICIO'}
            </Typography>
          </Link>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search…'
              inputProps={{ 'aria-label': 'search' }}
              onChange={e =>
                store.dispatch({ type: 'SEARCH', payload: e.target.value })
              }
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor='left'
        open={open}
        ModalProps={{ onBackdropClick: () => setOpen(false) }}
      >
        <Box
          role='presentation'
          sx={{
            width: 250,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              padding: '1rem',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant='h4'>Menú</Typography>
          </Box>
          <List>
            {ejercicios.map(item => {
              return (
                <Link href={item.url} passHref key={item.title}>
                  <ListItem button onClick={() => setOpen(false)}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItem>
                </Link>
              )
            })}
          </List>
        </Box>
      </Drawer>
    </Box>
  )
}
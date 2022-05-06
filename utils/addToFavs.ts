import { store } from '../store/store'
import { Character } from '../types/Character'

export const addToFavs = (character: Character) => {
  store.dispatch({ type: 'ADD_TO_FAVS', payload: character })
}

export const getFavs = () => store.getState().favs

export const alreadyFav = (id: string) =>
  getFavs().filter(fav => fav.id === id).length > 0

export const removeFromFavs = (id: string) =>
  store.dispatch({ type: 'REMOVE_FROM_FAVS', payload: id })

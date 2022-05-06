import { Character } from '../types/Character'

const favsInitialState = {
  favs: new Array<Character>(),
}
type favsActionType =
  | {
      type: 'ADD_TO_FAVS'
      payload: Character
    }
  | {
      type: 'REMOVE_FROM_FAVS'
      payload: string
    }

export const favsReducer = (
  state = favsInitialState.favs,
  action: favsActionType
) => {
  switch (action.type) {
    case 'ADD_TO_FAVS':
      const characterInFavs = state.some(
        character => character.id === action.payload.id
      )
      if (characterInFavs) {
        return state
      } else {
        return [...state, action.payload]
      }
    case 'REMOVE_FROM_FAVS':
      return state.filter(product => product.id !== action.payload)
    default:
      return state
  }
}

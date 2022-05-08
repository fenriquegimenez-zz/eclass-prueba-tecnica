import { store } from '../store/store'

export const getLastId = () => store.getState().id.id

export const setLastId = (id: string) =>
  store.dispatch({ type: 'SET_LAST_ID', payload: id })

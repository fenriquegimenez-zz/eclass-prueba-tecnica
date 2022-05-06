import { store } from '../store/store'

export const getSearchTerm = () => store.getState().search.search

export const updateSearchTerm = (input: string) =>
  store.dispatch({ type: 'SEARCH', payload: input })

export const resetSearchTerm = () =>
  store.dispatch({ type: 'SEARCH', payload: '' })

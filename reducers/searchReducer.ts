const initialSearchState = {
  search: '',
}

type searchActionType = { type: 'SEARCH'; payload: string }

export const searchReducer = (
  state = initialSearchState,
  action: searchActionType
) => {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        search: action.payload,
      }
    default:
      return state
  }
}

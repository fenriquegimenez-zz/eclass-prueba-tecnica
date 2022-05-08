const initialIdState = {
  id: '',
}

type initialIdActionType = {
  type: 'SET_LAST_ID'
  payload: string
}

export const idReducer = (
  state = initialIdState,
  action: initialIdActionType
) => {
  switch (action.type) {
    case 'SET_LAST_ID':
      return { ...state, id: action.payload }

    default:
      return state
  }
}

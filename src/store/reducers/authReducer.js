import {
  SET_CURRENT_USER,
  LOADING,
  NOT_LOADING,
} from '../actions/actionTypes'

export const initialState = {
  currentUser: {},
  isLoading: false,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      }
    case LOADING:
      return {
        isLoading: true,
      }
    case NOT_LOADING:
      return {
        isLoading: false,
      }
    default:
      return state
  }
}

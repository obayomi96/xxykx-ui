import {
  SET_CURRENT_USER,
} from '../actions/actionTypes'

export const initialState = {
  currentUser: {},
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      }
    default:
      return state
  }
}

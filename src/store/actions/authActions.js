import {
  SET_CURRENT_USER,
  LOADING,
  NOT_LOADING
} from './actionsTypes'

import AuthService from '../../services/AuthServices'

const authService = new AuthService()

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: {
      user
    }
  }
}


export const login = (userPayload) => async (dispatch) => {
  try {
    const data = await authService.userLogin(userPayload)
    dispatch(setCurrentUser(data))
  } catch (error) {
    throw error
  }
}

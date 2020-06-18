import Swal from 'sweetalert2';

import {
  SET_CURRENT_USER,
  LOADING,
  NOT_LOADING
} from './actionTypes'

import AuthService from '../../services/AuthService'

const authService = new AuthService()

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: {
      user
    }
  }
}

export const login = (userPayload, history) => async (dispatch) => {
  try {
    dispatch({ type: LOADING })
    const data = await authService.userLogin(userPayload)
    if (data) {
      dispatch(setCurrentUser(data))
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        text: `Welcome back, ${data.name}`,
        showConfirmButton: false,
        timer: 3000,
        toast: true
      });
      history.push('/comments')
      dispatch({ type: NOT_LOADING })
    }
  } catch (error) {
    if (error) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        text: `An error occured, try again`,
        showConfirmButton: false,
        timer: 3000,
        toast: true
      });
      return error
    }
  }
  dispatch({ type: NOT_LOADING })
}

export const signup = (userPayload, history) => async (dispatch) => {
  try {
    dispatch({ type: LOADING })
    const data = await authService.userSignup(userPayload)
    if (data) {
      dispatch(setCurrentUser(data))
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        text: `Registeration done, welcome ${data.name}`,
        showConfirmButton: false,
        timer: 3000,
        toast: true
      });
      history.push('/comments')
      dispatch({ type: NOT_LOADING })
    }
  } catch (error) {
    if (error) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        text: `An error occured, try again`,
        showConfirmButton: false,
        timer: 3000,
        toast: true
      });
      return error
    }
  }
  dispatch({ type: NOT_LOADING })
}
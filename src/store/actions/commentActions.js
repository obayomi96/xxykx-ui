import Swal from 'sweetalert2';

import {
  CREATE_COMMENT,
  GET_COMMENTS,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  REPLY_COMMENT,
  GET_ONE_COMMENT,
  LOADING,
  NOT_LOADING,
  IN_LOADING,
  IN_NOT_LOADING,
} from "./actionTypes"

import CommentService from '../../services/CommentService'

const commentService = new CommentService()

export const getComments = () => async (dispatch) => {
  try {
    // dispatch({type: LOADING})
    const data = await commentService.getComments()
    if (data) {
      dispatch({
        type: GET_COMMENTS,
        payload: data
      })
    }
    // return dispatch({type: NOT_LOADING})
  } catch (error) {
    throw error
  }
  // dispatch({type: NOT_LOADING})
}

export const getOneComment = (commentId) => async (dispatch) => {
  try {
    // dispatch({type: LOADING})
    const data = await commentService.getOneComment(commentId)
    if (data) {
      dispatch({
        type: GET_ONE_COMMENT,
        payload: data
      })
    }
    // return dispatch({type: NOT_LOADING})
  } catch (error) {
    throw error
  }
  dispatch({type: NOT_LOADING})
}

export const createComment = (comment, userId) => async (dispatch) => {
  try {
    dispatch({type: IN_LOADING})
    const data = await commentService.createComment(comment, userId)
    if (data) {
      dispatch({
        type: CREATE_COMMENT,
        payload: data
      })
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        text: `Comment created`,
        showConfirmButton: false,
        timer: 3000,
        toast: true
      });
    dispatch({type: IN_NOT_LOADING})
    }
  } catch(error) {
    throw error
  }
  dispatch({type: IN_NOT_LOADING})
}

export const updateComment = (updatedData) => async (dispatch) => {
  try {
    // dispatch({type: LOADING})
    const data = await commentService.updateComment(updatedData)
    dispatch({
      type: UPDATE_COMMENT,
      payload: data
    })
    // dispatch({type: NOT_LOADING})
  } catch(error) {
    throw error
  }
  // dispatch({type: NOT_LOADING})
}

export const deleteComment = (id) => async (dispatch) => {
  try {
    // dispatch({type: LOADING})
    const data = await commentService.deleteComment(id)
    dispatch({
      type: DELETE_COMMENT,
      payload: data
    })
    // dispatch({type: NOT_LOADING})
  } catch(error) {
    throw error
  }
  // dispatch({type: NOT_LOADING})
}

export const replyToComment = (commentId) => async (dispatch) => {
  try {
    // dispatch({type: LOADING})
    const data = await commentService.replyToComment(commentId)
    dispatch({
      type: REPLY_COMMENT,
      payload: data
    })
    // dispatch({type: NOT_LOADING})
  } catch(error) {
    throw error
  }
  // dispatch({type: NOT_LOADING})
}

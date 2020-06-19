import {
  CREATE_COMMENT,
  GET_COMMENTS,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  REPLY_COMMENT,
  LOADING,
  NOT_LOADING
} from "./actionTypes"

import CommentServices from '../../services/CommentService'

const commentServices = new CommentServices()

export const getComments = () => async (dispatch) => {
  try {
    dispatch({type: LOADING})
    const data = await commentServices.getComments()
    if (data) {
      dispatch({
        type: GET_COMMENTS,
        payload: data
      })
      dispatch({type: NOT_LOADING})
    }
  } catch (error) {
    throw error
  }
  dispatch({type: NOT_LOADING})
}


export const createComment = (payload) => async (dispatch) => {
  try {
    dispatch({type: LOADING})
    const data = await commentServices.createComment(payload)
    dispatch({
      type: CREATE_COMMENT,
      payload: data
    })
  } catch(error) {
    throw error
  }
}

export const updateComment = (updatedData) => async (dispatch) => {
  try {
    const data = await commentServices.updateComment(updatedData)
    dispatch({
      type: UPDATE_COMMENT,
      payload: data
    })
    dispatch({type: NOT_LOADING})
  } catch(error) {
    throw error
  }
  dispatch({type: NOT_LOADING})
}

export const deleteComment = (id) => async (dispatch) => {
  try {
    dispatch({type: LOADING})
    const data = await commentServices.deleteComment(id)
    dispatch({
      type: DELETE_COMMENT,
      payload: data
    })
    dispatch({type: NOT_LOADING})
  } catch(error) {
    throw error
  }
  dispatch({type: NOT_LOADING})
}

export const replyToComment = (commentId) => async (dispatch) => {
  try {
    dispatch({type: LOADING})
    const data = await commentServices.replyToComment(commentId)
    dispatch({
      type: REPLY_COMMENT,
      payload: data
    })
    dispatch({type: NOT_LOADING})
  } catch(error) {
    throw error
  }
  dispatch({type: NOT_LOADING})
}

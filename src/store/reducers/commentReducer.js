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
} from '../actions/actionTypes'

export const initialState = {
  comments: [],
  singleComment: {},
  singleReply: {},
  isLoading: false,
  inLoading: false,
}

export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      }
    case GET_ONE_COMMENT:
      return {
        ...state,
        singleComment: action.payload,
      }
    case CREATE_COMMENT:
      return {
        ...state,
        comments: action.payload,
      }
    case UPDATE_COMMENT:
      return {
        ...state,
        singleComment: action.payload,
      }
    case DELETE_COMMENT:
      return {
        ...state,
        singleComment: {}
      }
    case REPLY_COMMENT:
      return {
        ...state,
        singleReply: action.payload,
      }
    case LOADING:
      return {
        isLoading: true,
      }
    case NOT_LOADING:
      return {
        isLoading: false,
      }
      case IN_LOADING:
      return {
        inLoading: true,
      }
    case IN_NOT_LOADING:
      return {
        inLoading: false,
      }
    default:
      return state
  }
}

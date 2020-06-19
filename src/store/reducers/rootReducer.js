import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { commentReducer } from './commentReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  comment: commentReducer,
});

export default rootReducer

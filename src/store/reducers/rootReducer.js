import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
// import { commentReducer } from './commentReducer'
// import { replyReducer } from './replyReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  // comment: commentReducer,
  // reply: replyReducer,
});

export default rootReducer

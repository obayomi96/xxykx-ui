import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import authStore from '../utils/auth'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  
  return (
    <Route
      {...rest}
      render={props => (authStore.getToken() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      ))
      }
    />
  )
}

export default ProtectedRoute

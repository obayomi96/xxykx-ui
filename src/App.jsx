import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import authStore from './utils/auth'

// import './assets/sass/index.scss'

import Home from './pages/Home'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'
import Comment from './pages/Comment'
import Error404 from './pages/Error404'
import Header from './components/Header'

authStore.confirmAuth()

function App() {
  return (
    <BrowserRouter>
      <div className='App-container'>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact component={Comment} path='/comments' />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route component={Error404} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
